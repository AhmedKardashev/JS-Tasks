let myClock: any = 0;
type stringOrNumber = string | number;
export class Clock {
  timeZones: any = [];
  intervalID: any;
  startDate = 0;
  date: Date;

  constructor(date = new Date()) {
    this.date = date;
  }

  showTime(format: string, timeZone: string) {
    const tokens: {
      [key: string]: (date: Date) => number;
    } = {
      YYYY: (date: Date) => date.getFullYear(),
      MM: (date: Date) => padZero(date.getMonth() + 1),
      M: (date: Date) => date.getMonth(),
      DD: (date: Date) => padZero(date.getDate()),
      D: (date: Date) => date.getDate(),
      HH: (date: Date) => padZero(date.getHours()),

      H: (date: Date) => date.getHours(),
      mm: (date: Date) => padZero(date.getMinutes()),
      m: (date: Date) => date.getMinutes(),
      ss: (date: Date) => padZero(date.getSeconds()),
      s: (date: Date) => date.getSeconds(),
    };
    const padZero = (number: stringOrNumber): any => {
      if (number <= 9) {
        number = "0" + number;
      }
      return number;
    };
    if (format && !timeZone) {
      const tokenFill = (date: Date, string: string) => {
        return Object.entries(tokens).reduce((result, [token, func]) => {
          return result.replace(token, func(date).toString());
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
    } else if (format && timeZone) {
      const tokenFill = (date: Date, string: string) => {
        return Object.entries(tokens).reduce((result, [token, func]) => {
          return result.replace(token, func(date).toString());
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
        console.log(
          "-----------------------------------------------------------------------"
        );
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
  hideTime = (timeZone: string): void => {
    if (this.timeZones.includes(timeZone)) {
      if (!this.intervalID) {
        clearInterval(this.intervalID);
        this.intervalID = true;
      }
    }
  };
  chronoStart(): void {
    this.startDate = new Date().getTime();
  }
  chronoStop(): void {
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
