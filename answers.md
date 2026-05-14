1. Challenge 1:
  - Answer: b
  - Explanation: `foo` is a global variable. Inside the function `bar()`, the value of `foo` changes to `"xyz"`. Because of that, both console logs print `"xyz"`.



2. Challenge 2: 
  - Answer: a
  - Explanation: At first I thought changing `a` inside the function would also change the global variable. But the parameter `a` inside the function is a local variable. So only the local value changes to `10`, and the global `a` stays `1`.


3. Challenge 3:
  - Answer: c
  - Explanation:  
  - Explanation: The function works even before it is written because function declarations are hoisted in JavaScript. So `sayHi()` can be called before the function definition.


4. Challenge 4:
  - Answer: c
  - Explanation: `a` and `b` are pointing to the same object. Even if `a` is declared with `const`, the object itself can still be modified. So changing `b.num` also changes `a.num`.



5. Bonus - Challenge 5:
  - Answer: rabbit1: { name: "Bob", age: 10 }
            rabbit2: { name: "Ada", age: 20 }
  - Explanation: When the object is passed into the function, `obj.age = 10` changes the original object. After that, `obj` is reassigned to a completely new object, but that does not affect `rabbit1`. The function returns the new object, so `rabbit2` becomes the new object.
