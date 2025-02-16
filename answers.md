1. Challenge 1:
  - Answer: b
  - Explanation: The output is "xyz" twice because "bar()" changes the global foo.


2. Challenge 2:
  - Answer: c
  - Explanation: Because the global "a" and the function's "a" are different, changing "a" inside the function does not affect the global "a".


3. Challenge 3:
  - Answer: c
  - Explanation: The function is hoisted, so it works even if called before.


4. Challenge 4:
  - Answer: c
  - Explanation: Since "a" and "b" reference the same object, modifying "b.num" also changes "a.num".


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: "rabbit1" is modified inside the function, but the new object assigned to "obj" does not affect it, so "rabbit1" remains { name: "Bob", age: 30 } and "rabbit2" is { name: "Ada", age: 20 }.
