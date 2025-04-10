1. Challenge 1:

- Answer: b
- Explanation: variable foo is declared and initialized in global scope. It is then reassigned inside the function. Thus, the uotput from inside the function and outside is the same.

2. Challenge 2:

- Answer: c
- Explanation: Variable a is declared and initialized in the global scope. The parameter a of the function is in the function scope. It shadows the variable a of the global scope. Thus, the assignement a in the function scope only changes the local version of a and does not effect the variable a from the global scope

3. Challenge 3:

- Answer: c
- Explanation: The function declaration is hoisted to the top of the document Thus, it is internally declared before it is invoked.

4. Challenge 4:

- Answer: c
- Explanation: The assignement const b = a creates a copy of the object a. Because the reference of object a is copied to b and not the value, all changes to b also apply to a.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: inside the function the property age of the object rabbit1 is reassigned. It changes rabbit1 in the global scope. Then rabbit1 is reassigned with a new object. This happens in the function scope and has its own reference. This new reference is returned as value of rabbit2.
