var colorMap = {
  "turquoise": ["#1abc9c", "rgb(26, 188, 156)"],
  "emerald": ["#2ecc71", "rgb(46, 204, 113)"],
  "peter-river": ["#3498db", "rgb(52, 152, 219)"],
  "amethyst": ["#9b59b6", "rgb(155, 89, 182)"],
  "wet-asphalt": ["#34495e", "rgb(52, 73, 94)"],
  "green-sea": ["#16a085", "rgb(22, 160, 133)"],
  "nephritis": ["#27ae60", "rgb(39, 174, 96)"],
  "belize-hole": ["#2980b9", "rgb(41, 128, 185)"],
  "wisteria": ["#8e44ad", "rgb(142, 68, 173)"],
  "midnight-blue": ["#2c3e50", "rgb(44, 62, 80)"],
  "sunflower": ["#f1c40f", "rgb(241, 196, 15)"],
  "carrot": ["#e67e22", "rgb(230, 126, 34)"],
  "alizarin": ["#e74c3c", "rgb(231, 76, 60)"],
  "clouds": ["#ecf0f1", "rgb(236, 240, 241)"],
  "concrete": ["#95a5a6", "rgb(149, 165, 166)"],
  "orange": ["#f39c12", "rgb(243, 156, 18)"],
  "pumpkin": ["#d35400", "rgb(211, 84, 0)"],
  "pomegranate": ["#c0392b", "rgb(192, 57, 43)"],
  "silver": ["#bdc3c7", "rgb(189, 195, 199)"],
  "asbestos": ["#7f8c8d", "rgb(127, 140, 141)"]
};

var colorNames = Object.keys(colorMap);
var cols = 5;
var rows = Math.ceil(colorNames.length / cols);
var currentColor;
var cellWidth = 60;
var cellHeight = 60;

function getColorFormatIndex() {
  var format = document.getElementById("color-format-selector").value;
  var index = -1
  if(format == 'hex') {
    index = 0;
  } else if(format == 'rgb') {
    index = 1;
  }
  return index;
}

function setColorOutput() {
  var index = getColorFormatIndex();
  var colorOutput = document.getElementById("color-output");
  colorOutput.value = colorMap[currentColor][index];
  colorOutput.focus();
  colorOutput.select();
  document.execCommand("Copy");
}

function colorInputClicked(event) {
  currentColor = event.target.id;
  setColorOutput();
}

window.onload = function() {
  document.body.style.width = cellWidth * cols;
  var colorGrid = document.getElementById("color-grid");
  colorGrid.style.width = cellWidth * cols;
  colorGrid.style.height = cellHeight * rows;
  for(var i = 1 ; i <= rows ; i++) {
    for(var j = 1 ; j <= cols ; j++) {
      var colorName = colorNames[(i - 1) * cols + j - 1]
      colorGrid.innerHTML += "<a class='color-input' href='#'' id='" +
      colorName +
      "' style='top: " +
      (i - 1) * cellHeight +
      "px; left: " +
      (j - 1) * cellWidth +
      "px; background-color: " +
      colorMap[colorName][0] +
      ";'></a>";
    }
  }
  var colorsInput = document.getElementsByClassName("color-input");
  for(var i = 0 ; i < colorsInput.length ; i++) {
    colorsInput[i].onclick = colorInputClicked;
  }
  document.getElementById("color-format-selector").onchange = setColorOutput;
}
