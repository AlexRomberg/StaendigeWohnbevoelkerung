function community_clicked() {
    element.onclick = function () {
        alert('you suck, but that shitty code you wrote did somehow work.');
         // Update dropdown list with the selected community on the map
    };
}

function dropdown_selection_changed() {
    var x = document.getElementById("community").value;
    //Redirect to yourself
    window.location.replace("index.php?x=" + x);
}