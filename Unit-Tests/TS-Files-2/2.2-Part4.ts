// Part 4:

interface Person {
  firstName: string;
  lastName: string;
  role: {
    type: string;
    id: number;
  };
}

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  role: {
    type: "Admin",
    id: 2,
  },
};

let arr: any[] = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  () => {
    console.log("Hello,  world!");
  },
  { count: 5 },
  {
    firstName: "John",
    lastName: "Doe",
    role: { type: "Admin", id: 2 },
  },
];
interface Func {
  (p1: any[], p2: object): boolean;
}
const findPropertyOfObject: Func = (value, person) => {
  console.log(value);

  for (const [key] of Object.entries(value)) {
    if (value[key] === person[key]) {
      continue;
    } else return false;
  }

  return true;
};

const findObjFromArray: Func = (arr, person) => {
  for (let i: number = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      if (
        arr[i] !== null &&
        !Array.isArray(arr[i]) &&
        !(arr[i] instanceof Date)
      ) {
        if (arr[i] === person) {
          return true;
        } else {
          for (const value of Object.values(arr[i])) {
            if (typeof value === "object") {
              if (value === person) {
                return true;
              } else break;
            }
          }
        }

        for (const [key] of Object.entries(arr[i])) {
          if (typeof arr[i][key] === "object") {
            return findPropertyOfObject(arr[i][key], person[key]);
          }
          if (arr[i][key] === person[key]) {
            continue;
          } else break;
        }
      }
    }
  }
  return false;
};
console.log(findObjFromArray(arr, person));
