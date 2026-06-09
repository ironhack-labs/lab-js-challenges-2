1. Challenge 1:
  - Answer: b) `"xyz"` and `"xyz"`
  - Explanation: The function bar() changes the value of foo to "xyz" because foo is declared outside the function so it can be accessed inside. After calling bar(), foo is now "xyz" so the second console.log also prints "xyz".


2. Challenge 2:
  - Answer: c) `10` and `1`
  - Explanation: The function has a parameter also called `a` which is like a new variable inside the function. So when we do a = 10 inside the function it only changes that local a, not the one outside. Thats why the first log shows 10 but the second still shows 1.


3. Challenge 3:
  - Answer: c) `"Hi there!"`
  - Explanation: I thought this would give an error because we call sayHi() before defining it, but it works because of hoisting. JavaScript moves function declarations to the top before running the code so it works fine.


4. Challenge 4:
  - Answer: c) `{ num: 90 }`
  - Explanation: When you do `const b = a` you are not copying the object, both variables point to the same object. So changing b.num also changes a.num. I was a bit confused at first because of const but const only stops you from reassigning the variable not from changing the object inside.


5. Bonus - Challenge 5:
  - Answer: c) `{ name: "Bob", age: 10 }` and `{ name: "Ada", age: 20 }`
  - Explanation: This one was tricky. When rabbit1 is passed to magicHat, obj points to the same object so obj.age = 10 changes rabbit1's age to 10. But then obj = { name: "Ada", age: 20 } just makes obj point to a new object, it doesn't affect rabbit1 anymore. The function returns the new object which becomes rabbit2.
