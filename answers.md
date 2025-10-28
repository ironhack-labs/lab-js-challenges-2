1. Challenge 1:
  - Answer: 
  - Explanation: 
Answer: b) "xyz" and "xyz"

Explanation:
foo is declared globally. Inside the function bar, you reassign the same global variable (not creating a new one).
So when you log inside the function, it prints "xyz", and since the global variable is changed, the second log also prints "xyz".

2. Challenge 2:
  - Answer:
  - Explanation:
Answer: c) 10 and 1

Explanation:
When calling example(a), the value 1 is passed by value to the function parameter a.
Inside the function, that local a becomes 10, but it does not affect the outer a (because it’s a primitive number).
So the first log prints 10, and the second log prints the unchanged outer a → 1.

3. Challenge 3:
  - Answer:
  - Explanation:
Answer: c) "Hi there!"

Explanation:
Function declarations are hoisted entirely to the top of their scope, meaning you can call the function before it’s defined in the code.
So when sayHi() runs, it correctly logs "Hi there!".

4. Challenge 4:
  - Answer:
  - Explanation:
  Answer: c) { num: 90 }

Explanation:
a and b both reference the same object in memory.
Even though a is a const, that only prevents reassignment — it doesn’t make the object immutable.
When you change b.num, it also changes a.num because both refer to the same object.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
Answer: c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }

Explanation:
Objects are passed by reference, so when obj.age = 10 runs, it changes the original rabbit1.
However, when you reassign obj = { name: "Ada", age: 20 }, it creates a new object, which is returned and stored in rabbit2.
Thus:

rabbit1 → modified original ({ name: "Bob", age: 10 })

rabbit2 → new object ({ name: "Ada", age: 20 })