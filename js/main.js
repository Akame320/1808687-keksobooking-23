function randomNumber(minNumber, maxNumber, lengthChars = -1){
  let outNumber;

  if(minNumber > maxNumber){
    return console.error("Ошибка функции randomNumber() \n" + "minNumber > maxNumber \n");
  }

  if(minNumber === maxNumber){
    return console.log("Предупреждение функции randomNumber() \n" + "minNumber === maxNumber \n");
  }

  outNumber = Math.random() * (maxNumber - minNumber) + minNumber;

  if(lengthChars >= 0){
    outNumber = outNumber.toFixed(lengthChars)
  }

  return outNumber;
}

console.log(randomNumber(0, 0, 0));
