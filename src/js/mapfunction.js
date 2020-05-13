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

var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;

var ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

var myData = {
    "Deutschland": 10,
    "Italien": 14,
    "Portugal": 2,
    "Matzedonien": 12,
    "Sonstige": 2
};

var Piechart = function(options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function() {
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data) {
            var val = this.options.data[categ];
            total_value += val;
        }

        var start_angle = 0;
        for (categ in this.options.data) {
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;

            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                start_angle,
                start_angle + slice_angle,
                this.colors[color_index % this.colors.length]
            );

            start_angle += slice_angle;
            color_index++;
        }

    }
}

var myPiechart = new Piechart({
    canvas: myCanvas,
    data: myData,
    colors: ["#FFE437", "#EE4747", "#CD51D7", "#25A035", "#4278CF"]
});

myPiechart.draw();