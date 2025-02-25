import { getEvents, getDestinationsVariants } from '../mock/events';

export default class EventsModel {
  #events = getEvents();
  #destinations = getDestinationsVariants();

  get events() {
    return this.#events;
  }

  get destinations() {
    return this.#destinations;
  }
}
