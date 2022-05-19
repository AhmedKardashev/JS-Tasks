"use strict";
exports.__esModule = true;
exports.diffTimeBetweenDate = exports.bankersRound = void 0;
function bankersRound(num) {
    if (num % 1 <= 0.5)
        return Math.trunc(num);
    return Math.round(num);
}
exports.bankersRound = bankersRound;
var oldDate = new Date(2022, 2, 31, 15, 19, 0, 345);
var newDate = new Date();
var diffTimeBetweenDate = function (oldDate, newDate) {
    var newResultOfDate = newDate.getTime();
    var OldResultOfDate = oldDate.getTime();
    var diffTime = newResultOfDate - OldResultOfDate;
    var type = "NO RESULT";
    var count = 0;
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
    return "".concat(bankersRound(count), " ").concat(type, " ago");
};
exports.diffTimeBetweenDate = diffTimeBetweenDate;
(0, exports.diffTimeBetweenDate)(oldDate, newDate);
var getNewDate = function () {
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var hour = newDate.getHours();
    var min = newDate.getMinutes();
    var sec = newDate.getSeconds();
    var mSec = newDate.getMilliseconds();
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
    var time1 = year +
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
var getOldDate = function () {
    var year = oldDate.getFullYear();
    var month = oldDate.getMonth() + 1;
    var day = oldDate.getDate();
    var hour = oldDate.getHours();
    var min = oldDate.getMinutes();
    var sec = oldDate.getSeconds();
    var mSec = oldDate.getMilliseconds();
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
    var time = year +
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
