const nav = document.querySelector('.video');
    let topOfNav = nav.offsetTop;
    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed');
      } else {
        document.body.classList.remove('fixed');
        document.body.style.paddingTop = 0;
      }
    }
    window.addEventListener('scroll', fixNav);