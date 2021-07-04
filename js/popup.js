//Раньше у меня было так. Но мой объект  OfferTypeName нарушает правило Б8
//Но код работал.
//Работал он так... Ключи из OfferTypeName совпадали с значениями в OFFER_TYPES котоырй в mock.js
//Соотвественно мы могли "руссифицировать" наши типы жилья так => OfferTypeName['сюда значение из OFFER_TYPES']
//Значения из OFFER_TYPES совпадают с сключами из OfferTypeName и ключ нам выводит СВОЕ значение на РУССКОМ
//Теперь нам надо переименовать ключи из OfferTypeName в верхний регистер, а значит значения из OFFER_TYPES не будут == с key OfferTypeName
//Что бы функционал руссфицирования остался я рещшил написать сортировку или модернизировать масив OFFER_TYPES.
//Массив OFFER_TYPES будет включать в себя объект. В котором будут ключи RU/EN типа
const OfferTypeName = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const popupTemplate = document.querySelector('#card').content;
const popup = popupTemplate.cloneNode(true);

const popupTitle = popup.querySelector('.popup__title');
const popupAddress = popup.querySelector('.popup__text--address');
const popupPrice = popup.querySelector('.popup__text--price');
const popupType = popup.querySelector('.popup__type');
const popupCapacity = popup.querySelector('.popup__text--capacity');
const popupTime = popup.querySelector('.popup__text--time');
const popupFeature = popup.querySelector('.popup__feature');
const popupDescription = popup.querySelector('.popup__description');
const popupPhotos = popup.querySelector('.popup__photos');
const popupAvatar = popup.querySelector('.popup__avatar');

const imgFragment = document.createDocumentFragment();

const setContentIfPresent = (element, content) => {
  if (content) {
    element.innerText = content;
  } else {
    element.style.display = 'none';
  }
};

const setImgIfPresent = (element, content) => {
  if(content){
    for(const src of content){
      const newImgFragment = document.createElement('img');
      newImgFragment.setAttribute('src', src);
      newImgFragment.setAttribute('alt', 'Фотография жилья');
      newImgFragment.setAttribute('class', '');
      imgFragment.appendChild(newImgFragment);
    }
    element.appendChild(imgFragment);
  }else{
    element.style.display = 'none';
  }
};

const setSrcToImgIfPresent = (element, src) =>{
  if(src){
    element.setAttribute('src', src);
  }else{
    element.style.display = 'none';
  }
};

const showPopup = (offer) => {

  setContentIfPresent(popupTitle, offer.offer.title);
  setContentIfPresent(popupAddress, offer.offer.address);
  setContentIfPresent(popupPrice, `${offer.offer.price} + ₽/ночь`);
  setContentIfPresent(popupType, OfferTypeName[offer.offer.type]);
  setContentIfPresent(popupCapacity, `${offer.offer.rooms} комнаты для  ${offer.offer.guests} гостей`);
  setContentIfPresent(popupTime, `Заезд после  ${offer.offer.checkin}, выезд до ${offer.offer.checkout} гостей`);
  setContentIfPresent(popupFeature, offer.offer.features.forEach((item) => item));
  setContentIfPresent(popupDescription, offer.offer.description);
  setContentIfPresent(popupDescription, offer.offer.description);
  setImgIfPresent(popupPhotos, offer.offer.photos);
  setSrcToImgIfPresent(popupAvatar, offer.author.avatar);

  document.querySelector('#map-canvas').appendChild(popup);
};


export {showPopup};
