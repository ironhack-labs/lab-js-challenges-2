1. Challenge 1:

- Answer: b
- Explanation: Since "foo" is declared in a global scope, bar() will modify it and console.log the new value given in the function.

2. Challenge 2:

- Answer: a WRONG
- Explanation: Even in this case where we pass the variable through a function that receives a parameter, it will modify "let a = 1" to "10", since it is in a global scope and is "let".

3. Challenge 3:

- Answer: c
- Explanation: This works due to JavaScript "hoisting" behaviour. A function can be called before it is created.

4. Challenge 4:

- Answer: c
- Explanation: Because of the way Non-primitive data is stored in memory in JS, b will store the point in memory where a is stored. Therefore b.num will modify the original and the console.log show 90.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: Since this will be a shallow copy, the first line in the function will change the .age of rabbit1, and the returned obj will be the second line of the function.
