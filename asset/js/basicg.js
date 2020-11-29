var options = {
  series: [{
  name: 'Valenbisi',
  data: [44, 55, 41, 67, 22, 43]
}, {
  name: 'Particular',
  data: [13, 23, 20, 8, 13, 27]
}],
  chart: {
  type: 'area',
  height: 250,
  stacked: true,
  toolbar: {
    show: false
  },
  zoom: {
    enabled: false
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
plotOptions: {
  bar: {
    horizontal: false,
  },
},
xaxis: {
  type: 'datetime',
  categories: ['11/23/2020 GMT', '11/24/2020 GMT', '11/25/2020 GMT', '11/26/2020 GMT',
    '11/27/2020 GMT', '11/28/2020 GMT'
  ],
},
legend: {
  position: 'bottom',
},
fill: {
  opacity: 1
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


