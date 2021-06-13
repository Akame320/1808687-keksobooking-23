function precisionRandomNumber(minNumber, maxNumber, precision = -1){
  if (minNumber < 0 || maxNumber < 0 || maxNumber < minNumber || precision < 0) {
    throw new Error('Ожидаемые аргументы: 0 < minNumber < maxNumber, 0 < precision');
  }
  return +(Math.random() * (maxNumber - minNumber) + minNumber).toFixed(precision);
}

function randomNumber(minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0 || maxNumber < minNumber) {
    throw new Error('Ожидаемые аргументы: 0 < minNumber < maxNumber');
  }
  return Math.random() * (maxNumber - minNumber) + minNumber;
}

precisionRandomNumber(0, 100, 2);
randomNumber(10, 100);

