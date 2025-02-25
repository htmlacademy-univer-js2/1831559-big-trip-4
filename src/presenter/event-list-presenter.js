import { render } from '../framework/render.js';
import CreatePointView from '../view/create-point-view.js';
import EventListView from '../view/event-list-view.js';
import EventPointView from '../view/event-point-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';

export default class EventAppPresenter {
  #eventListContainer = null;
  #filterContainer = null;
  #eventsModel = null;

  #filterComponent = new FilterView();
  #eventListComponent = new EventListView();
  #sortComponent = new SortView();

  #events = [];

  constructor({ eventListContainer, filterContainer, eventsModel }) {
    this.#eventListContainer = eventListContainer;
    this.#filterContainer = filterContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    render(this.#filterComponent, this.#filterContainer);
    render(this.#sortComponent, this.#eventListContainer);

    this.#events = [...this.#eventsModel.events];
    render(this.#eventListComponent, this.#eventListContainer);
    render(new CreatePointView({event: this.#events[0], destinations: []}), this.#eventListComponent.element);

    for (let i = 1; i < this.#events.length; i++) {
      this.#renderEventPoint(this.#events[i]);
    }
  }

  #renderEventPoint(event) {
    const eventPointComponent = new EventPointView({event});

    render(eventPointComponent, this.#eventListComponent.element);
  }
}
