// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart4");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["27 Dec 19", "30 Dec 19", "02 Jan 20", "03 Jan 20", "06 Jan 20", "07 Jan 20", "08 Jan 20", "09 Jan 20", "10 Jan 20", "13 Jan 20", "14 Jan 20", "15 Jan 20", "16 Jan 20", "17 Jan 20", "20 Jan 20", "21 Jan 20", "22 Jan 20", "23 Jan 20", "24 Jan 20", "27 Jan 20", "28 Jan 20", "29 Jan 20", "30 Jan 20", "31 Jan 20", "03 Feb 20", "04 Feb 20", "05 Feb 20", "06 Feb 20", "07 Feb 20", "10 Feb 20", "11 Feb 20", "12 Feb 20", "13 Feb 20", "14 Feb 20", "17 Feb 20", "18 Feb 20", "19 Feb 20", "20 Feb 20", "21 Feb 20", "24 Feb 20", "25 Feb 20", "26 Feb 20", "27 Feb 20", "28 Feb 20", "02 Mar 20", "03 Mar 20", "04 Mar 20", "05 Mar 20", "06 Mar 20", "09 Mar 20", "10 Mar 20", "11 Mar 20", "12 Mar 20", "13 Mar 20", "16 Mar 20", "17 Mar 20", "18 Mar 20", "19 Mar 20", "20 Mar 20", "23 Mar 20", "24 Mar 20", "25 Mar 20", "26 Mar 20", "27 Mar 20"],
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
      data: [23757.6, 23506.37, 23836.26, 23702.35, 23581.29, 23723.38, 23832.02, 24016.7, 24021.4, 23896.59, 23928.21, 23763.86, 23940.41, 24141.07, 24002.45, 23845.28, 23706.29, 23707.05, 23969.13, 23416.13, 24027.63, 24164.73, 23781.1, 23237.03, 23460.01, 23844.85, 24236.63, 24490.35, 24478.32, 24507.7, 24688.89, 24861.28, 24892.15, 24867.01, 25120.54, 25223.51, 25477.55, 25080.16, 24773.15, 23427.19, 23090.44, 23422.54, 22799.37, 21984.21, 21655.09, 21748.2, 21946.03, 21554.88, 20799.89, 18475.91, 17870.18, 17928.64, 14894.44, 15954.29, 14980.34, 15314.77, 15120.48, 15466.97, 15731.85, 15559.8, 16948.6, 17243.68, 17369.38, 16822.59      ],
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
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 20, 229, 322, 453, 655, 888, 2036, 2502, 3089, 3858, 4636, 9172, 10149, 12462, 12462, 17660, 27980, 31506, 35713, 41035, 47021, 63927, 69176, 74386, 80589, 86498      ],
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
