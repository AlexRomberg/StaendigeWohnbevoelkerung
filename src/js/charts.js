var ctx = document.getElementById('lineExample').getContext('2d');
let line = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019'],
        datasets: []
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
            display: false
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
}

let pie = {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: [{
            value: 20,
            color: "#878BB6"
        },
        {
            value: 40,
            color: "#4ACAB4"
        },
        {
            value: 10,
            color: "#FF8153"
        },
        {
            value: 30,
            color: "#FFEA88"
        }
    ],

    // Configuration options go here
    options: {
        tooltips: {
            enabled: false
        },
        legend: {
            display: false
        }
    }
}

function createDiagramms(countries, years, values) {



    //var lineChart = new Chart(ctx, line);
    var pieChart = new Chart(ctx, pie);
}
createDiagramms(null, null, null);