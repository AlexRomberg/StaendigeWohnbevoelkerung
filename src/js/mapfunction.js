function community_clicked() {
    element.onclick = function () {
        alert('you suck, but that shitty code you wrote did somehow work.');
        document.getElementById("community").selectedIndex = " Herdern"; // Update dropdown list with the selected community on the map
    };
}

function dropdown_selection_changed() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("community").innerHTML = "You selected: " + x;

}