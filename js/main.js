'use strict';
{

  /* Intersection Observer API */

  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const toTop = document.getElementById('to-top');

  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    inViewObserver.observe(el);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  /* メニュー */

  class Menu {
    constructor() {
      this.open = document.getElementById('open');
      this.overlay = document.querySelector('.overlay')
      this.mask = document.querySelector('.mask');
    }
    addListeners() {
      this.open.addEventListener('click', () => {
        this.overlay.classList.add('show');
        this.mask.classList.remove('disable');
      });

      this.mask.addEventListener('click', () => {
        this.overlay.classList.remove('show');
        this.mask.classList.add('disable');
      });
    }
  }

  const menu = new Menu();
  menu.addListeners();




}