1. Challenge 1:
  - Answer: xyz and xyz 
  - Explanation: foo is a global variabl and that is reassigned in the the function. therefore both function and console.log afterwards will print xyz


2. Challenge 2:
  - Answer:10 and 1
  - Explanation: by passing a as a value to the function the function declares a local variabl that is shadowing the gloabl variable. function only changes the local a without the global variable a


3. Challenge 3:
  - Answer: "Hi  there!", since functions are hoisted in java script
  - Explanation:


4. Challenge 4:
  - Answer: `{ num: 90 }`
  - Explanation: b is a shallow copy of a


5. Bonus - Challenge 5:
  - Answer: `{ name: "Bob", age: 10 }` and `{ name: "Ada", age: 20 }`
  - Explanation: first obj references rabbit1, when obj = { name: "Ada", age: 20 };, a new obj is created and the reference points to the new object. 
