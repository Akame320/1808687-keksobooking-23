const adForm = document.querySelector('.ad-form');
const inputAdForm = document.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const selectMapFilters = document.querySelectorAll('.map__filter');

const setStatePageActive =() => {
  adForm.classList.remove('ad-form--disabled');
  inputAdForm.forEach((input) => input.removeAttribute('disabled'));

  mapFilters.classList.remove('ad-form--disabled');
  selectMapFilters.forEach((select) => select.removeAttribute('disabled'));
};

const setStatePageDisable = () =>{
  adForm.classList.add('ad-form--disabled');
  inputAdForm.forEach((input) => input.setAttribute('disabled', true));

  mapFilters.classList.add('ad-form--disabled');
  selectMapFilters.forEach((select) => select.setAttribute('disabled', true));
};


export {setStatePageDisable, setStatePageActive};

