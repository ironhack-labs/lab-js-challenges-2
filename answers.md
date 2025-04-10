1. Challenge 1:
  - Answer: b
  - Explanation: console.log inside the function checks foo inside the function after it's been reasssigned. The console.log after bar() checks the  variable foo after it passed the function bar() which means now the value is xyz and not abc like it was before invoking the function.


2. Challenge 2:
  - Answer: c
  - Explanation: example(a) checks "a" in the function and not a in the global scope (global scope is let a =1)


3. Challenge 3:
  - Answer: c
  - Explanation: because of hoisting. 


4. Challenge 4:
  - Answer: c
  - Explanation: a and b point to the same object. They are stored with the same reference


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: now I know it's wrong. When magicHat calls rabbit1 it can modify age but it can not reassign it to "{ name: "Ada", age: 20 }", it returns a new obj created in there { name: "Ada", age: 20 } and rabbit1 has age updated. rabbit2 gets the (new) obj return which is { name: "Ada", age: 20 }  obj.age has nothing to do with rabbit2 but it does apply to rabbit1 because it has an age property. 

  function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
};


const rabbit1 = {name: "Bob", age: 30};
console.log(rabbit1.age + " before magic hat");  // Step 1. console shows here age is 30

console.log(magicHat(rabbit1));     // Step 2. this updates rabbit1.age and returns { name: "Ada", age: 20 } but I'm not storing it anywhere.

console.log(rabbit1.age + " after magic hat");  // Step 3. now I see age was updated  (in Step 2).

const rabbit2 = magicHat(rabbit1);   // Step 4. rabbit2  will store the new obj { name: "Ada", age: 20 } (what i get in the return)
  
console.log("rabbit1: ", rabbit1); // console shows bob  with age updated to 10 (from Step 2)
console.log("rabbit2: ", rabbit2); // console shows the new obj return from the magicHat (from Step 4).
