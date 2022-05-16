//Task 1.7

let date: Date = new Date();
export const getDate = (date): string => {
  let year: number | string = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDate();
  let hour: number | string = date.getHours();
  let min: number | string = date.getMinutes();
  let sec: number | string = date.getSeconds();
  let mSec: number = date.getMilliseconds();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  let time =
    year +
    "-" +
    month +
    "-" +
    day +
    "T" +
    hour +
    ":" +
    min +
    ":" +
    sec +
    "." +
    mSec +
    "Z";
  return time;
};
getDate(date);
