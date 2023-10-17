// PieChart.js

import React, { useEffect } from 'react';

const PieChart = ({ data, colors }) => {
  useEffect(() => {
    function sliceSize(dataNum, dataTotal) {
      return (dataNum / dataTotal) * 360;
    }

    function addSlice(sliceSize, offset, sliceID, color) {
      return (
        <div className={`slice ${sliceID}`} key={sliceID}>
          <span
            style={{
              transform: `rotate(${offset}deg) translate3d(0,0,0)`,
              backgroundColor: color,
            }}
          ></span>
        </div>
      );
    }

    function iterateSlices(sliceSize, offset, dataCount, sliceCount, color) {
      const slices = [];
      const maxSize = 179;

      if (sliceSize <= maxSize) {
        slices.push(addSlice(sliceSize, offset, `s${dataCount}-${sliceCount}`, color));
      } else {
        slices.push(addSlice(maxSize, offset, `s${dataCount}-${sliceCount}`, color));
        slices.push(
          ...iterateSlices(sliceSize - maxSize, offset + maxSize, dataCount, sliceCount + 1, color)
        );
      }
      return slices;
    }

    function createPie() {
      let listTotal = 0;
      data.forEach((dataNum) => {
        listTotal += dataNum;
      });

      let offset = 0;

      const slices = data.map((dataNum, i) => {
        const size = sliceSize(dataNum, listTotal);
        const sliceElements = iterateSlices(size, offset, i, 0, colors[i]);
        offset += size;
        return sliceElements;
      });

      return slices.flat();
    }

    const pieElements = createPie();
    const pieChart = (
      <main>
        <h1>HTML Pie Chart</h1>
        <p>Change the number values in the HTML.</p>
        <section>
          <div className="pieID pie">{pieElements}</div>
        </section>
      </main>
    );

    // Replace the pie chart in the DOM with the React-generated pie chart
    const pieChartContainer = document.querySelector('#pieChartContainer');
    if (pieChartContainer) {
      pieChartContainer.innerHTML = '';
      pieChartContainer.appendChild(pieChart);
    }
  }, [data, colors]);

  return (
    <div id="pieChartContainer">
      {/* The pie chart will be rendered here */}
    </div>
  );
};

export default PieChart;
