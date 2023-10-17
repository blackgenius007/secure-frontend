import React, { useState } from 'react';

const LocationTracker = () => {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch user location and send it to the backend API
  const fetchLocationAndSendToBackend = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Create a location object with latitude and longitude
          const location = {
            latitude,
            longitude,
          };

          // Send the location data to the backend API
          sendLocationToBackend(location);
        },
        (error) => {
          setError(`Error getting location: ${error.message}`);
        }
      );
    } else {
      setError('Geolocation is not available in this browser.');
    }
  };

  // Function to send location data to the backend API
  const sendLocationToBackend = (location) => {
    fetch('YOUR_BACKEND_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response from the backend API if needed
        console.log('Location data sent successfully:', data);
        setLocationData(data);
      })
      .catch((error) => {
        setError(`Error sending location data to the backend: ${error.message}`);
      });
  };

  return (
    <div>
      <button onClick={fetchLocationAndSendToBackend}>Get Location and Send to Backend</button>
      {error && <p>{error}</p>}
      {locationData && (
        <div>
          <h2>Location Data Sent:</h2>
          <p>Latitude: {locationData.latitude}</p>
          <p>Longitude: {locationData.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationTracker;
