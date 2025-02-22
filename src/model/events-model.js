import { getEvents } from '../mock/events';

export default class EventsModel {
  events = getEvents();

  getEvents() {
    return this.events;
  }
}
