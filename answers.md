1. Challenge 1:
  - Answer: "xyz" and "xyz"
  - Explanation: shadowing of variable reassigned in function scope because let was omitted


2. Challenge 2:
  - Answer: 10 and 1
  - Explanation: a is a parameter of the function example and as such, does not override the variable a declared outside of the function. let is not necessary this time. 


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation: function is hoisted


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: both variables are referencing the same object. 


5. Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: rabbit1 is altered insid the function because objects are mutable and references only act as pointers. Within the function MagicHat(obj), you change rabbit1.age to 10 when you call it. You then create a second "rabbit1": obj = { name: "Ada", age: 20 }, that you store inside the variable rabbit2 upon function return.