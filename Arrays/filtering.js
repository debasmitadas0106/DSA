// Filter an array of numbers to get only the even numbers.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers.filter((item) => item % 2 == 0);

// Filter an array of strings to get only those that contain the letter "a".
let words = ["apple", "banana", "cherry", "date", "elderberry"];
let wordsWithA = words.filter((item) => item.includes("a"));

// Filter an array of objects to return only those with age greater than 25.

let users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 22 },
];

let usersAbove25 = users.filter((item) => item.age > 25);

//Filter an array of numbers to get all numbers greater than or equal to 50.
let scores = [12, 45, 67, 23, 50, 89, 40];

let scoreAbove50 = scores.filter((item) => item >= 50);

//. Filter an array of objects to return only those where the status is "active"
let user = [
  { name: "John", status: "active" },
  { name: "Alice", status: "inactive" },
  { name: "Bob", status: "active" },
  { name: "Charlie", status: "inactive" },
];

let activeUsers = user.filter((item) => item.status === "active");

//Filter an array of strings to return only those that have a length greater than 5.
let phrases = ["hello", "world", "JavaScript", "is", "awesome"];
let lengthOfPhrases = phrases.filter((item) => item.length > 5);

//Filter an array of numbers to return numbers divisible by 3.
let number = [3, 5, 9, 12, 15, 20, 21, 27];

let divBy3 = numbers.filter((item) => item % 3 == 0);

//Filter an array of objects to return those that have a role of "Admin".
let employees = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "Manager" },
  { name: "Charlie", role: "Admin" },
  { name: "David", role: "Staff" },
];
let adminList = employees.filter((item) => item.role === "Admin");

// Filter an array of objects to return those where the age is between 18 and 30.

let people = [
  { name: "Sam", age: 20 },
  { name: "Alice", age: 35 },
  { name: "Bob", age: 28 },
  { name: "John", age: 16 },
];

let adults = people.filter((item) => item.age > 18 && item.age < 30);

// Filter an array of numbers to remove any duplicates and return only unique values
let numbers2 = [1, 2, 3, 3, 4, 5, 2, 6, 7, 8, 1];

let uniqueNumbers = numbers.filter(
  (item, index, arr) => arr.indexOf(item) === index
);

//Filter an array of objects to return those where city is either "California" or "Texas".
let peoples = [
  { name: "Sam", city: "New York" },
  { name: "Alex", city: "California" },
  { name: "Debasmita", city: "California" },
  { name: "Jordan", city: "Texas" },
  { name: "Emily", city: "Florida" },
];

let peopleInUSA = peoples.filter(
  (Item) => Item.city === "Texas" || Item.city === "California"
);

//Filter an array of objects to return users who are both active and over the age of 30.

let usersef = [
  { name: "Sam", status: "active", age: 25 },
  { name: "Alice", status: "inactive", age: 35 },
  { name: "Bob", status: "active", age: 32 },
  { name: "Charlie", status: "active", age: 28 },
];

let usersAbove30AndActive = users.filter(
  (item) => item.status === "active" && item.age > 30
);

//Filter an array of objects to return items that contain a specific substring in a string field.

let items = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shoes", category: "Clothing" },
  { name: "Shirt", category: "Clothing" },
];

let electronicItems = items.filter((item) => item.category.includes("Elec"));
// let searchTerm = "Elec";
// let regex = new RegExp(searchTerm, "i"); // 'i' makes it case-insensitive

// let electronicItems = items.filter((item) => regex.test(item.category));
//--------------------------------------------------------------------------------------->

//Filter an array of numbers to get only numbers that are both prime and greater than 10.
let numbersfgh = [2, 3, 5, 7, 11, 13, 17, 18, 19, 23];

function isPrime(n) {
  if (n < 2) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // Loop only up to sqrt(n)
    if (n % i === 0) return false; // If divisible, not prime
  }
  return true; // If no divisors found, it's prime
}

let primeNos = numbers.filter((item) => item > 10 && isPrime(item));

//Filter an array of objects to return users who have made at least one purchase over $500.
let u4sers = [
  { name: "Alice", purchases: [200, 600, 150] },
  { name: "Bob", purchases: [50, 100, 75] },
  { name: "Charlie", purchases: [300, 400, 700] },
  { name: "David", purchases: [20, 30, 40] },
];

let resul4t = users.filter((user) => user.purchases.some((p) => p > 500));
let result2 = users.map((user) => user.purchases.some((p) => p > 500));

//Filter an array of products to include only those with at least one color option available
let products = [
  { name: "T-Shirt", colors: ["Red", "Blue"] },
  { name: "Jeans", colors: [] },
  { name: "Sneakers", colors: ["White"] },
  { name: "Hat", colors: [] },
];
let productWithColourOption = products.filter((item) => item.colors.length > 0);
console.log(productWithColourOption);

//Filter an array of employees to return only those who have been with the company for more than 5 years and are in "Management" roles and return their names.
let employeest = [
  { name: "John", yearsOfService: 6, role: "Management" },
  { name: "Sarah", yearsOfService: 4, role: "Developer" },
  { name: "Tom", yearsOfService: 8, role: "Management" },
  { name: "Lisa", yearsOfService: 10, role: "HR" },
];

let employeeWithMoreThan5yrsExp = employeest
  .filter((item) => item.yearsOfService > 5)
  .map((e) => ({ name: e.name, department: e.role }));
console.log(employeeWithMoreThan5yrsExp);

//Filter an array of users to return only those who have completed all tasks assigned to them.
let users23 = [
  {
    name: "Alice",
    tasks: [
      { task: "Login", completed: true },
      { task: "Upload Photo", completed: true },
    ],
  },
  {
    name: "Bob",
    tasks: [
      { task: "Setup Profile", completed: true },
      { task: "Verify Email", completed: false },
    ],
  },
  { name: "Charlie", tasks: [{ task: "Buy Subscription", completed: true }] },
];

let employeeWithCompletedTasks = users23.filter((item) =>
  item.tasks.every((e) => e.completed)
);
console.log(employeeWithCompletedTasks);

// Filter an array of students to return only those who passed all subjects (score > 50 in every subject).
let students = [
  { name: "Mike", scores: { Math: 80, English: 90, Science: 75 } },
  { name: "Sophie", scores: { Math: 30, English: 80, Science: 65 } },
  { name: "John", scores: { Math: 60, English: 70, Science: 55 } },
];

let studentsWhoPassed = students.filter((item) =>
  Object.values(item.scores).every((score) => score > 40)
);
console.log(studentsWhoPassed);

//Filter an array of orders to return only the ones where all items are in stock.
let orders = [
  {
    id: 1,
    items: [
      { name: "Laptop", inStock: true },
      { name: "Mouse", inStock: true },
    ],
  },
  {
    id: 2,
    items: [
      { name: "Phone", inStock: true },
      { name: "Case", inStock: false },
    ],
  },
  { id: 3, items: [{ name: "Headphones", inStock: true }] },
];

let itemsInStock = orders.filter((item) => item.items.every((e) => e.inStock));
console.log(itemsInStock);

//. Filter an array of events to return only upcoming events happening within the next 30 days.
let events = [
  { name: "Tech Conference", date: "2025-02-28" },
  { name: "Startup Meetup", date: "2024-10-20" },
  { name: "AI Workshop", date: "2024-09-15" },
  { name: "Hackathon", date: "2024-12-01" },
];

let today = new Date(); // Get today's date
//console.log(today)
let thirtyDaysLater = new Date();
thirtyDaysLater.setDate(today.getDate() + 30); // Add 30 days
//console.log(thirtyDaysLater)
let eventUpcoming = events.filter((event) => {
  let eventDate = new Date(event.date);
  console.log(eventDate);
  // Convert event date to Date object
  return eventDate >= today && eventDate <= thirtyDaysLater; // Check if it's within the next 30 days
});

console.log(eventUpcoming);
