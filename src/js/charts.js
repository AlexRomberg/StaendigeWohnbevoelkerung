 var ctx = document.getElementById('lineExample').getContext('2d');
 var chart = new Chart(ctx, {
     // The type of chart we want to create
     type: 'line',

     // The data for our dataset
     data: {
         labels: ['2015', '2016', '2017', '2018', '2019'],
         datasets: [{
                 label: 'My First dataset',
                 backgroundColor: 'rgba(238, 71, 71, 0.0)',
                 borderColor: 'rgb(238, 71, 71)',
                 data: [5, 2, 20, 30, 67]
             },
             {
                 label: 'My Second dataset',
                 backgroundColor: 'rgba(255, 228, 55, 0.0)',
                 borderColor: 'rgb(255, 228, 55)',
                 data: [10, 3, 5, 19, 17]
             },
             {
                 label: 'My third dataset',
                 backgroundColor: 'rgba(37, 160, 53, 0.0)',
                 borderColor: 'rgb(37, 160, 53)',
                 data: [7, 11, 13, 20, 17]
             }
         ]
     },

     // Configuration options go here
     options: {
         tooltips: {
             enabled: false
         },
         scales: {
             xAxes: [{
                 gridLines: {
                     color: "rgba(0, 0, 0, 0)",
                     zeroLineWidth: 3
                 }
             }],
             yAxes: [{
                 gridLines: {
                     color: "rgba(0, 0, 0, 0)",
                     zeroLineWidth: 3
                 },
                 ticks: {
                     suggestedMin: 0,
                     suggestedMax: 50
                 }
             }]
         },
         legend: {
             position: 'right'
         },
         elements: {
             point: {
                 radius: 0
             },
             line: {
                 borderWidth: 3.5
             }
         },
         gridLines: {
             display: false
         }
     }
 });