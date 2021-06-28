import {generateOffer} from './mock.js';
import {showPopup} from './popup.js';

const QUANTITY_OFFERS = 10;

// eslint-disable-next-line no-unused-vars
const offers = new Array(QUANTITY_OFFERS).fill(null).map(generateOffer);

showPopup(offers[0]);
