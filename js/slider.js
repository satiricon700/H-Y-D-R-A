document.addEventListener('DOMContentLoaded', function() {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
  
    buttonNext.addEventListener('click', () => {
      changePosition(1);
    });
  
    buttonBefore.addEventListener('click', () => {
      changePosition(1);
    });
  
    const changePosition = (add) => {
      const currentTestimony = document.querySelector('.testimony__body.testimony__body--show');
      const currentIndex = sliders.indexOf(currentTestimony);
  
      sliders[currentIndex].classList.remove('testimony__body--show');
  
      value = (currentIndex + add + sliders.length) % sliders.length;
      sliders[value].classList.add('testimony__body--show');
    };
  });
   