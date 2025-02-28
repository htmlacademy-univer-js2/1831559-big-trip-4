import { render, replace } from '../framework/render';
import EditPointView from '../view/edit-point-view';
import EventPointView from '../view/event-point-view';

export default class EventPointPresenter {
  #eventListContainer = null;

  #event = null;
  #destinations = [];

  #eventPointComponent = null;
  #eventEditComponent = null;

  constructor({ eventListContainer }) {
    this.#eventListContainer = eventListContainer;
  }

  init(event, destinations) {
    this.#event = event;
    this.#destinations = destinations;

    this.#eventPointComponent = new EventPointView({
      event,
      onEditClick: this.#handleEditClick
    });

    this.#eventEditComponent = new EditPointView({
      event,
      destinations: this.#destinations,
      onFormSubmit: this.#handleFormSubmit,
      onCloseForm: this.#handleCloseForm,
    });

    render(this.#eventPointComponent, this.#eventListContainer);
  }

  #replaceViewToEdit() {
    return replace(this.#eventEditComponent, this.#eventPointComponent);
  }

  #replaceEditToView() {
    return replace(this.#eventPointComponent, this.#eventEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditToView();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleEditClick = () => {
    this.#replaceViewToEdit();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleCloseForm = () => {
    this.#replaceEditToView();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFormSubmit = () => {
    this.#replaceEditToView();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };
}
