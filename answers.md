1. Challenge 1:

- Answer: b
- Explanation: The output of the code will be "xyz" and "xyz" because variable foo is declared in the global scope and also it is defined in the function scope that's why it will be displayed twice - one from the calling the function and another from the global variable.

2. Challenge 2:

- Answer: c
- Explanation: The output of the code will be "10 and 1" because the variable a is printed within the function example invocation and it is equal to 10 and also, it is declared in the global scope with the value 1.

3. Challenge 3:

- Answer: c
- Explanation: The output of the code will be "Hi there!" because of the hoisting that allows the function declaration to be before it is defined in the code. JavaScript scans the code before executing it and that's why JavaScript already knows about the function.

4. Challenge 4:

- Answer: c
- Explanation: The output of the code will be { num: 90 } because the b it is not a new object, but it references the same object in memory as a. When the b was modified, a was modified also.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: The output of the code will be "rabbit1: { name: 'Bob', age: 10 } rabbit2: { name: 'Ada', age: 20 } because when rabbit1 is passed by reference to the magicHat function it also changes the age property. Then rabbit2 is passed as an argument to the function and returns a new object as is defined in the function.
