const adForm = document.querySelector('.ad-form');
const inputAdForm = document.querySelectorAll('.ad-form__element');

const setAdFormEnabled = (enabled) => {
  if (enabled) {
    adForm.classList.remove('ad-form--disabled');
    inputAdForm.forEach((input) => input.removeAttribute('disabled'));
  } else {
    adForm.classList.add('ad-form--disabled');
    inputAdForm.forEach((input) => input.setAttribute('disabled', true));
  }
};


const inputCapacity = document.querySelector('#capacity');
const inputRoom = document.querySelector('#room_number');
const addOfferSubmitBtn = document.querySelector('#add-offer-submit-btn');

const isValidateCapacity = () => {
  const maxValueForCapacity = +inputRoom.value;

  for (const child of inputCapacity.children) {
    if(+child.value > maxValueForCapacity || +child.value === 0){
      child.setAttribute('disabled', 'disabled');
    }else{
      child.removeAttribute('disabled');
    }
  }
};

inputRoom.addEventListener('input', isValidateCapacity);

addOfferSubmitBtn.addEventListener('submit', () => {
  isValidateCapacity();
});

window.onload = () => {
  isValidateCapacity();
};


export {setAdFormEnabled};

