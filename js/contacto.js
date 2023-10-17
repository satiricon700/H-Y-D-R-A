function scrollSlider(direction) {
  const slider = document.getElementById('slider');
  const sliderContent = document.getElementById('sliderContent');

  const scrollAmount = 200; 
  const sliderWidth = slider.offsetWidth;
  const maxScroll = sliderContent.scrollWidth - sliderWidth;

  let currentScroll = slider.scrollLeft;

  if (direction === 'left') {
    currentScroll -= scrollAmount;
    if (currentScroll < 0) {
      currentScroll = 0;
    }
  } else if (direction === 'right') {
    currentScroll += scrollAmount;
    if (currentScroll > maxScroll) {
      currentScroll = maxScroll;
    }
  }

  slider.scrollTo({
    left: currentScroll,
    behavior: 'smooth'
  });
}
