const mapFilters = document.querySelector('.map__filters');
const selectMapFilters = document.querySelectorAll('.map__filter');

const setAdMapEnabled = (enabled) => {
  if (enabled) {
    mapFilters.classList.remove('map__filters--disabled');
    selectMapFilters.forEach((select) => select.removeAttribute('disabled'));
  } else {
    mapFilters.classList.add('map__filters--disabled');
    selectMapFilters.forEach((select) => select.setAttribute('disabled', true));
  }
};

export {setAdMapEnabled};

