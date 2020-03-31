// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["23 Dec 19", "24 Dec 19", "26 Dec 19", "27 Dec 19", "30 Dec 19", "31 Dec 19", "02 Jan 20", "03 Jan 20", "06 Jan 20", "07 Jan 20", "08 Jan 20", "09 Jan 20", "10 Jan 20", "13 Jan 20", "14 Jan 20", "15 Jan 20", "16 Jan 20", "17 Jan 20", "21 Jan 20", "22 Jan 20", "23 Jan 20", "24 Jan 20", "27 Jan 20", "28 Jan 20", "29 Jan 20", "30 Jan 20", "31 Jan 20", "03 Feb 20", "04 Feb 20", "05 Feb 20", "06 Feb 20", "07 Feb 20", "10 Feb 20", "11 Feb 20", "12 Feb 20", "13 Feb 20", "14 Feb 20", "18 Feb 20", "19 Feb 20", "20 Feb 20", "21 Feb 20", "24 Feb 20", "25 Feb 20", "26 Feb 20", "27 Feb 20", "28 Feb 20", "02 Mar 20", "03 Mar 20", "04 Mar 20", "05 Mar 20", "06 Mar 20", "09 Mar 20", "10 Mar 20", "11 Mar 20", "12 Mar 20", "13 Mar 20", "16 Mar 20", "17 Mar 20", "18 Mar 20", "19 Mar 20", "20 Mar 20", "23 Mar 20", "24 Mar 20", "25 Mar 20", "26 Mar 20", "27 Mar 20"
],
    datasets: [{
      label: "Index",
      yAxisID: 'A',
      lineTension: 0.1,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [28551.53, 28515.45, 28621.39, 28645.26, 28462.14, 28538.44, 28868.8, 28634.88, 28703.38, 28583.68, 28745.09, 28956.9, 28823.77, 28907.05, 28939.67, 29030.22, 29297.64, 29348.1, 29196.04, 29186.27, 29160.09, 28989.73, 28535.8, 28722.85, 28734.45, 28859.44, 28256.03, 28399.81, 28807.63, 29290.85, 29379.77, 29102.51, 29276.82, 29276.34, 29551.42, 29423.31, 29398.08, 29232.19, 29348.03, 29219.98, 28992.41, 27960.8, 27081.36, 26957.59, 25766.64, 25409.36, 26703.32, 25917.41, 27090.86, 26121.28, 25864.78, 23851.02, 25018.16, 23553.22, 21200.62, 23185.62, 20188.52, 21237.38, 19898.92, 20087.19, 19173.98, 18591.93, 20704.91, 21200.55, 22552.17, 21636.78
      ],
    },
    {
      label: "Confirmed Cases",
      yAxisID: 'B',
      lineTension: 0.1,
      backgroundColor: "rgba(255,255,255,0.2)",
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(255,0,0,1)",
      pointBorderColor: "rgba(255,0,0,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255,0,0,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 5, 5, 5, 5, 6, 11, 11, 12, 12, 12, 12, 13, 13, 15, 15, 15, 15, 15, 35, 53, 53, 59, 60, 62, 101, 122, 153, 221, 278, 605, 959, 1281, 1663, 2179, 4632, 6421, 7786, 13680, 19101, 43667, 53740, 65778, 83836, 101657
      ],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: true
        },
        ticks: {
          // maxTicksLimit: 7
        }
      }],
      yAxes: [{
        id:'B',
        type:'linear',
        position:'left',
      },{
        id:'A',
        type:'linear',
        position:'right',
        ticks: {
          min: 15000,
          max: 35000,
          // maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
