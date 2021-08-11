import {setAdFormEnabled, setInputAddressPlaceholder} from "./form.js";

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
setAdMapEnabled(false);

const map = L.map('map-canvas')
  .on('load', () => {
    setAdMapEnabled(true);
    setAdFormEnabled(true);
  })
  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 12)

const iconForDragMarker = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const dragMarker = L.marker(
  [35.6895000, 139.6917100],
  {icon: iconForDragMarker, draggable: true},
).addTo(map);

dragMarker.on('moveend', function(event) {
  setInputAddressPlaceholder(event.target._latlng.lat, event.target._latlng.lng);
});

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const iconForMainMarker = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})

const renderMarkersToMap = (lat, lng) => {
  const mainMarker = L.marker(
    [lat, lng],
    {icon: iconForMainMarker},
  ).addTo(map);
}

const mainMarksGroup = L.layerGroup().addTo(map);


export {setAdMapEnabled, renderMarkersToMap};

