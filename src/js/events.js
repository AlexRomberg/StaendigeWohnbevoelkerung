var select = document.getElementById("community").addEventListener("change", dropdownSelectionChanged);

var legend = document.getElementById("legend");
var inputs = legend.getElementsByTagName("input");

Array.from(inputs).forEach(input => {
    input.addEventListener("click", legendChanged);
});


var svg = document.getElementById("map");
var paths = svg.getElementsByTagName("path");

Array.from(paths).forEach(path => {
    path.addEventListener("click", communityClicked);
});

function legendChanged(e) {
    id = e.target.id;
    country = id.substr(0, id.length - 1);
    index = id.substr(-1);
    line.data.datasets[index].hidden = !e.target.checked;
    lineChart.update();
    //removeData(lineChart, index)
}

function communityClicked(e) {
    window.location.replace("index.php?x=" + e.target.id);
}

function dropdownSelectionChanged() {
    var x = document.getElementById("community").value;
    //Redirect to yourself
    window.location.replace("index.php?x=" + x);
}