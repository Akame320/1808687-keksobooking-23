function getRandomFloat(minNumber, maxNumber, precision = -1) {
  if (minNumber < 0 || maxNumber < 0 || maxNumber < minNumber || precision < 0) {
    throw new Error('Ожидаемые аргументы: 0 < minNumber < maxNumber, 0 < precision');
  }
  return +(Math.random() * (maxNumber - minNumber) + minNumber).toFixed(precision);
}

function getRandomInt(minNumber, maxNumber) {
  return getRandomFloat(minNumber, maxNumber, 0);
}

getRandomFloat(10, 20, 10);
getRandomInt(10, 100);


function createAds(){
  const ads = {};

  const avatarLinks = [];
  const typesPremise = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const typesCheckin = ['12:00', '13:00', '14:00'];
  const typesCheckout = ['12:00', '13:00', '14:00'];
  const typesFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

  function getAvatar(){
    let i = 0;
    while (true && i < 1000) {
      i++;
      const randomNumber = getRandomInt(0, 10);
      const randomLinks = `img/avatars/user${randomNumber > 9 ? randomNumber : '0' + randomNumber}.png`;
      if (avatarLinks.includes(randomLinks)) {continue;}
      avatarLinks.push(randomLinks);
      return randomLinks;
    }
  }

  function getTypeCheckin(){
    return typesCheckin[getRandomInt(0, typesCheckin.length - 1)];
  }

  function getTypePremise(){
    return typesPremise[getRandomInt(0, typesPremise.length - 1)];
  }

  function getTypeCheckout(){
    return typesCheckout[getRandomInt(0, typesCheckout.length - 1)];
  }

  function getFeatures(){
    const outArray = [];
    const lengthOutArray = getRandomInt(0, typesFeatures.length - 1);

    for(let i = 0; i < lengthOutArray; i++){
      let i1 = 0;
      while (true && i1 < 1000){
        i1++;
        const newOutArrayElem = typesFeatures[getRandomInt(0, typesFeatures.length - 1)];
        if (outArray.includes(newOutArrayElem)) {continue;}
        outArray.push(newOutArrayElem);
        break;
      }
    }
    return outArray;
  }

  function getPhotos(){
    const outPhotos = [];
    for (let i = 0; i < getRandomInt(1, 5); i++){
      outPhotos.push(photos[getRandomInt(0, photos.length-1)]);
    }
    return outPhotos;
  }

  ads.author = {
    avatar: getAvatar(),
  };

  ads.location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  //Генерация offer
  ads.offer = {
    title: 'Заголовок квартиры',
    price: getRandomInt(0, 9007199254740992),
    address: [ads.location.lat, ads.location.lng],
    type: getTypePremise(),
    rooms: getRandomInt(0, 9007199254740992),
    guests: getRandomInt(0, 9007199254740992),
    checkin: getTypeCheckin(),
    checkout: getTypeCheckout(),
    features: getFeatures(),
    description: 'Описание квартиры',
    photos: getPhotos(),
  };

  return ads;
}

const allAds = [];
for (let i = 0; i < 10; i++) {
  allAds.push(createAds());
}

console.dir(allAds);
