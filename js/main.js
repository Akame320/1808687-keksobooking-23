import {generateOffer} from './mock.js';
import {showPopup} from './popup.js';
import {setStatePageDisable, setStatePageActive} from './state-page.js';

const QUANTITY_OFFERS = 10;

// eslint-disable-next-line no-unused-vars
const offers = new Array(QUANTITY_OFFERS).fill(null).map(generateOffer);

setStatePageDisable();
setStatePageActive();
