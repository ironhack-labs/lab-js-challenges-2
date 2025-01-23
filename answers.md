1. Challenge 1:
  - Answer: b
  - Explanation: The variable foo was declared and initialized in the global scope 
  but it was reassigned in the function bar. The console.log within the function 
  will show the reassigned value of foo. As we invoke the function later, the console.log 
  of the foo will also return the reasigned value.


2. Challenge 2:
  - Answer: c
  - Explanation: The variable a is declared and initialized in the global scope as 1. On the
  function example, a is passed as parameter so it would take 1 as value when the function is 
  invoke later with the a as argument (the a of the global scope). However the function reassigns
  a to 10 within it, so 10 wouldbe the value of the console.log in the block.


3. Challenge 3:
  - Answer: c
  - Explanation: Although the function has been invoke before its definining, the console.log 
  will print the text because JS runs the code two times. So the first time finds that a function
  is being invoke and the second looks for the function itself to run it.


4. Challenge 4:
  - Answer: b <!-- wrong! answer is c -->
  - Explanation: The variable b has the same value as the variable a, however it is a different
  variable, so, when the value of the num of b is changed to 90, this only affects the variable b
  and causes no change to the variable a.

<!--   Both variables reference to the same object (there’s only one object but there are two variables 
  pointing to it). Two variables are the same only if they reference the same object/array. -->


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation:As rabbit1 is used in the function as parameter, the function first changes the value
  of the age of the object passed as parameter (so rabbit1 age becomes 10 - rabbit1 and rabbit2 point to
  te sabe object reference) but then redeclares the value of the object whole object and returns that 
  new object. (it changes the object and assigns it to the new variable raabit2 but it doesnt change the
  variable used as parameter)
