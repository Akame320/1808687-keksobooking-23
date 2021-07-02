const OfferTypeName = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const popupTemplate = document.getElementById('card').content;
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

  const fragment = document.createDocumentFragment();
  fragment.appendChild(popup);

  document.getElementById('map-canvas').appendChild(fragment);
};


export {showPopup};
