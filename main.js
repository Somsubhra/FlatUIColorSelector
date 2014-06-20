window.onload = function() {
  document.getElementById("btn").onclick = function() {
    var color = document.getElementById("color-out");
    color.focus();
    color.select();
    document.execCommand('Copy');
  }
}
