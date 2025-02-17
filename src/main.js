import { render } from './render';
import FilterView from './view/filter-view';
import EventListPresenter from './presenter/event-list-presenter';

const filterContainer = document.querySelector('.trip-controls__filters');
render(new FilterView(), filterContainer);

const eventListPresenter = new EventListPresenter({
  eventListContainer: document.querySelector('.trip-events'),
});

eventListPresenter.init();
