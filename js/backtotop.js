// Show the button when the user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
};

// Smooth scroll to the top when the button is clicked
document.getElementById("backToTop").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};