let arr: any[] = [
  {
    person: {
      firstName: "John",
      lastName: "Doe",
      role: "Admin",
    },
    permissions: ["read", "write", "special"],
    age: 42,
    competencies: [
      { skill: "JavaScript", level: "junior" },
      { skill: "css", level: "junior" },
    ],
  },
  "sunny day",
  5,
];
interface Object {
  flattenObj(): object;
}
Array.prototype.flattenObj = function (): object {
  const flattenObj = (object: object): object => {
    let result: object = {};

    for (const i in object) {
      if (typeof object[i] === "object") {
        const temp = flattenObj(object[i]);
        for (const j in temp) {
          result[i + "_" + j] = temp[j];
        }
      } else {
        result[i] = object[i];
      }
    }
    return result;
  };

  let result: object = {};
  for (const i in this) {
    if (typeof this[i] === "object") {
      const temp = flattenObj(this[i]);
      for (const j in temp) {
        result[i + "_" + j] = temp[j];
      }
    } else {
      result[i] = this[i];
    }
  }
  return result;
};

console.log(arr.flattenObj());
