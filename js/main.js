'use strict';
{

  class Menu {
    constructor() {
      this.open = document.getElementById('open');
      this.overlay = document.querySelector('.overlay')
      this.close = document.getElementById('close');
      this.mask = document.querySelector('.mask');
    }
    addListeners() {
      this.open.addEventListener('click', () => {
        this.overlay.classList.add('show');
        this.open.classList.add('hide');
        this.mask.classList.remove('disable');
      });
    
      this.close.addEventListener('click', () => {
        this.overlay.classList.remove('show');
        this.open.classList.remove('hide');
        this.mask.classList.add('disable');
      });
    
      this.mask.addEventListener('click', () => {
        this.close.click();
      });
    }
  }

  const menu = new Menu();
  menu.addListeners();




}