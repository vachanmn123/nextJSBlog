export function formatDate(date) {
  const dateObj = new Date(date);
  let dateString = `${dateObj.getDay()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`;
  return dateString;
}
