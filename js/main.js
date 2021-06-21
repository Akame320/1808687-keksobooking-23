const avatarLinks = [];
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TYPES_CHECKIN = ['12:00', '13:00', '14:00'];
const TYPES_CHECKOUT = ['12:00', '13:00', '14:00'];
const TYPES_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const ALLADS = [];
const RANDOMNUMBER = getRandomInt(0, 10);


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
  return array.slice().sort(function (){return Math.random() -0.5;})
}


function getPhotos() {
  const OUTPHOTOS = [];
  for (let i = 0; i < getRandomInt(1, 5); i++) {
    OUTPHOTOS.push(PHOTOS[getRandomInt(0, PHOTOS.length - 1)]);
  }
  return OUTPHOTOS;
}


function createAds() {
  const ADS = {};

  ADS.author = {
    avatar: getAvatar(),
  };

  ADS.location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  //Генерация offer
  ADS.offer = {
    title: 'Заголовок квартиры',
    price: getRandomInt(0, 9007199254740992),
    address: [ADS.location.lat, ADS.location.lng],
    type: getRandomElementFromArray(OFFER_TYPES),
    rooms: getRandomInt(0, 9007199254740992),
    guests: getRandomInt(0, 9007199254740992),
    checkin: getRandomElementFromArray(TYPES_CHECKIN),
    checkout: getRandomElementFromArray(TYPES_CHECKOUT),
    features: getShuffleArray(TYPES_FEATURES),
    description: 'Описание квартиры',
    PHOTOS: getPhotos(),
  };

  return ADS;
}

for (let i = 0; i < 10; i++) {
  ALLADS.push(createAds());
}

console.log(ALLADS)
