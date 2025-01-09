export const formatHour = (date) => {
  var dateLocal = new Date(date);
  var hours = dateLocal.getUTCHours();
  var minutes = dateLocal.getUTCMinutes();
  var seconds = dateLocal.getUTCSeconds();
  var formatedHour = hours.toString().padStart(2, "0");
  var formatedMinutes = minutes.toString().padStart(2, "0");
  var formatedSeconds = seconds.toString().padStart(2, "0");

  return formatedHour + ":" + formatedMinutes + ":" + formatedSeconds;
};
