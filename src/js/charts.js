var pieCanvas = document.getElementById('pieChartCanvas').getContext('2d');
var lineCanvas = document.getElementById('lineChartCanvas').getContext('2d');
var lineChart;
var pieChart;
var pieBackup;

let line = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        datasets: []
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    zeroLineWidth: 3
                }
            }],
            yAxes: [{
                gridLines: {
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
                radius: 5
            },
            line: {
                borderWidth: 3.5
            }
        },
        gridLines: {
            display: true
        }
    }
}

let pie = {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        datasets: [{
            data: [],
            backgroundColor: ["#25A035", "#4278CF", "#EE4747", "#E4CE43", "#CD51D7"],
            borderColor: "rgba(0,0,0,0)"
        }],
        hiddenSlices: [1, 3]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
}

function createDiagramms(data) {
    // get years
    years = Object.keys(data);
    years.pop();
    line['data']['labels'] = years;

    // get coutries
    countrys = [];
    data[years[0]].forEach(value => {
        countrys.push(value['country']);
    });

    // get Values from Json orderd by year
    values = [];
    years.forEach(year => {
        yearValueList = []
        data[year].forEach(yearValues => {
            yearValueList.push(yearValues['ammount']);
        });
        values.push(yearValueList)
    });



    valuesLand = [];
    for (let i = 0; i < values[0].length; i++) {
        valueLand = [];
        values.forEach(firstElement => {
            valueLand.push(firstElement[i]);
        });
        valuesLand.push(valueLand);
    }

    color = ["rgb(37, 160, 53)", "rgb(66, 120, 207)", "rgb(238, 71, 71)", "rgb(255, 228, 55)", "rgb(205, 81, 215)"]
    for (let i = 0; i < countrys.length; i++) {
        line['data']['datasets'].push({
            label: countrys[i],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: color[i],
            data: valuesLand[i]
        });
    }

    pie['data']['labels'] = countrys;
    pieData = (values.pop()).map(Number);
    pieBackup = pieData.slice();
    pie['data']['datasets'][0]['data'] = pieData;

    lineChart = new Chart(lineCanvas, line);
    pieChart = new Chart(pieCanvas, pie);
}

createDiagramms(ar);