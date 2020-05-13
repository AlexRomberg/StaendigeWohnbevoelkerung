var select = document.getElementById("community").addEventListener("change", dropdownSelectionChanged);
var svg = document.getElementById("map");

var paths = svg.getElementsByTagName("path");

Array.from(paths).forEach(path => {
    path.addEventListener("click", communityClicked);
});

function communityClicked(e) {
    //console.log(e.target.id);
    window.location.replace("index.php?x=" + e.target.id);
}

function dropdownSelectionChanged() {
    var x = document.getElementById("community").value;
    //Redirect to yourself
    window.location.replace("index.php?x=" + x);
}