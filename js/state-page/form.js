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

export {setAdFormEnabled};

