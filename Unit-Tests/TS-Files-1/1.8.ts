//Task 1.8
type combine = number | string;
export function bankersRound(num: number): number {
  if (num % 1 <= 0.5) return Math.trunc(num);

  return Math.round(num);
}

let oldDate: Date = new Date(2022, 2, 31, 15, 19, 0, 345);
let newDate: Date = new Date();

export const diffTimeBetweenDate = (oldDate: Date, newDate: Date): string => {
  let newResultOfDate: number = newDate.getTime();
  let OldResultOfDate: number = oldDate.getTime();
  let diffTime: number = newResultOfDate - OldResultOfDate;
  let type: string = "NO RESULT";
  let count: number = 0;

  if (diffTime / 1000 <= 59) {
    count = diffTime / 1000;
    type = "sec";
  } else if (diffTime / (1000 * 60) <= 59) {
    count = diffTime / (1000 * 60);
    type = "min";
  } else if (diffTime / (1000 * 60 * 60) <= 24) {
    count = diffTime / (1000 * 60 * 60);
    type = "hours";
  } else if (
    diffTime / (1000 * 60 * 60 * 24) >= 1 &&
    diffTime / (1000 * 60 * 60 * 24) <= 7
  ) {
    count = diffTime / (1000 * 60 * 60 * 24);
    type = "days";
  } else if (diffTime / (1000 * 60 * 60 * 24 * 7) <= 4) {
    count = diffTime / (1000 * 60 * 60 * 24 * 7);
    type = "week";
  } else if (diffTime / (1000 * 60 * 60 * 24 * 30) <= 12) {
    count = diffTime / (1000 * 60 * 60 * 24 * 30);
    type = "months";
  } else if (diffTime / (1000 * 60 * 60 * 24 * 365) >= 1) {
    count = diffTime / (1000 * 60 * 60 * 24 * 365);
    type = "year";
  }
  return `${bankersRound(count)} ${type} ago`;
};
diffTimeBetweenDate(oldDate, newDate);

const getNewDate = () => {
  let year: combine = newDate.getFullYear();
  let month: combine = newDate.getMonth() + 1;
  let day: combine = newDate.getDate();
  let hour: combine = newDate.getHours();
  let min: combine = newDate.getMinutes();
  let sec: combine = newDate.getSeconds();
  let mSec = newDate.getMilliseconds();

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
  let time1: string =
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
  console.log(time1);
};
getNewDate();

const getOldDate = (): void => {
  let year: combine = oldDate.getFullYear();
  let month: combine = oldDate.getMonth() + 1;
  let day: combine = oldDate.getDate();
  let hour: combine = oldDate.getHours();
  let min: combine = oldDate.getMinutes();
  let sec: combine = oldDate.getSeconds();
  let mSec = oldDate.getMilliseconds();

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
  console.log(time);
};
getOldDate();
