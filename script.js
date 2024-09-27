class Carousel {
    constructor(trackSelector, slidesSelector, prevBtnSelector, nextBtnSelector) {
      this.track = document.querySelector(trackSelector);
      this.slides = Array.from(this.track.children);
      this.prevBtn = document.querySelector(prevBtnSelector);
      this.nextBtn = document.querySelector(nextBtnSelector);
      this.currentIndex = 0;
      this.totalSlides = this.slides.length;
      this.mobileBreakpoint = 768;
      
      this.updateSlideWidth();
      this.addEventListeners();
      this.moveToSlide(this.currentIndex);
      window.addEventListener('resize', () => this.updateSlideWidth());
    }
  
    updateSlideWidth() {
      this.slideWidth = this.slides[0].getBoundingClientRect().width;
      this.setSlidePosition();
      this.moveToSlide(this.currentIndex);
    }
  
    setSlidePosition() {
      this.slides.forEach((slide, index) => {
        slide.style.left = `${index * this.slideWidth}px`;
      });
    }
  
    moveToSlide(index) {
      if (index < 0) {
        index = 0;
      } else if (index >= this.totalSlides) {
        index = this.totalSlides - 1;
      }
  
      const isMobile = window.innerWidth < this.mobileBreakpoint;
  
      const translateXValue = -index * (this.slideWidth + Number(`${isMobile ? 40 : -250}`));
      console.log(isMobile , "lll");
      this.track.style.transform = `translateX(${translateXValue}px)`;
  
      this.currentIndex = index;
    }
  
    addEventListeners() {
      this.nextBtn.addEventListener('click', () => {
        this.moveToSlide(this.currentIndex + 1);
      });
  
      this.prevBtn.addEventListener('click', () => {
        this.moveToSlide(this.currentIndex - 1);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel('.carousel__track', '.carousel__slide', '.carousel__button--left', '.carousel__button--right');
  });
  