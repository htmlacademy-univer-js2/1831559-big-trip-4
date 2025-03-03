import { remove, render, replace } from '../framework/render';
import EditPointView from '../view/edit-point-view';
import EventPointView from '../view/event-point-view';

export default class EventPointPresenter {
  #eventListContainer = null;

  #event = null;
  #destinations = [];

  #eventPointComponent = null;
  #eventEditComponent = null;

  #handleEventChange = null;

  constructor({ eventListContainer, onEventChange }) {
    this.#eventListContainer = eventListContainer;
    this.#handleEventChange = onEventChange;
  }

  init(event, destinations) {
    this.#event = event;
    this.#destinations = destinations;

    const prevEventPointComponent = this.#eventPointComponent;
    const prevEditPointComponent = this.#eventEditComponent;

    this.#eventPointComponent = new EventPointView({
      event,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#eventEditComponent = new EditPointView({
      event,
      destinations: this.#destinations,
      onFormSubmit: this.#handleFormSubmit,
      onCloseForm: this.#handleCloseForm,
    });

    if (prevEventPointComponent === null || prevEditPointComponent === null) {
      render(this.#eventPointComponent, this.#eventListContainer);
      return;
    }

    if (this.#eventListContainer.contains(prevEventPointComponent.element)) {
      replace(this.#eventPointComponent, prevEventPointComponent);
    }

    if (this.#eventListContainer.contains(prevEditPointComponent.element)) {
      replace(this.#eventEditComponent, prevEditPointComponent);
    }

    remove(prevEventPointComponent);
    remove(prevEditPointComponent);
  }

  #destroy() {
    remove(this.#eventPointComponent);
    remove(this.#eventEditComponent);
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

  #handleFormSubmit = (event) => {
    this.#replaceEditToView();
    this.#handleEventChange(event);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFavoriteClick = () => {
    this.#handleEventChange({...this.#event, isFavorite: !this.#event.isFavorite});
  };
}
