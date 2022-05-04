interface forObj {
  func: () => void;
  person: {
    firstName: string;
    lastName: string;
    role: string;
    nested: {
      name: string;
      lastName: string;
      age: number;
      city: string;
      nested2: {
        name: string;
        lastName: string;
        age: number;
        city: string;
      };
    };
  };
  permissions: string[];
  age: number;
  competencies: [object, object];
}

const obj: forObj = {
  func: () => {
    console.log("Im Function");
  },
  person: {
    firstName: "John",
    lastName: "Doe",
    role: "Admin",
    nested: {
      name: "Ahmed",
      lastName: "Kardashev",
      age: 22,
      city: "Gotse - Delchev",
      nested2: {
        name: "Ad",
        lastName: "Kar",
        age: 22,
        city: "Gotse - Delchev",
      },
    },
  },
  permissions: ["read", "write", "special"],
  age: 42,
  competencies: [
    { skill: "JavaScript", level: "junior" },
    { skill: "css", level: "junior" },
  ],
};
interface Object {
  deepCopy(): Object;
}

Object.prototype.deepCopy = function (): Object {
  let outObject: object, value: any, key: string | number;
  outObject = Array.isArray(this) ? [] : {};

  for (key in this) {
    if (this.hasOwnProperty(key)) {
      value = this[key];
      if (!value || typeof value !== "object") {
        outObject[key] = value;
      } else {
        outObject[key] = value.deepCopy();
      }
    }
  }

  return outObject;
};

console.log(obj.deepCopy());
