import { getDestinationById, getOffersVariantsByType } from '../mock/events';
import { capitalize, formatDateByPurpose } from '../utils';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';

function createDestinationOptionsTemplate(destinations) {
  const destinationOptions = [];
  for (const destination of destinations) {
    destinationOptions.push(`<option value="${destination.name}"></option>`);
  }

  return `<datalist id="destination-list-1">${destinationOptions.join('')}</datalist>`;
}

function createOffersTemplate(type, offerIds) {
  const allOffers = getOffersVariantsByType(type);
  const offersContent = [];
  for (const offer of allOffers) {
    const isChecked = offerIds.includes(offer.id);

    offersContent.push(`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-${offer.id}" type="checkbox" name="event-${offer.id}" ${isChecked ? 'checked' : '' }>
      <label class="event__offer-label" for="event-${offer.id}">
        <span class="event__offer-title">${offer.title} </span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price"> ${offer.price}</span>
      </label>
    </div>`);
  }

  return `<div class="event__available-offers">${offersContent.join('')}</div>`;
}

function createPhotosTemplate(photos) {
  const photosTemplate = [];
  for (const photo of photos) {
    photosTemplate.push(`<img class="event__photo" src="${photo.src}" alt="${photo.description}">`);
  }

  return `<div class="event__photos-container"><div class="event__photos-tape">${photosTemplate.join('')}</div></div>`;
}


function editPointFormTemplate(event, destinations) {
  const {type, dateFrom, dateTo, destination: destinationId, basePrice, offers: offerIds} = event;

  const destination = getDestinationById(destinationId);
  const detinationOptions = createDestinationOptionsTemplate(destinations);
  const offersTemplate = createOffersTemplate(type, offerIds);

  const formattedDateFrom = formatDateByPurpose(dateFrom, 'formInput');
  const formattedDateTo = formatDateByPurpose(dateTo, 'formInput');

  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type ? type : 'flight'}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                value="bus">
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                value="train">
              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                value="ship">
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                value="drive">
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                value="flight" checked>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                value="check-in">
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio"
                name="event-type" value="sightseeing">
              <label class="event__type-label  event__type-label--sightseeing"
                for="event-type-sightseeing-1">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio"
                name="event-type" value="restaurant">
              <label class="event__type-label  event__type-label--restaurant"
                for="event-type-restaurant-1">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${capitalize(type)}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text"
          name="event-destination" value="${destination.name ? destination.name : ''}" list="destination-list-1">
        ${detinationOptions}
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
          value="${formattedDateFrom ? formattedDateFrom : ''}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
          value="${formattedDateTo ? formattedDateTo : ''}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice ? basePrice : ''}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        ${offersTemplate}
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.description ? destination.description : ''}</p>

        ${destination.pictures.length > 0 ? createPhotosTemplate(destination.pictures) : ''}
      </section>
    </section>
  </form>
</li>
  `;
}

export default class EditPointView extends AbstractStatefulView {
  #event = null;
  #destinations = null;
  #handleFormSubmit = null;
  #handleCloseForm = null;


  constructor({event, destinations, onFormSubmit, onCloseForm}) {
    super();
    this._setState(event);
    this.#destinations = [...destinations];
    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseForm = onCloseForm;

    this.element.querySelector('.event--edit').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formCloseHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#eventTypeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#eventDestinationChangeHandler);
    this.element.querySelector('.event__available-offers').addEventListener('change', this.#offersChangeHandler);
  }

  get template() {
    return editPointFormTemplate(this._state, this.#destinations);
  }

  #eventTypeChangeHandler = (evt) => {
    if (evt.target.name === 'event-type') {
      const newType = evt.target.value;
      this.updateElement({ type: newType, offers: [] });
    }
  };

  #eventDestinationChangeHandler = (evt) => {
    const newDestinationName = evt.target.value;

    const newDestination = this.#destinations.find((dest) => dest.name === newDestinationName);
    if (!newDestination) {
      evt.target.value = this.#destinations[0].name;
      this.updateElement({ destination: this.#destinations[0].id});
      return;
    }

    const newDestinationId = newDestination ? newDestination.id : null;
    this.updateElement({ destination: newDestinationId});
  };

  #offersChangeHandler = (evt) => {
    if (evt.target.getAttribute('type') !== 'checkbox') {
      return;
    }

    const offerId = evt.target.id.replace('event-', '').replace('-1', '');
    const isChecked = evt.target.checked;

    let updatedOffers = [...this._state.offers];

    if (isChecked) {
      updatedOffers.push(offerId);
    } else {
      updatedOffers = updatedOffers.filter((id) => id !== offerId);
    }

    this.updateElement({ offers: updatedOffers });
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this._state);
  };

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseForm();
  };

  _restoreHandlers() {
    this.element.querySelector('.event--edit').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formCloseHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#eventTypeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#eventDestinationChangeHandler);
    this.element.querySelector('.event__available-offers').addEventListener('change', this.#offersChangeHandler);
  }

  reset(event) {
    this.updateElement(event);
  }
}
