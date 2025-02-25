import { render, replace } from '../framework/render.js';
import EventListView from '../view/event-list-view.js';
import EventPointView from '../view/event-point-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class EventAppPresenter {
  #eventListContainer = null;
  #filterContainer = null;
  #eventsModel = null;

  #filterComponent = new FilterView();
  #eventListComponent = new EventListView();
  #sortComponent = new SortView();

  #events = [];
  #destinations = [];

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

    this.#destinations = [...this.#eventsModel.destinations];

    for (let i = 0; i < this.#events.length; i++) {
      this.#renderEventPoint(this.#events[i]);
    }
  }

  #renderEventPoint(event) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToView();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const eventPointComponent = new EventPointView({
      event,
      onEditClick: () => {
        replaceViewToEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const eventEditComponent = new EditPointView({
      event,
      destinations: this.#destinations,
      onFormSubmit: () => {
        replaceEditToView();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onCloseForm: () => {
        replaceEditToView();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceViewToEdit() {
      return replace(eventEditComponent, eventPointComponent);
    }

    function replaceEditToView() {
      return replace(eventPointComponent, eventEditComponent);
    }

    render(eventPointComponent, this.#eventListComponent.element);
  }
}
