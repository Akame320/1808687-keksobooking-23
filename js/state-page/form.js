const adForm = document.querySelector('.ad-form');
const inputAdForm = document.querySelectorAll('.ad-form__element');

const selectCapacity = adForm.querySelector('#capacity');
const selectRoom = adForm.querySelector('#room_number');
const selectTypeOffer = adForm.querySelector('#type');
const selectTimeIn = adForm.querySelector('#timein')
const selectTimeOut = adForm.querySelector('#timeout')
const inputPrice = adForm.querySelector('#price');
const inputAddress = adForm.querySelector('#address');

const setAdFormEnabled = (enabled) => {
  if (enabled) {
    adForm.classList.remove('ad-form--disabled');
    inputAdForm.forEach((input) => input.removeAttribute('disabled'));
  } else {
    adForm.classList.add('ad-form--disabled');
    inputAdForm.forEach((input) => input.setAttribute('disabled', true));
  }
};
setAdFormEnabled(false);

const isValidPrice = () => {
  let minPrice = 0;

  switch (selectTypeOffer.value) {
    case 'bungalow':
      minPrice = 0;
      break;
    case 'flat':
      minPrice = 1000;
      break;
    case 'hotel':
      minPrice = 3000;
      break;
    case 'house':
      minPrice = 5000;
      break;
    case 'palace':
      minPrice = 10000;
      break;
  }

  inputPrice.setAttribute('min', minPrice);
  inputPrice.setAttribute('placeholder', minPrice);
};
selectTypeOffer.addEventListener('input', isValidPrice);
isValidPrice();

const areRoomsAndCapacityMatches = (rooms, capacity) => rooms === 100 || capacity === 0 ? rooms === 100 && capacity === 0 : rooms >= capacity;

const setOptionCapacityEnabled = (option, isEnabled = true) => {
  if (isEnabled) {
    option.removeAttribute('disabled');
    return false;
  }
  option.setAttribute('disabled', true);
};
const isValidCapacity = () => {
  const selectRoomsValue = +selectRoom.value;
  const selectCapacityValue = +selectCapacity.value;

  for (const optionSelectCapacity of selectCapacity.children) {
    const optionSelectCapacityValue = +optionSelectCapacity.value;
    setOptionCapacityEnabled(optionSelectCapacity, areRoomsAndCapacityMatches(selectRoomsValue, optionSelectCapacityValue));
  }

  if (!areRoomsAndCapacityMatches(selectRoomsValue, selectCapacityValue)) {
    selectCapacity.setCustomValidity('Введите корректное значение');
  } else {
    selectCapacity.setCustomValidity('');
  }

  selectCapacity.reportValidity();
};
isValidCapacity();
selectRoom.addEventListener('input', isValidCapacity);

const checkInOutChangeListener = (evt) => {
  const newCheckValue = evt.target.value;
  selectTimeIn.value = newCheckValue;
  selectTimeOut.value = newCheckValue;
};

selectTimeOut.addEventListener('input', checkInOutChangeListener);
selectTimeIn.addEventListener('input', checkInOutChangeListener);

const setInputAddressPlaceholder = (lat, lng) => {
  inputAddress.setAttribute('placeholder', `${lat} : ${lng}`)
}

export {setAdFormEnabled, setInputAddressPlaceholder};

