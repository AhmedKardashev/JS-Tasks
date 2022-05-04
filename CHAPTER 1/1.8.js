"use strict";
function bankersRound(num) {
    if (num % 1 <= 0.5)
        return Math.trunc(num);
    return Math.round(num);
}
let oldDate = new Date(2022, 2, 31, 15, 19, 0, 345);
let newDate = new Date();
const diffTimeBetweenDate = () => {
    let newResultOfDate = newDate.getTime();
    let OldResultOfDate = oldDate.getTime();
    let diffTime = newResultOfDate - OldResultOfDate;
    let type = "NO RESULT";
    let count = 0;
    if (diffTime / 1000 <= 59) {
        count = diffTime / 1000;
        type = "sec";
    }
    else if (diffTime / (1000 * 60) <= 59) {
        count = diffTime / (1000 * 60);
        type = "min";
    }
    else if (diffTime / (1000 * 60 * 60) <= 24) {
        count = diffTime / (1000 * 60 * 60);
        type = "hours";
    }
    else if (diffTime / (1000 * 60 * 60 * 24) >= 1 &&
        diffTime / (1000 * 60 * 60 * 24) <= 7) {
        count = diffTime / (1000 * 60 * 60 * 24);
        type = "days";
    }
    else if (diffTime / (1000 * 60 * 60 * 24 * 7) <= 4) {
        count = diffTime / (1000 * 60 * 60 * 24 * 7);
        type = "week";
    }
    else if (diffTime / (1000 * 60 * 60 * 24 * 30) <= 12) {
        count = diffTime / (1000 * 60 * 60 * 24 * 30);
        type = "months";
    }
    else if (diffTime / (1000 * 60 * 60 * 24 * 365) >= 1) {
        count = diffTime / (1000 * 60 * 60 * 24 * 365);
        type = "year";
    }
    console.log(`${bankersRound(count)} ${type} ago`);
};
diffTimeBetweenDate();
const getNewDate = () => {
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let hour = newDate.getHours();
    let min = newDate.getMinutes();
    let sec = newDate.getSeconds();
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
    let time1 = year +
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
const getOldDate = () => {
    let year = oldDate.getFullYear();
    let month = oldDate.getMonth() + 1;
    let day = oldDate.getDate();
    let hour = oldDate.getHours();
    let min = oldDate.getMinutes();
    let sec = oldDate.getSeconds();
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
    let time = year +
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
