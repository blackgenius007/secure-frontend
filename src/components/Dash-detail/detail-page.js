import React, { useEffect, useState, useRef } from 'react';
import {   Link  } from 'react-router-dom';
import {
  retrieveAllInmates,
  
} from '../InmateServices/inmateSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faFile, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Popup } from 'semantic-ui-react';
import { IconContext } from 'react-icons';
import {  FcViewDetails,FcOpenedFolder,FcGlobe } from "react-icons/fc";
import DonutChart from './donutStat';
import PieChartStats from './pieStats';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const CurrentStats = ({ user,ownerEmail }) => {
  const dispatch = useDispatch();
    // retrieve all inmates from API
    useEffect(() => {
      // Dispatch retrieveAllInmates action
      dispatch(retrieveAllInmates(ownerEmail));
    }, [dispatch, ownerEmail]);

  const { inmates } = useSelector((state) => state.inmates);

  const [femaleCount, setFemaleCount] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [totalInmatesCount, setTotalInmatesCount] = useState(0);
  const [newInmatesCount, setNewInmatesCount] = useState(0);

  useEffect(() => {
    const currentDate = moment();
    const lastTwoWeeks = moment().subtract(2, 'weeks');

    // Calculate counts
    const femaleCount = inmates.filter(
      (inmate) => inmate.gender === 'Female'
    ).length;
    const maleCount = inmates.filter(
      (inmate) => inmate.gender === 'Male'
    ).length;
    const newInmatesCount = inmates.filter((inmate) =>
      moment(inmate.createdAt).isAfter(lastTwoWeeks)
    ).length;
    const totalInmatesCount = inmates.length;

    setFemaleCount(femaleCount);
    setMaleCount(maleCount);
    setNewInmatesCount(newInmatesCount);
    setTotalInmatesCount(totalInmatesCount);
  }, [inmates]);

  return (
    <div style={{ position: 'relative' }}>
      <div
        id="container"
        style={{
          backgroundColor: '#ffff',
          boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.3)',
          borderRadius: '5px',
          flexGrow: '.2',
          padding: '1.5em',
        }}
      >
        <div id="info" style={{ display: 'flex' }}>
          <div id="legend" style={{ flexGrow: 1 }}>
            <h4
              style={{
                fontSize: '1.1rem', // Adjusted font size to make it slightly smaller
                color: '#333', // Maintained the color
                fontFamily: 'Arial, sans-serif', // Using a popular sans-serif font
                textDecoration: 'underline', // Added underline for text decoration
                marginBottom: '1rem', // Maintained the bottom margin
              }}
            >
              Available Statistics - {moment().format('YYYY-MM-DD')}
            </h4>

            <ul
              className="responses"
              style={{
                listStyleType: 'none',
                padding: 0,
                color: '#7F878F',
                borderRadius: '5px',
                border: '1px solid #ccc',
                background: '#f5f5f5',
                marginBottom: '20px',
              }}
            >
              <li
                className="info-provided"
                style={{
                  borderTop: '2px solid #eee',
                  padding: '.5em 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1rem',
                  color: '#333',
                }}
              >
                <span>Female</span>
                <span
                  className="num"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#00aaff',
                  }}
                >
                  {femaleCount}
                </span>
              </li>
              <li
                className="notice-provided"
                style={{
                  borderTop: '2px solid #eee',
                  padding: '.5em 1rem',
                  borderBottom: '2px solid #eee',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1rem',
                  color: '#333',
                }}
              >
                <span>Male</span>
                <span
                  className="num"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#00aaff',
                  }}
                >
                  {maleCount}
                </span>
              </li>
              <li
                className="total-inmates"
                style={{
                  borderTop: '2px solid #eee',
                  padding: '.5em 1rem',
                  borderBottom: '2px solid #eee',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1rem',
                  color: '#333',
                }}
              >
                <span>Total Inmates</span>
                <span
                  className="num"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#00aaff',
                  }}
                >
                  {totalInmatesCount}
                </span>
              </li>
              <li
                className="new-inmates"
                style={{
                  borderTop: '2px solid #eee',
                  padding: '.5em 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1rem',
                  color: '#333',
                }}
              >
                <span>Latest Inmate</span>
                <span
                  className="num"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#00aaff',
                  }}
                >
                  {newInmatesCount}
                </span>
              </li>
            </ul>

            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Popup
                trigger={
                  <Link to={`/employer/attendance/ `}>
                    <IconContext.Provider
                      value={{ color: '#5a5a5a', size: '20px' }}
                    >
                        <FontAwesomeIcon icon={faDatabase} style={{ margin: '0 10px', color: 'orange', fontSize: '24px' }} />
                    </IconContext.Provider>
                  </Link>
                }
                position="left"
              >
               Database
              </Popup>
              <Popup
                trigger={
                  <Link to={`/employer/attendance/ `}>
                    <IconContext.Provider
                      value={{ color: '#5a5a5a', size: '20px' }}
                    >
                       <FontAwesomeIcon icon={faFile} style={{ margin: '0 10px', color: 'green', fontSize: '24px' }} />
                    </IconContext.Provider>
                  </Link>
                }     
                position="bottom center"
              >
               Case Files
              </Popup>
              <Popup
                trigger={
                  <Link to={`/employer/attendance/ `}>
                    <IconContext.Provider
                      value={{ color: '#5a5a5a', size: '20px' }}
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ margin: '0 10px', color: 'brown', fontSize: '24px' }} />
                    </IconContext.Provider>
                  </Link>
                }
                position="bottom center"
              >
              Tracking wizard
              </Popup>
  
 
</div>
          </div>
          <div
            id="chart"
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h4
              style={{
                alignSelf: 'center',
                fontSize: '1.5rem', // Adjusted font size to make it larger
                color: '#3498db', // Changed color to a teal blue (#3498db)
                fontFamily: 'monospace', // Using a monospace font for a techie look
                marginTop: '1em', // Added margin at the top for spacing
              }}
            >
              {user && user.data.organizationName} Correctional Facility
            </h4>

            {/* <DonutChart data={data} /> */}
            <PieChartStats />
          </div>
        </div>
      </div>
      <footer
  style={{
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    marginTop: '2rem',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <nav>
    <ul
      style={{
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      }}
    >
      <li style={{ marginRight: '1rem' }}>
        <a
          href="/users"
          style={{ textDecoration: 'none', color: '#333' }}  // Remove underline and set color
        >
          View users
        </a>
      </li>
      <li style={{ marginRight: '1rem' }}>
        <a
          href="/about"
          style={{ textDecoration: 'none', color: '#333' }}  // Remove underline and set color
        >
          Admin
        </a>
      </li>
      <li style={{ marginRight: '1rem' }}>
        <a
          href="/contact"
          style={{ textDecoration: 'none', color: '#333' }}  // Remove underline and set color
        >
          Subscription
        </a>
      </li>
    </ul>
  </nav>
</footer>

    </div>
  );
};

export default CurrentStats;

// import React, { useEffect, useRef } from 'react';
// import DonutChart from './donutStat';
// import PieChartStats from './pieStats';
// import { useSelector, useDispatch } from 'react-redux';
// import moment from 'moment';

// const CurrentStats = ({user}) => {
//   // const { user } = useSelector((state) => state.auth);
// console.log(user)
//   const data = [
//     ['Work Force', 'Percentage'],
//     ['HR', 10],
//     ['Accounts', 20],
//     ['Engineering', 60],
//     ['Procurement', 10],
//   ];
//   const data2 = {
//     labels: ['Offense A', 'Offense B', 'Offense C', 'Offense D'],
//     values: [30, 20, 15, 35],
//   };

//   const currentDate = moment().format('YYYY-MM-DD');

//   return (
//     <div style={{ position: 'relative' }}>
//       <div
//         id="container"
//         style={{
//           backgroundColor: '#ffff',
//           boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.3)',
//           borderRadius: '5px',
//           flexGrow: '.2',
//           padding: '1.5em',
//         }}
//       >
//         <div id="info" style={{ display: 'flex' }}>
//           <div id="legend" style={{ flexGrow: 1 }}>
//             <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem' }}>
//               Available Statistics @{currentDate}
//             </h4>
//             <p
//               className="sub-title"
//               style={{
//                 fontWeight: 'bold',
//                 fontSize: 'smaller',
//                 color: '#7F878F',
//               }}
//             >
//               Last 7 days
//             </p>
//             <ul
//               className="responses"
//               style={{
//                 listStyleType: 'none',
//                 padding: 0,
//                 color: '#7F878F',
//                 borderRadius: '5px',
//                 border: '1px solid #ccc',
//                 background: '#f5f5f5',
//                 marginBottom: '20px',
//               }}
//             >
//               <li
//                 className="not-exist"
//                 style={{
//                   borderTop: '2px solid #eee',
//                   padding: '.5em 1rem',
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   fontSize: '1rem',
//                   color: '#333',
//                 }}
//               >
//                 <span>Employees</span>
//                 <span className="num" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#00aaff' }}>
//                   380
//                 </span>
//               </li>
//               <li
//                 className="not-provided"
//                 style={{
//                   borderTop: '2px solid #eee',
//                   padding: '.5em 1rem',
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   fontSize: '1rem',
//                   color: '#333',
//                 }}
//               >
//                 <span>New Employee </span>
//                 <span className="num" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#00aaff' }}>
//                   39
//                 </span>
//               </li>
//               <li
//                 className="info-provided"
//                 style={{
//                   borderTop: '2px solid #eee',
//                   padding: '.5em 1rem',
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   fontSize: '1rem',
//                   color: '#333',
//                 }}
//               >
//                 <span>Female</span>
//                 <span className="num" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#00aaff' }}>
//                   100
//                 </span>
//               </li>
//               <li
//                 className="notice-provided"
//                 style={{
//                   borderTop: '2px solid #eee',
//                   padding: '.5em 1rem',
//                   borderBottom: '2px solid #eee',
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   fontSize: '1rem',
//                   color: '#333',
//                 }}
//               >
//                 <span>Male</span>
//                 <span className="num" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#00aaff' }}>
//                   280
//                 </span>
//               </li>
//             </ul>
//           </div>
//           <div
//             id="chart"
//             style={{
//               flexGrow: 1,
//               display: 'flex',
//               flexDirection: 'column',
//             }}
//           >
//             <h4 style={{ alignSelf: 'center', fontSize: '1.2rem', color: '#333' }}>
//               Organization - {user && user.data.organizationName}
//             </h4>
//             {/* <DonutChart data={data} /> */}
//             <PieChartStats data={data2} />
//           </div>
//         </div>
//       </div>
//       <footer
//           style={{
//             backgroundColor: '#f0f0f0',
//             padding: '1rem',
//             marginTop: '2rem',
//             borderRadius: '5px',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           <nav>
//             <ul
//               style={{
//                 display: 'flex',
//                 listStyleType: 'none',
//                 margin: 0,
//                 padding: 0,
//               }}
//             >
//               <li style={{ marginRight: '1rem' }}>
//                 <a href="/users">View users</a>
//               </li>
//               <li style={{ marginRight: '1rem' }}>
//                 <a href="/about">Admin</a>
//               </li>
//               <li style={{ marginRight: '1rem' }}>
//                 <a href="/contact">Subscription</a>
//               </li>
//             </ul>
//           </nav>
//         </footer>
//       {/* Footer menu (conditionally rendered) */}
//       {/* {user && user.data.role === 'owner' && (
//         <footer
//           style={{
//             backgroundColor: '#f0f0f0',
//             padding: '1rem',
//             marginTop: '2rem',
//             borderRadius: '5px',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           <nav>
//             <ul
//               style={{
//                 display: 'flex',
//                 listStyleType: 'none',
//                 margin: 0,
//                 padding: 0,
//               }}
//             >
//               <li style={{ marginRight: '1rem' }}>
//                 <a href="/users">View users</a>
//               </li>
//               <li style={{ marginRight: '1rem' }}>
//                 <a href="/about">Admin</a>
//               </li>
//               <li style={{ marginRight: '1rem' }}>
//                 <a href="/contact">Subscription</a>
//               </li>
//             </ul>
//           </nav>
//         </footer>
//       )} */}
//     </div>
//   );
// };

// export default CurrentStats;

// import React, { useEffect, useRef } from 'react';
// import DonutChart from './donutStat';
// import { useSelector, useDispatch } from 'react-redux';
// import moment from 'moment';

// const ChartComponent = () => {
//     const {user} = useSelector(
//         (state) => state.auth
//       );
//     const data = [
//         ['Offense', 'Percentage'],
//         ['Robbery', 70],
//         ['Domestic violence', 20],
//         ['Cyber crime', 50],
//         ['Homicide', 35],
//       ];

//       const currentDate = moment().format('YYYY-MM-DD');
//   return (
//     <div

//     >
//       <div
//         id="container"
//         style={{
//           backgroundColor: '#ffff',
//           boxShadow: '0 0 25px 2px rgba(0,0,0,.3)',
//           borderRadius: '5px',
//           flexGrow: '.2',
//           padding: '1.5em'
//         }}
//       >
//            <div
//           id="info"
//           style={{
//             display: 'flex'
//           }}
//         >
//           <div
//             id="legend"
//             style={{
//               flexGrow: 1
//             }}
//           >
//             <h4>Available statictics @{currentDate}</h4>
//             <p
//               className="sub-title"
//               style={{
//                 fontWeight: 'bold',
//                 fontSize: 'smaller',
//                 color: '#7F878F'
//               }}
//             >
//               Last 7 days
//             </p>
//             <ul
//               className="responses"
//               style={{
//                 listStyleType: 'none',
//                 padding: 0,
//                 color: '#7F878F'
//               }}
//             >
//               <li
//                 className="not-exist"
//                 style={{
//                   borderTop: '2px solid #eee',
//                   padding: '.5em 0'
//                 }}
//               >
//                 Total number of inmates
//                 <span
//                   className="num"
//                   style={{
//                     float: 'right'
//                   }}
//                 >
//                   380
//                 </span>
//               </li>
//               <li
//                 className="not-provided"
//                 style={{
//                   borderTop: '2px solid #eee',
//                   padding: '.5em 0'
//                 }}
//               >
//                Inmates awaiting trial
//                 <span
//                   className="num"
//                   style={{
//                     float: 'right'
//                   }}
//                 >
//                   39
//                 </span>
//               </li>
//               <li
//                 className="info-provided"
//                 style={{
//                   borderTop: '2px solid #eee',
//                   padding: '.5em 0'
//                 }}
//               >
//                Total female
//                 <span
//                   className="num"
//                   style={{
//                     float: 'right'
//                   }}
//                 >
//                   100
//                 </span>
//               </li>
//               <li
//                 className="notice-provided"
//                 style={{
//                   borderTop: '2px solid #eee',
//                   padding: '.5em 0',
//                   borderBottom: '2px solid #eee'
//                 }}
//               >
//                 Total male
//                 <span
//                   className="num"
//                   style={{
//                     float: 'right'
//                   }}
//                 >
//                   280
//                 </span>
//               </li>
//             </ul>

//           </div>
//           <div
//             id="chart"
//             style={{
//               flexGrow: 1,
//               display: 'flex',
//               flexDirection: 'column'
//             }}
//           >
//             <h4
//               style={{
//                 alignSelf: 'centre'
//               }}
//             >
//            {user.data.Penitentiary} Correctional Centre
//             </h4>
//         <DonutChart data={data}  />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ChartComponent;
