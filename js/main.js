import {generateOffer} from './mock.js';
import {renderMarkersToMap} from "./state-page/map.js";

const QUANTITY_OFFERS = 10;

// eslint-disable-next-line no-unused-vars
const offers = new Array(QUANTITY_OFFERS).fill(null).map(generateOffer);

for (const offer of offers){
  renderMarkersToMap(offer.location.lat, offer.location.lng);
}
