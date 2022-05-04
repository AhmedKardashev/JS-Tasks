"use strict";
let myClock = 0;
class Clock {
    constructor(date = new Date()) {
        this.timeZones = [];
        this.startDate = 0;
        this.hideTime = (timeZone) => {
            if (this.timeZones.includes(timeZone)) {
                if (!this.intervalID) {
                    clearInterval(this.intervalID);
                    this.intervalID = true;
                }
            }
        };
        this.date = date;
    }
    showTime(format, timeZone) {
        const tokens = {
            YYYY: (date) => date.getFullYear(),
            MM: (date) => padZero(date.getMonth() + 1),
            M: (date) => date.getMonth(),
            DD: (date) => padZero(date.getDate()),
            D: (date) => date.getDate(),
            HH: (date) => padZero(date.getHours()),
            H: (date) => date.getHours(),
            mm: (date) => padZero(date.getMinutes()),
            m: (date) => date.getMinutes(),
            ss: (date) => padZero(date.getSeconds()),
            s: (date) => date.getSeconds(),
        };
        const padZero = (number) => {
            if (number <= 9) {
                number = "0" + number;
            }
            return number;
        };
        if (format && !timeZone) {
            const tokenFill = (date, string) => {
                return Object.entries(tokens).reduce((result, [token, func]) => {
                    return result.replace(token, func(date));
                }, string);
            };
            const incrementSeconds = () => {
                this.date.setSeconds(this.date.getSeconds() + 1);
                console.log(tokenFill(this.date, format));
            };
            this.intervalID = setInterval(incrementSeconds, 1000);
        }
        if (!format && !timeZone) {
            console.log(this.date);
        }
        else if (format && timeZone) {
            const tokenFill = (date, string) => {
                return Object.entries(tokens).reduce((result, [token, func]) => {
                    return result.replace(token, func(date));
                }, string);
            };
            let tz = this.date.toLocaleString("en-US", {
                timeZone: timeZone,
            });
            let newTimeZoneDate = new Date(tz);
            console.log(tokenFill(newTimeZoneDate, format));
            const incrementSeconds = () => {
                console.log(timeZone);
                console.log(tokenFill(newTimeZoneDate, format));
                newTimeZoneDate.setSeconds(newTimeZoneDate.getSeconds() + 1);
                console.log("-----------------------------------------------------------------------");
            };
            this.intervalID = setInterval(incrementSeconds, 1000);
            for (let i = 0; i < this.timeZones.length; i++) {
                if (this.timeZones[i] === timeZone) {
                    console.log(`${timeZone}already exists`);
                    clearInterval(this.intervalID);
                }
            }
            this.timeZones.push(timeZone);
        }
    }
    chronoStart() {
        this.startDate = new Date().getTime();
    }
    chronoStop() {
        const endDate = new Date().getTime();
        const result = (endDate - this.startDate) / 1000;
        console.log(result);
    }
}
myClock = new Clock();
myClock.showTime();
myClock.showTime("YYYY-MM-DD HH:mm:0ss Is my proof of concept!"); //work here
// myClock.showTime(
//   "YYYY-MM-DD HH:mm:ss Is my proof of concept!",
//   "Asia/Shanghai"
// );
// setTimeout(() => myClock.hideTime("Asia/Shanghai"), 1000);
// myClock.chronoStart();
// myClock.chronoStop();
