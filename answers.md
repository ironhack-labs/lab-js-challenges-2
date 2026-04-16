1. Challenge 1:
  - Answer: b
  - Explanation: `foo` is declared in the outer scope and the `bar()` function reassigns that same variable to `"xyz"`. Because of that, both `console.log()` calls print `"xyz"`.


2. Challenge 2:
  - Answer: c
  - Explanation: The parameter `a` inside `example()` is a local copy of the primitive value `1`. Reassigning it to `10` only changes the local parameter, so the function prints `10` and the outer variable still prints `1`.


3. Challenge 3:
  - Answer: c
  - Explanation: Function declarations are hoisted in JavaScript, so `sayHi()` can be called before its definition. The output is `"Hi there!"`.


4. Challenge 4:
  - Answer: c
  - Explanation: `b` and `a` reference the same object in memory. Changing `b.num` mutates that shared object, so logging `a` shows `{ num: 90 }`.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: The function first mutates the original object through `obj.age = 10`, so `rabbit1` changes. Then `obj` is reassigned to a new object, and that new object is returned as `rabbit2`.
