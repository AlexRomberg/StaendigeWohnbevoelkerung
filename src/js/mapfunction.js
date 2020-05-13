var svg = document.getElementById("map");
svg.getElementsByTagName("path").addEventListener("click", communityClicked);

function communityClicked() {
    alert('Ouch!');
    //document.getElementById("community").selectedIndex = " Herdern"; // Update dropdown list with the selected community on the map
}

function dropdown_selection_changed() {
    var x = document.getElementById("community").value;
    //Redirect to yourself
    window.location.replace("index.php?x=" + x);
}