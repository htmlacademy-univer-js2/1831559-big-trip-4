import { remove, render, replace } from '../framework/render';
import EditPointView from '../view/edit-point-view';
import EventPointView from '../view/event-point-view';

const mode = {
  default: 'DEFAULT',
  edit: 'EDIT'
};

export default class EventPointPresenter {
  #eventListContainer = null;

  #event = null;
  #destinations = [];
  #mode = mode.default;

  #eventPointComponent = null;
  #eventEditComponent = null;

  #handleEventChange = null;
  #handleModeChange = null;

  constructor({ eventListContainer, onEventChange, onModeChange }) {
    this.#eventListContainer = eventListContainer;
    this.#handleEventChange = onEventChange;
    this.#handleModeChange = onModeChange;
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

    if (this.#mode === mode.default) {
      replace(this.#eventPointComponent, prevEventPointComponent);
    }

    if (this.#mode === mode.edit) {
      replace(this.#eventEditComponent, prevEditPointComponent);
    }

    remove(prevEventPointComponent);
    remove(prevEditPointComponent);
  }

  #replaceViewToEdit() {
    replace(this.#eventEditComponent, this.#eventPointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = mode.edit;
  }

  #replaceEditToView() {
    replace(this.#eventPointComponent, this.#eventEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = mode.default;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditToView();
    }
  };

  #handleEditClick = () => {
    this.#replaceViewToEdit();
  };

  #handleCloseForm = () => {
    this.#replaceEditToView();
  };

  #handleFormSubmit = (event) => {
    this.#replaceEditToView();
    this.#handleEventChange(event);
  };

  #handleFavoriteClick = () => {
    this.#handleEventChange({...this.#event, isFavorite: !this.#event.isFavorite});
  };

  resetView() {
    if (this.#mode !== mode.default) {
      this.#replaceEditToView();
    }
  }
}
