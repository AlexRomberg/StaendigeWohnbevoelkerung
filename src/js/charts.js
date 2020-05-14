var pieCanvas = document.getElementById('pieChartCanvas').getContext('2d');
var lineCanvas = document.getElementById('lineChartCanvas').getContext('2d');

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
                radius: 5
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
            data: [10, 20, 30, 40, 50],
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

function createDiagramms(json) {
    data = JSON.parse(json);

    // get years
    years = Object.keys(data);
    years.pop();
    line['data']['labels'] = years;

    // get coutries
    countrys = [];
    data[years[0]].forEach(value => {
        countrys.push(value['country']);
    });

    pie['data']['labels'] = years;

    // get Values from Json orderd by year
    values = [];
    years.forEach(year => {
        yearValueList = []
        data[year].forEach(yearValues => {
            yearValueList.push(yearValues['ammount']);
        });
        values.push(yearValueList)
    });
    values.reverse();


    valuesLand = [];
    for (let i = 0; i < values[0].length; i++) {
        valueLand = [];
        values.forEach(firstElement => {
            valueLand.push(firstElement[i]);
        });
        valuesLand.push(valueLand);
    }

    console.log(valuesLand);

    color = ["rgb(37, 160, 53)", "rgb(66, 120, 207)", "rgb(238, 71, 71)", "rgb(255, 228, 55)", "rgb(205, 81, 215)"]
    for (let i = 0; i < countrys.length; i++) {
        line['data']['datasets'].push({
            label: countrys[i],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: color[i],
            data: valuesLand[i]
        });
    }
    /*
    {
        label: 'My First dataset',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }
    */

    var lineChart = new Chart(lineCanvas, line);
    var pieChart = new Chart(pieCanvas, pie);
}

createDiagramms('{"district": "Arbon","2019": [{"country": "Deutschland","ammount": "985"},{"country": "Italien","ammount": "691"},{"country": "Mazedonien","ammount": "340"},{"country": "Portugal","ammount": "200"},{"country": "Sonstige (inkl. ausl\u00e4ndische Staatsangeh\u00f6rigkeit unbekannt)","ammount": "2594"}],"2018": [{"country": "Deutschland","ammount": "988"},{"country": "Italien","ammount": "675"},{"country": "Mazedonien","ammount": "330"},{"country": "Portugal","ammount": "212"},{"country": "Sonstige (inkl. ausl\u00e4ndische Staatsangeh\u00f6rigkeit unbekannt)","ammount": "2475"}],"2017": [{"country": "Deutschland","ammount": "995"},{"country": "Italien","ammount": "680"},{"country": "Mazedonien","ammount": "356"},{"country": "Portugal","ammount": "213"},{"country": "Sonstige (inkl. ausl\u00e4ndische Staatsangeh\u00f6rigkeit unbekannt)","ammount": "2399"}],"2016": [{"country": "Deutschland","ammount": "974"},{"country": "Italien","ammount": "688"},{"country": "Mazedonien","ammount": "361"},{"country": "Portugal","ammount": "195"},{"country": "Sonstige (inkl. ausl\u00e4ndische Staatsangeh\u00f6rigkeit unbekannt)","ammount": "2294"}],"2015": [{"country": "Deutschland","ammount": "974"},{"country": "Italien","ammount": "688"},{"country": "Mazedonien","ammount": "358"},{"country": "Portugal","ammount": "199"},{"country": "Sonstige (inkl. ausl\u00e4ndische Staatsangeh\u00f6rigkeit unbekannt)","ammount": "2185"}]}');