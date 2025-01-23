1. Challenge 1:
let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();


console.log(foo);
  - Answer: b
  - Explanation: inside the the first function we are reassigning the value of foo to "xyz" so on running the code the function assigns the value of foo to xyz first and the print the console.log inside the function and then it moves to the next function bar()


2. Challenge 2:
  - Answer:c
  - Explanation: inside the function we are reffering a as a element and assigning value to that element of the function so the a is only belongs to that function the a mentioned in the function is  global variable so it is not reassigning the value of a 


3. Challenge 3:
  - Answer:C
  - Explanation:function hosting is applied here the function can be called befor or after it's declaration .


4. Challenge 4:
  - Answer:C
  - Explanation: ba nd a are refereing to a same object in a memory so If we change the value of b it will change the value of a too.


5. Bonus - Challenge 5:
//function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 };
  
const rabbit2 = magicHat(rabbit1);
  
console.log("rabbit1: ", rabbit1);
console.log("rabbit2: ", rabbit2);
  - Answer:C
  - Explanation:
 the function  accepts an obj as an arugument . so if we pass the object it will assign the age :10 to the object first and then It will assign the obj arugument which is defined in the function 
 > Now intiall the the rabbit 1 name  is  bob and age is 30 for rabit 2 it is magicHat(rabbit1); so the rabbit 1 oject will pass to the function so 
 rabbit 2 is = name ada age 20. but rabit 1 is pointing to the new object which the age is changed . 
