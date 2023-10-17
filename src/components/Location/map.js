import React, { useRef, useEffect, useState } from 'react';
import config from '../../../config';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = config.MAPBOX_ACCESS_TOKEN;
 

  export default function GpxMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const markerRef = useRef(null);
    const popupRef = useRef(null);
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [zoom, setZoom] = useState(9);
  
    useEffect(() => {
      if (map.current) return;
  
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
  
            map.current = new mapboxgl.Map({
              container: mapContainer.current,
              style: 'mapbox://styles/mapbox/streets-v12',
              center: [userLng, userLat],
              attributionControl: false,
              zoom: zoom,
            });
  
  
            map.current.on('move', () => {
              setLng(map.current.getCenter().lng.toFixed(4));
              setLat(map.current.getCenter().lat.toFixed(4));
              setZoom(map.current.getZoom().toFixed(2));
            });
  
            const marker = new mapboxgl.Marker().setLngLat([userLng, userLat]).addTo(map.current);
            markerRef.current = marker;
  
            const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
              .setText('Your location');
  
            marker.setPopup(popup);
            popup.addTo(map.current);
  
            popupRef.current = popup;
          },
          () => {
            alert('Unable to access your location. Please enable location services and refresh the page.');
          }
        );
      } else {
        alert('Geolocation is not available in your browser. Please use a different browser.');
      }
    }, [zoom]);
  
    useEffect(() => {
      if (!map.current || !lng || !lat) return;
  
      const sourceId = `geofence-source-${Math.random().toString(36).substr(2, 9)}`;
      const geofencePolygon = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [lng - 0.1, lat - 0.1],
              [lng + 0.1, lat - 0.1],
              [lng + 0.1, lat + 0.1],
              [lng - 0.1, lat + 0.1],
              [lng - 0.1, lat - 0.1],
            ],
          ],
        },
      };
  
      map.current.on('load', () => {
        if (map.current.getSource(sourceId)) {
          map.current.removeSource(sourceId);
        }
  
        map.current.addSource(sourceId, {
          type: 'geojson',
          data: geofencePolygon,
        });
  
        map.current.addLayer({
          id: 'geofence-layer',
          type: 'fill',
          source: sourceId,
          paint: {
            'fill-color': '#088',
            'fill-opacity': 0.4,
          },
        });
      });
    }, [lng, lat]);
  
    useEffect(() => {
      if (!markerRef.current) return;
  
      if (lng && lat) {
        markerRef.current.setLngLat([lng, lat]);
        popupRef.current.setLngLat([lng, lat]); // Update popup position along with marker
      }
    }, [lng, lat]);
  
    return (
      <div>
        <div className="sidebarMap">
          {lng !== null && lat !== null ? (
            `Longitude: ${lng} | Latitude: ${lat} | Zoom: ${zoom}`
          ) : (
            'Fetching your location and setting up a geofence...'
          )}
        </div>
        <div ref={mapContainer} className="map-container" style={{ width: '100%', height: '160px' }} />
      </div>
    );
  }

// export default function App() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(null); // Initialize with null
//   const [lat, setLat] = useState(null); // Initialize with null
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     const geofencePolygon = {
//       type: 'Feature',
//       properties: {},
//       geometry: {
//         type: 'Polygon',
//         coordinates: [
//           [
//             [lng - 0.1, lat - 0.1],
//             [lng + 0.1, lat - 0.1],
//             [lng + 0.1, lat + 0.1],
//             [lng - 0.1, lat + 0.1],
//             [lng - 0.1, lat - 0.1],
//           ],
//         ],
//       },
//     };

//     if (map.current) return; // Initialize map only once

//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLat = position.coords.latitude;
//           const userLng = position.coords.longitude;

//           map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v12',
//             center: [userLng, userLat],
//             attributionControl: false,
//             zoom: zoom,
//           });

//           // Remove the existing source if it exists
//           if (map.current.getSource('geofence')) {
//             map.current.removeSource('geofence');
//           }

//           map.current.on('load', () => {
//             map.current.addSource('geofence', {
//               type: 'geojson',
//               data: geofencePolygon,
//             });

//             map.current.addLayer({
//               id: 'geofence-layer',
//               type: 'fill',
//               source: 'geofence',
//               paint: {
//                 'fill-color': '#088',
//                 'fill-opacity': 0.4,
//               },
//             });
//           });

//           map.current.on('move', () => {
//             setLng(map.current.getCenter().lng.toFixed(4));
//             setLat(map.current.getCenter().lat.toFixed(4));
//             setZoom(map.current.getZoom().toFixed(2));
//           });
//         },
//         () => {
//           alert('Unable to access your location. Please enable location services and refresh the page.');
//         }
//       );
//     } else {
//       alert('Geolocation is not available in your browser. Please use a different browser.');
//     }
//   }, [lng, lat, zoom]);

//   // useEffect(() => {
//   //   if (map.current) return; // Initialize map only once

//   //   // Check if Geolocation is available in the browser
//   //   if ('geolocation' in navigator) {
//   //     // Request user's location
//   //     navigator.geolocation.getCurrentPosition(
//   //       (position) => {
//   //         const userLat = position.coords.latitude;
//   //         const userLng = position.coords.longitude;

//   //         map.current = new mapboxgl.Map({
//   //           container: mapContainer.current,
//   //           style: 'mapbox://styles/mapbox/streets-v12',
//   //           center: [userLng, userLat], // Use user's location
//   //           attributionControl: false,
//   //           zoom: zoom,
//   //         });

//   //         map.current.on('move', () => {
//   //           setLng(map.current.getCenter().lng.toFixed(4));
//   //           setLat(map.current.getCenter().lat.toFixed(4));
//   //           setZoom(map.current.getZoom().toFixed(2));
//   //         });
//   //       },
//   //       () => {
//   //         // Handle errors when the user denies location access or other errors occur
//   //         alert('Unable to access your location. Please enable location services and refresh the page.');
//   //       }
//   //     );
//   //   } else {
//   //     // Geolocation is not available in the browser
//   //     alert('Geolocation is not available in your browser. Please use a different browser.');
//   //   }
//   // }, [lng, lat, zoom]);

//   return (
//     <div>
//       <div className="sidebarMap">
//         {lng !== null && lat !== null
//           ? `Longitude: ${lng} | Latitude: ${lat} | Zoom: ${zoom}`
//           : 'Fetching your location and setting up a geofence...'}
//       </div>
//       <div
//         ref={mapContainer}
//         className="map-container"
//         style={{ width: '100%', height: '160px' }}
//       />
//     </div>
//   );
// }

// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = 'pk.eyJ1IjoiMnZpcnR1YWwiLCJhIjoiY2xtaDZ4ZW83MGxlNDNkcjIyczRkb200diJ9.CuPSFvDlxOJboImWxrMwog';

// export default function App() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [lng, lat],
//       attributionControl: false,
//       zoom: zoom
//     });

//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   return (
//     <div>
//       <div className="sidebar">
//         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//       </div>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// }

// // Geofence.js
// import React, { useEffect, useState } from 'react';
// import ReactMapGL, { Source, Layer } from 'react-map-gl';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// const Geofence = () => {
//   const [viewport, setViewport] = useState({
//     width: '100%',
//     height: '100%',
//     latitude: 0, // Initial latitude
//     longitude: 0, // Initial longitude
//     zoom: 13, // Initial zoom level
//   });

//   const [userCoordinates, setUserCoordinates] = useState(null);

//   useEffect(() => {
//     // Use a function or API to retrieve the user's coordinates (latitude and longitude)
//     // For example, you can use the browser's geolocation API here
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserCoordinates([position.coords.longitude, position.coords.latitude]);
//         setViewport({
//           ...viewport,
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error('Error getting user coordinates:', error);
//       }
//     );
//   }, []);

//   return (
//     <div>
//       <h1>Geofence Map</h1>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken="YOUR_MAPBOX_API_TOKEN"
//         onViewportChange={(newViewport) => setViewport(newViewport)}
//       >
//         {/* Display the user's location */}
//         {userCoordinates && (
//           <Source
//             type="geojson"
//             data={{
//               type: 'Point',
//               coordinates: userCoordinates,
//             }}
//           >
//             <Layer
//               type="circle"
//               id="userLocation"
//               paint={{
//                 'circle-radius': 8,
//                 'circle-color': 'blue',
//               }}
//             />
//           </Source>
//         )}

//         {/* Add a geocoder for user input */}
//         <MapboxGeocoder
//           accessToken="YOUR_MAPBOX_API_TOKEN"
//           mapboxgl={window.mapboxgl}
//           position="top-left"
//         />
//       </ReactMapGL>
//     </div>
//   );
// };

// export default Geofence;

// import React, { useEffect } from 'react';

// const GpxMap = () => {
//   const MAX_SPEED = 1; // m/s
//   const DEFAULT_COLOR = 'yellow';

//   useEffect(() => {
//     // Load the Google Maps API with your API key
//     const googleMapsScript = document.createElement('script');
//     googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places`;
//     googleMapsScript.async = true;
//     window.document.body.appendChild(googleMapsScript);

//     // Wait for the script to load before initializing the map
//     googleMapsScript.onload = () => {
//       const _map = new window.google.maps.Map(document.getElementById("map"), {
//         mapTypeId: 'satellite',
//         gestureHandling: 'greedy',
//       });
//       // Rest of your code...
//     };

//     // Clean up the script when the component unmounts
//     return () => {
//       window.document.body.removeChild(googleMapsScript);
//     };

//   }, []);

//   return (
//     <main id="app" style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
//       <textarea id="gpx" rows="4" placeholder="Paste GPX data here..." style={{ flex: '1', border: '1px solid silver', font: 'inherit', boxSizing: 'border-box', padding: '.25em .5em', outlineColor: 'dodgerblue' }}></textarea>
//       <div id="map" style={{ flex: '1 1 auto' }}></div>
//     </main>
//   );
// };

// export default GpxMap;

// import React, { useEffect } from 'react';

// const GpxMap = () => {
//   const MAX_SPEED = 1; // m/s
//   const DEFAULT_COLOR = 'yellow';

//   useEffect(() => {
//     const _map = new window.google.maps.Map(document.getElementById("map"), {
//       mapTypeId: 'satellite',
//       gestureHandling: 'greedy',
//     });
//     const _markers = [];

//     document.querySelector('#gpx').onInput = function (e) {
//       const gpx = e.currentTarget.value;

//       const parser = new DOMParser();
//       const xml = parser.parseFromString(gpx, "text/xml");

//       const coords = Array.from(xml.querySelectorAll('trkpt')).map((pt) => ({
//         lat: Number(pt.getAttribute('lat')),
//         lng: Number(pt.getAttribute('lon')),
//         time: new Date(pt.querySelector('time').textContent),
//       }));

//       plotRoute(coords);
//     };

//     function plotRoute(coords) {
//       _markers.forEach((m) => m.setMap(null));

//       const bound = new window.google.maps.LatLngBounds();
//       coords.forEach((c) => bound.extend(c));

//       _map.fitBounds(bound);

//       let prev = coords[0];
//       for (let i = 1; i < coords.length; i++) {
//         const c = coords[i];

//         const dist = calcDistance(prev, c);
//         let sec, speed;
//         if (c.time) {
//           sec = (c.time - prev.time) / 1000;
//           speed = dist / sec;
//         }

//         const speedFactor = speed && Math.min(Math.max(speed, 0), MAX_SPEED);
//         let color = speed ? `rgb(255, ${255 * (1 - speedFactor)}, ${255 * (1 - speedFactor)})` : DEFAULT_COLOR;

//         _markers.push(new window.google.maps.Marker({
//           map: _map,
//           icon: markerIcon(color),
//           position: new window.google.maps.LatLng(c),
//           title: sec ? `${speed.toFixed(1)}m/s (${dist.toFixed(1)}m in ${sec.toFixed(1)}s)` : dist.toFixed(1) + 'm',
//         }));

//         _markers.push(new window.google.maps.Polyline({
//           path: [prev, c],
//           geodesic: true,
//           strokeWeight: 2,
//           strokeColor: color,
//           strokeOpacity: 1,
//           map: _map,
//         }));

//         prev = c;
//       }
//     }

//     function markerIcon(color) {
//       return {
//         path: window.google.maps.SymbolPath.CIRCLE,
//         strokeWeight: 0,
//         fillColor: color,
//         fillOpacity: 1,
//         anchor: new window.google.maps.Point(0, 0),
//         scale: 6,
//       };
//     }

//     function calcDistance(c1, c2) {
//       const R = 6371e3;
//       const φ1 = c1.lat * Math.PI / 180;
//       const φ2 = c2.lat * Math.PI / 180;
//       const Δφ = (c2.lat - c1.lat) * Math.PI / 180;
//       const Δλ = (c2.lng - c1.lng) * Math.PI / 180;

//       const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//         Math.cos(φ1) * Math.cos(φ2) *
//         Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//       const d = R * c;
//       return d;
//     }

//     // Sample
//     plotRoute([
//       { lat: 60.8046, lng: 11.0234, time: new Date(1564593954000) },
//       { lat: 60.8046, lng: 11.0231, time: new Date(1564594065000) },
//       { lat: 60.8047, lng: 11.0227, time: new Date(1564594106000) },
//       // ... Add more coordinates as needed
//     ]);
//   }, []);

//   return (
//     <main id="app" style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
//       <textarea id="gpx" rows="4" placeholder="Paste GPX data here..." style={{ flex: '1', border: '1px solid silver', font: 'inherit', boxSizing: 'border-box', padding: '.25em .5em', outlineColor: 'dodgerblue' }}></textarea>
//       <div id="map" style={{ flex: '1 1 auto' }}></div>
//     </main>
//   );
// };

// export default GpxMap;
