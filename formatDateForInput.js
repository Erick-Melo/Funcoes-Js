export const formatDateForInput = (date) => {
  if (!date) {
    return null;
  } else {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    return year + "-" + month + "-" + day;
  }
};
