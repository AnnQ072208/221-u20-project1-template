


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
    
  }
}

document.addEventListener("keydown", checkKeyPress);
document.addEventListener("click", function(){
  goToLocation("/feed");
});

let fadeText = document.getElementById("fade_text");

fadeText.onclick = () => {
  window.location = "/feed";
}