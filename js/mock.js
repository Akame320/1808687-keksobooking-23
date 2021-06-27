import {getRandomFloat, getRandomInt} from './util.js';

const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TYPES_CHECKS = ['12:00', '13:00', '14:00'];
const TYPES_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LAT_START = 35.65000;
const LAT_END = 35.70000;
const LNG_START = 139.70000;
const LNG_END = 139.80000;

const addLeadingZeroIfNeeded = (randomNumberForAvatar) => randomNumberForAvatar <= 9 ? `0${randomNumberForAvatar}` : `${randomNumberForAvatar}`;

const getRandomElementFromArray = (array) => array[getRandomInt(0, array.length - 1)];

const getShuffledArray = (array) => array.slice().sort(() => Math.random() - 0.5);

const generateOffer = () => {
  const lat = getRandomFloat(LAT_START, LAT_END, 5);
  const lng = getRandomFloat(LNG_START, LNG_END, 5);

  return {
    author: {
      avatar: `img/avatars/user${addLeadingZeroIfNeeded(getRandomInt(0, 10))}.png`,
    },
    location: {
      lat: lat,
      lng: lng,
    },
    offer: {
      title: 'Заголовок квартиры',
      price: getRandomInt(0, 500000),
      address: `${lat},${lng}`,
      type: getRandomElementFromArray(OFFER_TYPES),
      rooms: getRandomInt(0, 10),
      guests: getRandomInt(0, 1000),
      checkin: getRandomElementFromArray(TYPES_CHECKS),
      checkout: getRandomElementFromArray(TYPES_CHECKS),
      features: getShuffledArray(TYPES_FEATURES),
      description: 'Описание квартиры',
      PHOTOS: getShuffledArray(PHOTOS),
    },
  };
};

export {generateOffer};
