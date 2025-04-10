1. Challenge 1:
  - Answer: b
  - Explanation: because bar() is called first which will change foo to "xyz" and log it. Then foo is console logged to yield "xyz".


2. Challenge 2:
  - Answer: c
  - Explanation: because a is first declared as 1 in the global scope. Then example is called which changes a to 10 and logs it. Then a is logged to the console but this is outside the scope of example, where a is equal to 1.


3. Challenge 3:
  - Answer: c
  - Explanation: the function may be called before the function is defined, however, the javascript hoisting mechanism negates what would normally be a reference error in other languages.


4. Challenge 4:
  - Answer: c
  - Explanation: a is made equal to b, then the num property of both is set to 90. so when a is logged it will show num: 90


5. Bonus - Challenge 5:
  - Answer: 
  - Explanation: 
