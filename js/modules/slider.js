function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
// SLIDER

    const slidesWrapper = document.querySelector(wrapper),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          current = document.querySelector(currentCounter),
          total = document.querySelector(totalCounter),
          slidesField = document.querySelector(field),
          slides = document.querySelectorAll(slide),
          offerSlider = document.querySelector(container),
          width = window.getComputedStyle(slidesWrapper).width,
          dots = [];

    // SLIDER NAV BUTTONS

    offerSlider.style.position = 'relative';

    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    offerSlider.append(indicators);

    slides.forEach((item, index) => {
      const dot = document.createElement('li');
      dot.classList.add('dot');
      dot.setAttribute('data-slide-to', index + 1);
      indicators.append(dot);
      dots.push(dot);
    });

    dots[0].style.opacity = '1';
    
    // SLIDER

    let totalSlides = slides.length;
    let slideIndex = 1;
    let offset = 0;

    current.textContent = addZeroToCounter(slideIndex);
    total.textContent = addZeroToCounter(slides.length);

    slidesWrapper.style.overflow = 'hidden';

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slides.forEach(slide => slide.style.width = width);

    /* LEFT */

    prev.addEventListener('click', () => {
      if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
      } else {
        offset -= +width.slice(0, width.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      slideIndex--;

      if (slideIndex == 0) {
        slideIndex = slides.length;
      } else if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      current.textContent = addZeroToCounter(slideIndex);

      dots.forEach(dot => dot.style.opacity = '0.5');
      dots[slideIndex - 1].style.opacity = '1';
    });

    /* RIGHT */

    next.addEventListener('click', () => {
      if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.slice(0, width.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      slideIndex++;

      if (slideIndex == 0) {
        slideIndex = slides.length;
      } else if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      current.textContent = addZeroToCounter(slideIndex);

      dots.forEach(dot => dot.style.opacity = '0.5');
      dots[slideIndex - 1].style.opacity = '1';
    });

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = +width.slice(0, width.length - 2) * (slideTo - 1);

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 0) {
          slideIndex = slides.length;
        } else if (slideIndex > slides.length) {
          slideIndex = 1;
        }
  
        current.textContent = addZeroToCounter(slideIndex);

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = '1';
      });
    });

    function addZeroToCounter(count) {
      if(count >= 10) return count;
      if (count <= 9) return `0${count}`;
    }
}

export default slider;