// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["23 Dec 19", "24 Dec 19", "25 Dec 19", "26 Dec 19", "27 Dec 19", "30 Dec 19", "31 Dec 19", "02 Jan 20", "03 Jan 20", "06 Jan 20", "07 Jan 20", "08 Jan 20", "09 Jan 20", "10 Jan 20", "13 Jan 20", "14 Jan 20", "15 Jan 20", "16 Jan 20", "17 Jan 20", "20 Jan 20", "21 Jan 20", "22 Jan 20", "23 Jan 20", "03 Feb 20", "04 Feb 20", "05 Feb 20", "06 Feb 20", "07 Feb 20", "10 Feb 20", "11 Feb 20", "12 Feb 20", "13 Feb 20", "14 Feb 20", "17 Feb 20", "18 Feb 20", "19 Feb 20", "20 Feb 20", "21 Feb 20", "24 Feb 20", "25 Feb 20", "26 Feb 20", "27 Feb 20", "28 Feb 20", "02 Mar 20", "03 Mar 20", "04 Mar 20", "05 Mar 20", "06 Mar 20", "09 Mar 20", "10 Mar 20", "11 Mar 20", "11 Mar 20", "12 Mar 20", "12 Mar 20", "13 Mar 20", "16 Mar 20", "17 Mar 20", "18 Mar 20", "19 Mar 20", "20 Mar 20", "23 Mar 20", "24 Mar 20", "25 Mar 20", "26 Mar 20", "27 Mar 20"
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
      data: [2962.75, 2982.68, 2981.88, 3007.35, 3005.04, 3040.02, 3050.12, 3085.2, 3083.79, 3083.41, 3104.8, 3066.89, 3094.88, 3092.29, 3115.57, 3106.82, 3090.04, 3074.08, 3075.5, 3095.79, 3052.14, 3060.75, 2976.53, 2746.61, 2783.29, 2818.09, 2866.51, 2875.96, 2890.49, 2901.67, 2926.9, 2906.07, 2917.01, 2983.62, 2984.97, 2975.4, 3030.15, 3039.67, 3031.23, 3013.05, 2987.93, 2991.33, 2880.3, 2970.93, 2992.9, 3011.67, 3071.68, 3034.51, 2943.29, 2996.76, 2968.52, 2968.52, 2923.49, 2923.49, 2887.43, 2789.25, 2779.64, 2728.76, 2702.13, 2745.62, 2660.17, 2722.44, 2781.59, 2764.91, 2772.2 
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
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 547, 639, 19693, 23680, 27409, 30553, 34075, 42306, 44327, 44699, 59832, 66292, 72364, 74139, 74546, 74999, 75472, 77152, 77660, 78065, 78498, 78824, 80026, 80151, 80271, 80422, 80573, 80735, 80757, 80921, 80921, 80932, 80932, 80945, 81033, 81058, 81102, 81156, 81250, 81496, 81591, 81661, 81782, 81897 
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
          min: 2500,
          max: 3500,
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
