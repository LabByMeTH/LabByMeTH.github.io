/*Go to top button*/
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("GoToTopBtn").style.display = "block";
  }
  else {
    document.getElementById("GoToTopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function GoTotopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*Go to top button*/
