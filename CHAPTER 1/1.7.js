"use strict";
//Task 1.7
let date = new Date();
const getDate = () => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let mSec = date.getMilliseconds();
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
    let time = year +
        "-" +
        month +
        "-" +
        day +
        "Т" +
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
getDate();
