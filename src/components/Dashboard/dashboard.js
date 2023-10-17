import React from 'react';
import Details  from  '../Dash-detail/detail-page';
import Map from '../Location/map';
import { useSelector, useDispatch } from 'react-redux';

 

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
 
  const ownerEmail = user?.data?.ownerEmail;     
  return (
    <div  >
      {/* Left Column (Map) */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Map />
      </div>

      {/* Right Column (Details) */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Details user={user}  ownerEmail={ownerEmail} />
      </div>
    </div>
  );
}

export default Dashboard;


// function Dashboard() {
//     const {user} = useSelector(
//     (state) => state.auth
//   );
//   return (
//     <>
//          <div><Details user={user}/></div>
//        <Map/>  
//     </>
 
//   )
// }

// export default Dashboard






// import React from 'react';
// import ChartComponent from  '../Chart/chart';
// import { useSelector, useDispatch } from 'react-redux';


// function dashboard() {
//   const {user} = useSelector(
//     (state) => state.auth
//   );
//   return (

//     <div><ChartComponent/></div>
//   )
// }

// export default dashboard