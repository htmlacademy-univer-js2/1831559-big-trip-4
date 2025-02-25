import { getEvents } from '../mock/events';

export default class EventsModel {
  #events = getEvents();

  get events() {
    return this.#events;
  }
}
