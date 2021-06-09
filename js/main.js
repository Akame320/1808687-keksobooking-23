function randomNumber(minNumber, maxNumber, lengthChars = -1){
  let outNumber;

  if(minNumber < maxNumber){
    outNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  }

  if(lengthChars >= 0){
    outNumber = outNumber.toFixed(lengthChars);
  }

  return outNumber;
}

randomNumber(0, 2, 2);
