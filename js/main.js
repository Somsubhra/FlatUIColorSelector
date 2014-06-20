var colorMap = {
  "turquoise": ["#1abc9c", "rgb(26, 188, 156)", "rgba(26, 188, 156, 1.0)"],
  "emerald": ["#2ecc71", "rgb(46, 204, 113)", "rgba(46, 204, 113, 1.0)"],
  "peter-river": ["#3498db", "rgb(52, 152, 219)", "rgba(52, 152, 219, 1.0)"],
  "amethyst": ["#9b59b6", "rgb(155, 89, 182)", "rgba(155, 89, 182, 1.0)"],
  "wet-asphalt": ["#34495e", "rgb(52, 73, 94)", "rgba(52, 73, 94, 1.0)"],
  "green-sea": ["#16a085", "rgb(22, 160, 133)", "rgba(22, 160, 133, 1.0)"],
  "nephritis": ["#27ae60", "rgb(39, 174, 96)", "rgba(39, 174, 96, 1.0)"],
  "belize-hole": ["#2980b9", "rgb(41, 128, 185)", "rgba(41, 128, 185, 1.0)"],
  "wisteria": ["#8e44ad", "rgb(142, 68, 173)", "rgba(142, 68, 173, 1.0)"],
  "midnight-blue": ["#2c3e50", "rgb(44, 62, 80)", "rgba(44, 62, 80, 1.0)"],
  "sunflower": ["#f1c40f", "rgb(241, 196, 15)", "rgba(241, 196, 15, 1.0)"],
  "carrot": ["#e67e22", "rgb(230, 126, 34)", "rgba(230, 126, 34, 1.0)"],
  "alizarin": ["#e74c3c", "rgb(231, 76, 60)", "rgba(231, 76, 60, 1.0)"],
  "clouds": ["#ecf0f1", "rgb(236, 240, 241)", "rgba(236, 240, 241, 1.0)"],
  "concrete": ["#95a5a6", "rgb(149, 165, 166)", "rgba(149, 165, 166, 1.0)"],
  "orange": ["#f39c12", "rgb(243, 156, 18)", "rgba(243, 156, 18, 1.0)"],
  "pumpkin": ["#d35400", "rgb(211, 84, 0)", "rgba(211, 84, 0, 1.0)"],
  "pomegranate": ["#c0392b", "rgb(192, 57, 43)", "rgba(192, 57, 43, 1.0)"],
  "silver": ["#bdc3c7", "rgb(189, 195, 199)", "rgba(189, 195, 199, 1.0)"],
  "asbestos": ["#7f8c8d", "rgb(127, 140, 141)", "rgba(127, 140, 141, 1.0)"]
};

var colorNames = Object.keys(colorMap);
var cols = 5;
var rows = Math.ceil(colorNames.length / cols);
var currentColor;
var cellWidth = 100;
var cellHeight = 60;

function getColorFormatIndex() {
  var format = $("#color-format-selector").val();
  var index = -1
  if(format == 'hex') {
    index = 0;
  } else if(format == 'rgb') {
    index = 1;
  } else if(format == 'rgba') {
    index = 2;
  }
  return index;
}

function setColorOutput() {
  if(!currentColor) {
    return;
  }
  var index = getColorFormatIndex();
  var colorOutput = $("#color-output");
  colorOutput.val(colorMap[currentColor][index]);
  colorOutput.focus();
  colorOutput.select();
  document.execCommand("Copy");
  $("#message").fadeIn();
  $("#message").fadeOut();
}

function colorInputClicked(event) {
  currentColor = event.target.id;
  setColorOutput();
}

$(function() {
  $("#message").hide();
  $("body").css("width", cellWidth * cols);
  var colorGrid = $("#color-grid");
  colorGrid.css("width", cellWidth * cols);
  colorGrid.css("height", cellHeight * rows);
  for(var i = 1 ; i <= rows ; i++) {
    for(var j = 1 ; j <= cols ; j++) {
      var colorName = colorNames[(i - 1) * cols + j - 1]
      var html = "<a class='color-input' href='#'' id='" +
      colorName +
      "' style='top: " +
      (i - 1) * cellHeight +
      "px; left: " +
      (j - 1) * cellWidth +
      "px; background-color: " +
      colorMap[colorName][0] +
      "; width: " +
      cellWidth +
      "px; height: " +
      cellHeight +
      "px'>" +
      colorName +
      "</a>";
      colorGrid.append(html);
    }
  }
  $(".color-input").click(colorInputClicked);
  $("#color-format-selector").change(setColorOutput);
});
