function getRandomFloat(minNumber, maxNumber, precision = -1){
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

