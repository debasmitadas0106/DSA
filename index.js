let arr = [
  {
    name: "Debasmita",
    age: 25,
    profession: "Engineer",
  },
  {
    name: "Ankan",
    age: 27,
    profession: "Analyst",
  },
  {
    name: "Sona",
    age: 23,
    profession: "Writer",
  },
];

let result = arr.reduce(
  (acc, element) => {
    acc.name.push(element.name);
    acc.age.push(element.age);
    acc.profession.push(element.profession);
    return acc;
  },
  { name: [], age: [], profession: [] } // Initial accumulator with empty arrays
);

console.log(result);
