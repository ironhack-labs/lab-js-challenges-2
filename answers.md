1. Challenge 1:
  - Answer: 
  B
  - Explanation: 
the variable foo is initialized with a value "abc", but then in the function bar() the foo variable value is changed by "xyz". function bar is invoked, which will console.log foo, and then foo is again printed with another console.log. As foo value is now equal to "xyz", correct answer is B.

2. Challenge 2:
  - Answer: 
  A 
  - Explanation: 
  function example has a parameter (a). It sets the value of variable a to 10. The code invoked the function with parameter a, which refers to the variable, now set to 10. and then a console.log also prints a. Correct answer is A.


3. Challenge 3:
  - Answer: 
  C
  - Explanation: 
  sayHi is invoked before being declared but with this way of declaring the function, this should work anyway.


4. Challenge 4:
  - Answer: 
  C
  - Explanation: 
  const b = a means that b and a shares the same reference. Whenever b object is modified, this will also affect a as the reference of the two variable is the same. 


5. Bonus - Challenge 5:
  - Answer: 
  A 
  - Explanation: 
  first console.log is printing rabbit1. Rabbit1 is an object with Bob and 30 as values. Second console.log is printing rabbit2 which invokes the function magicHat with argument rabbit1. the content of the function updates the properties of rabbit1. Age is first changed to 10 but then changed again to 20. Name is changed to Ada.
