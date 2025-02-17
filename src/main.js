import EventAppPresenter from './presenter/event-list-presenter';
import EventsModel from './model/events-model';


const eventsModel = new EventsModel();
const eventAppPresenter = new EventAppPresenter({
  eventListContainer: document.querySelector('.trip-events'),
  filterContainer: document.querySelector('.trip-controls__filters'),
  eventsModel
});

eventAppPresenter.init();
