import EventListPresenter from './presenter/event-list-presenter';

const eventListPresenter = new EventListPresenter({
  eventListContainer: document.querySelector('.trip-events'),
  filterContainer: document.querySelector('.trip-controls__filters'),
});

eventListPresenter.init();
