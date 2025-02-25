import { getDestinationById, getOfferByTypeAndId } from '../mock/events';
import { calcDuration, capitalize, formatDateByPurpose } from '../utils';
import AbstractView from '../framework/view/abstract-view';

function createEventPointTemplate(event) {
  const {type, dateFrom, dateTo, destination: destinationId, basePrice, offers: offerIds} = event;

  const destination = getDestinationById(destinationId);
  const duration = calcDuration(dateFrom, dateTo);

  let offersContent = '';
  // здесь нельзя использовать const
  // eslint-disable-next-line prefer-const
  for (let id of offerIds) {
    const offer = getOfferByTypeAndId(type, id);
    offersContent += `<li class="event__offer"><span class="event__offer-title">${offer.title} </span>&plus;&euro;&nbsp;<span class="event__offer-price"> ${offer.price}</span></li>`;
  }


  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${formatDateByPurpose(dateFrom, 'eventDateAttr')}">${formatDateByPurpose(dateFrom, 'eventDate')}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${capitalize(type)} ${destination?.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${formatDateByPurpose(dateFrom, 'eventTimeAttr')}">${formatDateByPurpose(dateFrom, 'time')}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${formatDateByPurpose(dateFrom, 'eventTimeAttr')}">${formatDateByPurpose(dateTo, 'time')}</time>
                  </p>
                  <p class="event__duration">${duration}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                ${offersContent}
                </ul>
                <button class="event__favorite-btn" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

export default class EventPointView extends AbstractView {
  constructor({ event }) {
    super();
    this.event = event;
  }

  get template() {
    return createEventPointTemplate(this.event);
  }
}
