const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TYPES_CHECKS = ['12:00', '13:00', '14:00'];
const TYPES_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LAT_START = 35.65000;
const LAT_END = 35.70000;
const LNG_START = 139.70000;
const LNG_END = 139.80000;

const getRandomFloat = (minNumber, maxNumber, precision = -1) => {
  if (minNumber < 0 || maxNumber < 0 || maxNumber < minNumber || precision < 0) {
    throw new Error('Ожидаемые аргументы: 0 < minNumber < maxNumber, 0 < precision');
  }
  return +(Math.random() * (maxNumber - minNumber) + minNumber).toFixed(precision);
};

function getRandomInt(minNumber, maxNumber) {
  return getRandomFloat(minNumber, maxNumber, 0);
}

function addLeadingZeroIfNeeded(randomNumberForAvatar) {
  if (randomNumberForAvatar <= 9) {
    return `img/avatars/user0${randomNumberForAvatar}`;
  }
  return `img/avatars/user${randomNumberForAvatar}`;
}

function getRandomElementFromArray(array) {
  return array[getRandomInt(0, array.length - 1)];
}

function getShuffledArray(array) {
  return array.slice().sort(function () { return Math.random() - 0.5; });
}

function generateOffer() {
  const lat = getRandomFloat(LAT_START, LAT_END, 5);
  const lng = getRandomFloat(LNG_START, LNG_END, 5);

  return {
    author: {
      avatar: addLeadingZeroIfNeeded(getRandomInt(0, 10)),
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
}

const offers = new Array(10).fill(null).map(generateOffer);
