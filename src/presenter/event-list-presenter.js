import { render } from '../render.js';
import CreatePointView from '../view/create-point-view.js';
import EventListView from '../view/event-list-view.js';
import EventPointView from '../view/event-point-view.js';
import SortView from '../view/sort-view.js';
import FilterView from '../view/filter-view';

export default class EventAppPresenter {
  filterComponent = new FilterView();
  eventListComponent = new EventListView();

  constructor({ eventListContainer, filterContainer }) {
    this.eventListContainer = eventListContainer;
    this.filterContainer = filterContainer;
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.eventListContainer);
    render(this.eventListComponent, this.eventListContainer);
    render(new CreatePointView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventPointView(), this.eventListComponent.getElement());
    }
  }
}
