window.onload = function() {
  document.getElementById("btn").onclick = function() {
    var color = document.getElementById("color-output");
    color.focus();
    color.select();
    document.execCommand('Copy');
  }
}
