import React from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';

const GooglePieChart = () => {
  const { inmates } = useSelector((state) => state.inmates);

  const chartData = [
    ['Offence Category', 'Value'],
    ...inmates.map((item, index) => [item.offence_category, index + 1]),
  ];

  const options = {
    title: 'Offence Categories',
    is3D: true,
    width: 500,
    height: 400,
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        graph_id="PieChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>
  );
};

export default GooglePieChart;





// import React from 'react';
// import {
//   retrieveAllInmates,
 
// } from '../InmateServices/inmateSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { Chart } from 'react-google-charts';

// const GooglePieChart = () => {
//     // get all inmates after retreival
//     const { inmates } = useSelector(
//       (state) => state.inmates
//     );
//   // Mock data
//   // const data = [
//   //   { category: 'Category 1', value: 30 },
//   //   { category: 'Category 2', value: 20 },
//   //   { category: 'Category 3', value: 50 },
//   // ];

//   const chartData = [
//     ['Category', 'Value'],
//     ...inmates.map((item) => [item.category, item.value]),
//   ];

//   const options = {
//     title: 'My 3D Pie Chart',
//     is3D: true,
//     width: 400,
//     height: 300,
//   };

//   return (
//     <div>
//       <Chart
//         chartType="PieChart"
//         data={chartData}
//         options={options}
//         graph_id="PieChart"
//         width="100%"
//         height="400px"
//         legend_toggle
//       />
//     </div>
//   );
// };

// export default GooglePieChart;
