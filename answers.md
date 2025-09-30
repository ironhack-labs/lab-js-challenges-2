1. Challenge 1:
  - Answer: b "xyz" and "xyz"
  - Explanation: foo starts as "abc". inside the function, we change it to "xyz".

    we didnt create a new foo inside the function, the outer foo gets updated too


2. Challenge 2:
  - Answer:c
  - Explanation: the function has its own a because its a parameter and Changing it inside the function doesnt affect the a outside


3. Challenge 3:
  - Answer:c
  - Explanation: function declarations are hoisted which means you can use them before they appear in your code


4. Challenge 4:
  - Answer:c
  - Explanation: a is a constant but that only means you cant reassign a to something else

   the object itself can change. b points to the same object as a so when we do b.num = 90, it changes a too


5. Bonus - Challenge 5:
  - Answer:c
  - Explanation: