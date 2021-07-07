const OfferTypeName = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',
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

const mapCanvas = document.querySelector('#map-canvas');

const popupPhotosImgFragment = document.createDocumentFragment();

const setContentIfPresent = (element, content) => {
  if (content) {
    element.textContent = content;
  } else {
    element.style.display = 'none';
  }
};

const setImgIfPresent = (element, content) => {
  if (content){
    for(const src of content){
      const photoElement = document.createElement('img');
      photoElement.setAttribute('src', src);
      photoElement.setAttribute('alt', 'Фотография жилья');
      photoElement.setAttribute('width', '45');
      photoElement.setAttribute('height', '40');
      photoElement.classList.add('popup__photo');
      popupPhotosImgFragment.appendChild(photoElement);
    }
    element.appendChild(popupPhotosImgFragment);
  } else {
    element.style.display = 'none';
  }
};

const setSrcToImgIfPresent = (element, src) =>{
  if (src){
    element.setAttribute('src', src);
  } else {
    element.style.display = 'none';
  }
};

const setTypeIfPresent = (element, type) => {
  if (element){
    element.innerText = OfferTypeName[type.toUpperCase()];
  } else {
    element.style.display = 'none';
  }
};

const showPopup = (offer) => {
  setContentIfPresent(popupTitle, offer.offer.title);
  setContentIfPresent(popupAddress, offer.offer.address);
  setContentIfPresent(popupPrice, `${offer.offer.price} + ₽/ночь`);
  setContentIfPresent(popupCapacity, `${offer.offer.rooms} комнаты для  ${offer.offer.guests} гостей`);
  setContentIfPresent(popupTime, `Заезд после  ${offer.offer.checkin}, выезд до ${offer.offer.checkout} гостей`);
  setContentIfPresent(popupFeature, offer.offer.features.forEach((item) => item));
  setContentIfPresent(popupDescription, offer.offer.description);
  setImgIfPresent(popupPhotos, offer.offer.photos);
  setSrcToImgIfPresent(popupAvatar, offer.author.avatar);
  setTypeIfPresent(popupType, offer.offer.type);

  mapCanvas.appendChild(popup);
};


export {showPopup};
