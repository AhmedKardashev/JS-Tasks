//Task 1.5
//Part1
interface ForObject {
  [key: string]: number | string | undefined | object | null | Function;
}

let object: ForObject = {
  cards: 6,
  label: "Test",
  description: "value",
  type: 1,
  role: undefined,
  person: { name: "John Doe" },
  skills: null,
  report: () => {
    console.log("Hello,  world!");
  },
  experience: { count: 5 },
};

export const heaviness = (object: object): number => {
  let count: number = 0;
  let objectArray: any[];

  objectArray = Object.values(object);
  console.log(objectArray);
  objectArray.forEach((element) => {
    switch (typeof element) {
      case "number":
        count = count + 4;
        break;

      case "object":
        if (element === null) {
          count += 2;
        } else count += 10;

        break;

      case "function":
        count += 10;
        break;
      case "undefined":
        count += 2;
        break;
      case "boolean":
        count += 4;
        break;
      case "string":
        count += 8;
        break;
    }
  });
  console.log(count);
  return count;
};

heaviness(object);
