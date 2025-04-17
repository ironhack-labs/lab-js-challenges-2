1. Challenge 1:

- Answer: B
- Explanation:
  let foo was assigned outside of the scope, we then assigned a new foo inside of the
  function globally. so it reasigned the original foo outside and inside the function returning the same xyz

2. Challenge 2:

- Answer: C
- Explanation:
  similar to the one above but passing the assigned variable into the function as an argument. This takes the outside global variable and makes it a local variable in the function so when we console.log we get the the global variable we get 1 and then when we call the function it gives us the local assigned variable of 10.

3. Challenge 3:

- Answer: C
- Explanation:
  hoisting. All functions go to the top of the scope so is read before the call of the function.

4. Challenge 4:

- Answer: C
- Explanation: both objects point to the same object since we assigned a to b, different names same object so when we updated the value, it updated the original.

5. Bonus - Challenge 5:

- Answer: Well I thought it was A even though it was C
- Explanation:
  My issue lies with the new age assignment to the object for 10 is inside the function. So on the stack I would think it reads the rabbit 1 first before calling back th efunction through rabbit two. but it makes sense since it JS reads the entire document prior to executing the stack so it reads the assignment of rabbit 2 to the function and I think since the rabbit 1 function is being passed through as the argument it is linking the two objects and actually mutating the original.
