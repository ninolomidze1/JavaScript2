// problem1
// შექმენით ობიექტი რომელსაც დაარქმევთ car და შეინახავთ მანქანის ფერს, მწარმოებელს, მოდელს და ძრავის მოცულობას.

let car = {
  color: "orange",
  producer: "BMW",
  model: "X6",
  engine: "3,6",
};

// კონსოლში გამოიტანეთ შექმნილი ობიექტის მოდელი და ფერი.

console.log(car.model);
console.log(car.color);

//problem2
// პირველ დავალებაში შექმნილ ობიექტში ამოშალეთ ძრავის მოცულობა და ჩაამატეთ მფლობელის ველი (ფროფერთი)

delete car.engine;
car.owner = "Nino";
console.log(car.owner);

// problem3
// შექმენით მასივი სადაც შეინახავთ ადამიანის სახელებს მინიმუმ 5.

let array = ["Nino", "Gio", "Sandro", "Sonya", "Kato"];

// შექმნის შემდეგ გამოიტანეთ მასივის მესამე ელემენტი.

console.log(array[2]);

// ჩაამატეთ ბოლოში ახალი სახელი მაგალითად (სოფო)
array.push("sofo");
// წაშალეთ მასივის პირველი ელემენტი.
array.shift();
console.log(array);

// problem4
// არ ნახოთ კონსოლში ისე დაწერეთ რას დაბეჭდავს მოცემული კოდი.
// ახსენით რატომ.
//console.log([] && "John"); John-ს, რადგან false არ გვაქვს.
//console.log(null && "John");  Null არის false მნიშვნელობა, ამიტომ დაიწერება Null.
// console.log(0 && -0); 0
//console.log(Infinity && -Infinity); -Infinity.
//console.log([] || "John"); john
//console.log(null || "John"); john,რადგან უკვე ან ბრძანება გვაქვს. 
//console.log(0 || -0); -0
//console.log(Infinity || -Infinity);  Infinity