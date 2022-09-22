import tabs from './modules/tabs';
import calculator from './modules/calculator';
import cards from './modules/cards';
import modals from './modules/modals';
import timer from './modules/timer';
import forms from './modules/forms';
import slider from './modules/slider';
import { showModal } from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 30000);
  const deadLine = '2022-09-10';

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  calculator();
  cards();
  modals('[data-modal]', '.modal', modalTimerId);
  timer(deadLine, '.timer');
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
});