import { render } from '../framework/render.js';
import { updateItem } from '../utils.js';
import EventListView from '../view/event-list-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import EventPointPresenter from './event-point-presenter.js';

export default class EventAppPresenter {
  #eventListContainer = null;
  #filterContainer = null;
  #eventsModel = null;

  #filterComponent = new FilterView();
  #eventListComponent = new EventListView();
  #sortComponent = new SortView();

  #events = [];
  #destinations = [];
  #eventsPresenters = new Map();

  constructor({ eventListContainer, filterContainer, eventsModel }) {
    this.#eventListContainer = eventListContainer;
    this.#filterContainer = filterContainer;
    this.#eventsModel = eventsModel;
    this.#destinations = [...this.#eventsModel.destinations];
  }

  init() {
    this.#renderFilter();
    this.#renderSort();

    this.#renderEventList();
  }

  #renderFilter() {
    render(this.#filterComponent, this.#filterContainer);
  }

  #renderSort() {
    render(this.#sortComponent, this.#eventListContainer);
  }

  #renderEventList() {
    this.#events = [...this.#eventsModel.events];
    render(this.#eventListComponent, this.#eventListContainer);

    this.#events.forEach((event) => this.#renderEventPoint(event));
  }

  #renderEventPoint(event) {
    const eventPointPresenter = new EventPointPresenter({
      eventListContainer: this.#eventListComponent.element,
      onEventChange: this.#handleEventChange,
      onModeChange: this.#handleModeChange
    });
    eventPointPresenter.init(event, this.#destinations);
    this.#eventsPresenters.set(event.id, eventPointPresenter);
  }

  #handleEventChange = (updatedEvent) => {
    this.#events = updateItem(this.#events, updatedEvent);
    this.#eventsPresenters.get(updatedEvent.id).init(updatedEvent, this.#destinations);
  };

  #handleModeChange = () => {
    this.#eventsPresenters.forEach((presenter) => presenter.resetView());
  };
}
