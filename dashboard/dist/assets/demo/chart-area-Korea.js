// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart3");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["23 Dec 19", "24 Dec 19", "26 Dec 19", "27 Dec 19", "30 Dec 19", "02 Jan 20", "03 Jan 20", "06 Jan 20", "07 Jan 20", "08 Jan 20", "09 Jan 20", "10 Jan 20", "13 Jan 20", "14 Jan 20", "15 Jan 20", "16 Jan 20", "17 Jan 20", "20 Jan 20", "21 Jan 20", "22 Jan 20", "23 Jan 20", "28 Jan 20", "29 Jan 20", "30 Jan 20", "31 Jan 20", "03 Feb 20", "04 Feb 20", "05 Feb 20", "06 Feb 20", "07 Feb 20", "10 Feb 20", "11 Feb 20", "12 Feb 20", "13 Feb 20", "14 Feb 20", "17 Feb 20", "18 Feb 20", "19 Feb 20", "20 Feb 20", "21 Feb 20", "24 Feb 20", "25 Feb 20", "26 Feb 20", "27 Feb 20", "28 Feb 20", "02 Mar 20", "03 Mar 20", "04 Mar 20", "05 Mar 20", "06 Mar 20", "09 Mar 20", "10 Mar 20", "11 Mar 20", "12 Mar 20", "13 Mar 20", "16 Mar 20", "17 Mar 20", "18 Mar 20", "19 Mar 20", "20 Mar 20", "23 Mar 20", "24 Mar 20", "25 Mar 20", "26 Mar 20", "27 Mar 20"],
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
      data: [2203.71, 2190.08, 2197.93, 2204.21, 2197.67, 2175.17, 2176.46, 2155.07, 2175.54, 2151.31, 2186.45, 2206.39, 2229.26, 2238.88, 2230.98, 2248.05, 2250.57, 2262.64, 2239.69, 2267.25, 2246.13, 2176.72, 2185.28, 2148, 2119.01, 2118.88, 2157.9, 2165.63, 2227.94, 2211.95, 2201.07, 2223.12, 2238.38, 2232.96, 2243.59, 2242.17, 2208.88, 2210.34, 2195.5, 2162.84, 2079.04, 2103.61, 2076.77, 2054.89, 1987.01, 2002.51, 2014.15, 2059.33, 2085.26, 2040.22, 1954.77, 1962.93, 1908.27, 1834.33, 1771.44, 1714.86, 1672.44, 1591.2, 1457.64, 1566.15, 1482.46, 1609.97, 1704.76, 1686.24, 1717.73
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
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4, 4, 4, 11, 15, 16, 19, 23, 24, 27, 28, 28, 28, 28, 30, 31, 31, 104, 204, 833, 977, 1261, 1766, 2337, 4335, 5186, 5621, 6088, 6593, 7478, 7513, 7755, 7869, 7979, 8236, 8320, 8413, 8565, 8652, 8961, 9037, 9137, 9241, 9332
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
