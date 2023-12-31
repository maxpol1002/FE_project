window.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('element');
    shiftElementLeftByAmount(element, 700, 1000);
  });
  
  function shiftElementLeftByAmount(element, amount, delay) {
    setTimeout(() => {
      const currentTransform = window.getComputedStyle(element).transform;
      const currentTranslateX = parseInt(currentTransform.split(',')[4], 10) || 0;
  
      element.style.transform = `translateX(${currentTranslateX - amount}px)`;
    }, delay);
  }

var homeButtons = document.querySelectorAll(".home-button");

homeButtons.forEach(function(button) {
  button.addEventListener("mouseover", function() {
    this.classList.add("glow");
  });

    button.addEventListener("mouseout", function() {
        this.classList.remove("glow");
    });
});

function rotateIcons() {
  const icons = document.querySelectorAll('.parent4 li i');
  icons.forEach(icon => {
    icon.style.transform = 'rotate(360deg)';
    icon.style.transition = 'transform 1.5s ease-in-out';
  });
}

window.addEventListener('load', rotateIcons);