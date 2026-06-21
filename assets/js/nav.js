(function () {
  var nav = document.querySelector('.site-nav');
  var lastY = window.scrollY;
  var ticking = false;

  function update() {
    var y = window.scrollY;
    if (y <= 20) {
      nav.classList.remove('nav-hidden');
    } else if (y > lastY) {
      nav.classList.add('nav-hidden');
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
