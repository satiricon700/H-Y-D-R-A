(() => {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
  
    const toggleMenu = () => {
      menu.classList.toggle('nav__link--show');
    };
  
    openButton.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
  })();
  