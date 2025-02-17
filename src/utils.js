import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

export function formatDateByPurpose(date, purpose) {
  let format = '';

  switch (purpose) {
    case 'eventDateAttr':
      format = 'YYYY-MM-DD';
      break;
    case 'eventDate':
      format = 'MMM DD';
      break;
    case 'time':
      format = 'HH:mm';
      break;
    case 'eventTimeAttr':
      format = 'YYYY-MM-DDTHH:mm';
      break;
  }

  return date ? dayjs(date).format(format) : '';

}

export function calcDuration(start, end) {
  dayjs.extend(duration);

  const startTime = dayjs(start);
  const endTime = dayjs(end);

  const diff = dayjs.duration(endTime.diff(startTime));
  const formattedDiff = `${String(diff.hours()).padStart(2, '0')}H ${String(diff.minutes()).padStart(2, '0')}M`;

  return formattedDiff;
}

export function capitalize(text) {
  const result = text ? text[0].toUpperCase() + text.substring(1) : '';

  return result;
}

export function transformToKebabCase(text) {
  return text ? text.split(' ').join('-') : '';
}
