const translateType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const generateSrcToImg = (photos) => photos.map((item) => `<img src='${item}'>`);

const isDataForOut = (elem, data) => {
  if(!data){
    elem.style.display = 'none';
  }
};

const showPopup = (offer) => {
  const templateOffer = document.getElementById('card').content;
  const popup = templateOffer.cloneNode(true);

  popup.querySelector('.popup__title').innerText              = offer.offer.title;
  popup.querySelector('.popup__text--address').innerText      = offer.offer.address;
  popup.querySelector('.popup__text--price').innerText        = `${offer.offer.price} ₽/ночь`;
  popup.querySelector('.popup__type').innerText               = translateType[offer.offer.type];
  popup.querySelector('.popup__text--capacity').innerText     = `${offer.offer.rooms} комнаты для  ${offer.offer.guests} гостей`;
  popup.querySelector('.popup__text--time').innerText         = ` Заезд после  ${offer.offer.checkin}, выезд до ${offer.offer.checkout} гостей`;
  popup.querySelector('.popup__features').innerText           = offer.offer.features.map((item) => item);
  popup.querySelector('.popup__description').innerText        = offer.offer.description;
  popup.querySelector('.popup__photos').innerHTML             = generateSrcToImg(offer.offer.photos);
  popup.querySelector('.popup__avatar').setAttribute('src', offer.author.avatar);

  isDataForOut(popup.querySelector('.popup__title'), offer.offer.title);
  isDataForOut(popup.querySelector('.popup__text--address'), offer.offer.address);
  isDataForOut(popup.querySelector('.popup__text--price'), offer.offer.price);
  isDataForOut(popup.querySelector('.popup__type'), offer.offer.type);
  isDataForOut(popup.querySelector('.popup__text--capacity'), offer.offer.rooms);
  isDataForOut(popup.querySelector('.popup__text--capacity'), offer.offer.guests);
  isDataForOut(popup.querySelector('.popup__text--time'), offer.offer.checkin);
  isDataForOut(popup.querySelector('.popup__text--time'), offer.offer.checkout);
  isDataForOut(popup.querySelector('.popup__features'), offer.offer.features);
  isDataForOut(popup.querySelector('.popup__description'), offer.offer.description);
  isDataForOut(popup.querySelector('.popup__photos'), offer.offer.photos);
  isDataForOut(popup.querySelector('.popup__avatar'), offer.offer.avatar);

  const fragment = document.createDocumentFragment();
  fragment.appendChild(popup);

  document.getElementById('map-canvas').appendChild(fragment);
};


export {showPopup};
