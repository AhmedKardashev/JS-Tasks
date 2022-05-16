export const padZero = (number: number): string => {
  let formatedNumber = "";
  if (number <= 9) {
    formatedNumber = "0" + number;
  }
  return formatedNumber;
};
interface Tokens {
  [key: string]: (date: Date) => number | string;
}

const tokens: Tokens = {
  YYYY: (date: Date) => date.getFullYear(),
  MM: (date: Date) => padZero(date.getMonth()),
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

export const tokenFill = (date: Date, string: string): string => {
  return Object.entries(tokens).reduce((result, [token, func]) => {
    return result.replace(token, func(date).toString());
  }, string);
};

const myDate: Date = new Date();
const customString: string = "YYYY-MM-DD HH:mm:ss Is my proof of concept!";
console.log(tokenFill(myDate, customString));
