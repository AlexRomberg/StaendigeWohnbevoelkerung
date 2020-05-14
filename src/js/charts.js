var pieCanvas = document.getElementById('pieChartCanvas').getContext('2d');
var lineCanvas = document.getElementById('lineChartCanvas').getContext('2d');

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
            display: true
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
    data: {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ["#25A035", "#4278CF", "#EE4747", "#E4CE43", "#CD51D7"],
            borderColor: "rgba(0,0,0,0)"
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
}

function createDiagramms(countries, years, values) {



    var lineChart = new Chart(lineCanvas, line);
    var pieChart = new Chart(pieCanvas, pie);
}
createDiagramms(null, null, null);