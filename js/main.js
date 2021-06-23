const avatarLinks = [];
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TYPES_CHECKIN = ['12:00', '13:00', '14:00'];
const TYPES_CHECKOUT = ['12:00', '13:00', '14:00'];
const TYPES_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const allAds = [];


function getRandomFloat(minNumber, maxNumber, precision = -1) {
  if (minNumber < 0 || maxNumber < 0 || maxNumber < minNumber || precision < 0) {
    throw new Error('Ожидаемые аргументы: 0 < minNumber < maxNumber, 0 < precision');
  }
  return +(Math.random() * (maxNumber - minNumber) + minNumber).toFixed(precision);
}

function getRandomInt(minNumber, maxNumber) {
  return getRandomFloat(minNumber, maxNumber, 0);
}

function getAvatar() {
  let randomNumberForAvatar = getRandomInt(0, 10);
  while (avatarLinks.includes(randomNumberForAvatar)) {
    randomNumberForAvatar = getRandomInt(0, 10);
  }

  avatarLinks.push(randomNumberForAvatar);

  if(randomNumberForAvatar <= 9){
    return `img/avatars/user0${randomNumberForAvatar}`;
  }
  return `img/avatars/user${randomNumberForAvatar}`;
}

function getRandomElementFromArray(array){
  return array[getRandomInt(0, array.length - 1)];
}

function getShuffleArray(array){
  return array.slice().sort(() => Math.random() -0.5);
}

//START
function getPhotos() {
  const START_END_RANDOM_NUMBER = getRandomInt(1, PHOTOS.length - 1);
  return PHOTOS.slice(getRandomInt(0, START_END_RANDOM_NUMBER - 1), getRandomInt(START_END_RANDOM_NUMBER, PHOTOS.length - 1));
}
//END

function createAds() {
  const LAT = getRandomFloat(35.65000, 35.70000, 5);
  const LNG = getRandomFloat(139.70000, 139.80000, 5);

  const PRICE = getRandomInt(0, 500000);
  const TYPE = getRandomElementFromArray(OFFER_TYPES);
  const ROOMS = getRandomInt(0, 10);
  const GUESTS = getRandomInt(0, 1000);
  const CHECKIN = getRandomElementFromArray(TYPES_CHECKIN);
  const CHECKOUT = getRandomElementFromArray(TYPES_CHECKOUT);
  const FEATURES = getShuffleArray(TYPES_FEATURES);

  return {
    author : {
      avatar: getAvatar(),
    },
    location : {
      lat: LAT,
      lng: LNG,
    },
    offer : {
      title: 'Заголовок квартиры',
      price: PRICE,
      address: [LAT, LNG],
      type: TYPE,
      rooms: ROOMS(0, 10),
      guests: GUESTS(0, 1000),
      checkin: CHECKIN(TYPES_CHECKIN),
      checkout: CHECKOUT,
      features: FEATURES,
      description: 'Описание квартиры',
      PHOTOS: getPhotos(),
    },
  };
}

for (let i = 0; i < 10; i++) {
  allAds.push(createAds());
}
