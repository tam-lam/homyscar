export function getDateString(isoDate) {
  var date = new Date(isoDate);
  var dateString = date.toDateString();
  return dateString;
}

export function getTimeString(isoDate) {
  var date = new Date(isoDate);
  var timeString = date.toLocaleTimeString();
  return timeString;
}
