import { render } from '../render.js';
import CreatePointView from '../view/create-point-view.js';
import EventListView from '../view/event-list-view.js';
import EventPointView from '../view/event-point-view.js';
import SortView from '../view/sort-view.js';

export default class EventListPresenter {
  eventListComponent = new EventListView();

  constructor({ eventListContainer }) {
    this.eventListContainer = eventListContainer;
  }

  init() {
    render(new SortView(), this.eventListContainer);
    render(this.eventListComponent, this.eventListContainer);
    render(new CreatePointView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventPointView(), this.eventListComponent.getElement());
    }
  }
}
