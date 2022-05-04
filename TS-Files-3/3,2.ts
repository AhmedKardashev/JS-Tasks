let date = new Date();
let string = "YYYY-MMMM-DD HH:Mm:ss Is my proof of concept!";
type combinee = number | string;
interface length {
  name: string;
  length: number;
}

interface Date {
  DataToString(string: string): void;
}
Date.prototype.DataToString = function (string: string) {
  let year: number = this.getFullYear();
  let month: number = this.getMonth() + 1;
  let day: combinee = this.getDate();
  let getDayLikeNumber: number = this.getDay();
  let hour: combinee = this.getHours();
  let min: combinee = this.getMinutes();
  let sec: combinee = this.getSeconds();
  let nameOfmonth: combinee = "";
  let currentDate: string = "";
  let yearFormat: string = "";
  let monthFormat: string = "";
  let dayFormat: string = "";
  let splitString: string[] = string.split("-");
  yearFormat = splitString[0];
  monthFormat = splitString[1];
  dayFormat = splitString[2].split(" ")[0];
  let hourFormat: string = "";
  let minFormat: combinee = "";
  let secFormat: combinee = "";
  splitString = string.split(":");
  let ss: combinee = "";
  ss = splitString[2].split(" ")[0];
  let m: combinee = "";
  m = splitString[2].split(" ")[2].split("")[0];
  let s: combinee = "";
  s = splitString[2].split(" ")[1].split("")[1];
  hourFormat = splitString[0].split(" ")[1];
  minFormat = splitString[1];
  secFormat = splitString[2].split(" ")[0];

  switch (month) {
    case 1:
      nameOfmonth = "January";
      break;
    case 2:
      nameOfmonth = "February";
      break;
    case 3:
      nameOfmonth = "March";
      break;
    case 4:
      nameOfmonth = "April";
      break;
    case 5:
      nameOfmonth = "May";
      break;
    case 6:
      nameOfmonth = "June";
      break;
    case 7:
      nameOfmonth = "July";
      break;
    case 8:
      nameOfmonth = "August";
      break;
    case 9:
      nameOfmonth = "September";
      break;
    case 10:
      nameOfmonth = "October";
      break;
    case 11:
      nameOfmonth = "November";
      break;
    case 12:
      nameOfmonth = "December";
      break;
  }

  if (day < 10 && dayFormat == "DD") {
    day = "0" + day;
  } else if (dayFormat == "D") {
    day = day;
  } else if (dayFormat === "Ddd") {
    switch (getDayLikeNumber) {
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Tuer";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
        break;
      case 7:
        day = "Sun";
        break;
    }
  } else if (dayFormat == "Do") {
    switch (day) {
      case 1:
        day = "1st";
        break;
      case 2:
        day = "2st";
        break;
      case 3:
        day = "3st";
        break;
      case 4:
        day = "4st";
        break;
      case 5:
        day = "5st";
        break;
      case 6:
        day = "6st";
        break;
      case 7:
        day = "7st";
        break;
      case 8:
        day = "8st";
        break;
      case 9:
        day = "9st";
        break;
      case 10:
        day = "10st";
        break;
      case 11:
        day = "11st";
        break;
      case 12:
        day = "12st";
        break;
      case 13:
        day = "13st";
        break;
      case 14:
        day = "14st";
        break;
      case 15:
        day = "15st";
        break;
      case 16:
        day = "16st";
        break;
      case 17:
        day = "17st";
        break;
      case 18:
        day = "18st";
        break;
      case 19:
        day = "19st";
        break;
      case 20:
        day = "20st";
        break;
      case 21:
        day = "21st";
        break;
      case 22:
        day = "22st";
        break;
      case 23:
        day = "23st";
        break;
      case 24:
        day = "24st";
        break;
      case 25:
        day = "25st";
        break;
      case 26:
        day = "26st";
        break;
      case 27:
        day = "27st";
        break;
      case 28:
        day = "28st";
        break;
      case 29:
        day = "29st";
        break;
      case 30:
        day = "30st";
        break;
      case 31:
        day = "31st";
        break;
    }
  } else if (dayFormat === "dddd") {
    switch (getDayLikeNumber) {
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 7:
        day = "Sunday";
        break;
    }
  } else if (dayFormat == "E") {
    day = day;
  }
  if (month < 10 && monthFormat == "MM") {
    nameOfmonth = "0" + month;
  } else if (monthFormat == "M") {
    nameOfmonth = month;
  } else if (monthFormat === "MMM") {
    switch (month) {
      case 1:
        nameOfmonth = "Jan";
        break;
      case 2:
        nameOfmonth = "Feb";
        break;
      case 3:
        nameOfmonth = "Mar";
        break;
      case 4:
        nameOfmonth = "Apr";
        break;
      case 5:
        nameOfmonth = "May";
        break;
      case 5:
        nameOfmonth = "Jun";
        break;
      case 7:
        nameOfmonth = "Jul";
        break;
      case 8:
        nameOfmonth = "Aug";
        break;
      case 9:
        nameOfmonth = "Sep";
        break;
      case 10:
        nameOfmonth = "Oct";
        break;
      case 11:
        nameOfmonth = "Nov";
        break;
      case 12:
        nameOfmonth = "Dec";
        break;
    }
  }

  if (hour < 10 && hourFormat.length == 2) {
    hour = "0" + hour;
  } else if (hourFormat.length == 1) {
    hour = hour;
  }
  if (min < 10 && minFormat == "Mm") {
    min = "0" + min;
  } else if (minFormat == "M") {
    min = min;
  }
  if (sec < 10 && secFormat == "ss") {
    sec = "0" + sec;
  } else if (secFormat == "s") {
    sec = sec;
  }
  if (s.length == 1) {
    s = sec;
  } else if (s.length == 2 && +s < 10) {
    s = "0" + sec;
  }

  if (m.length == 2) {
    m = "0" + min;
  } else if (m.length == 1) {
    m = min;
  }
  currentDate =
    year +
    "-" +
    nameOfmonth +
    "-" +
    day +
    " " +
    hour +
    ":" +
    min +
    ":" +
    sec +
    " " +
    `I${s} ${m}y proof of concept!`;
  console.log(currentDate);
};

date.DataToString(string);
