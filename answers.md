1. Challenge 1:

- Answer: b
- Explanation: foo is a global scope variable.

2. Challenge 2:

- Answer: c
- Explanation: a is the function parameter which is function scoped.

3. Challenge 3:

- Answer: c
- Explanation: functions are fully hoisted and can declared and implemented after the function call itself also.

4. Challenge 4:

- Answer:
- Explanation:

5. Bonus - Challenge 5:

- Answer: d
- Explanation: objects copies values by referencing. So, when obj.age is assigned 10, it also change rabbit1's value as it was passed as an argument which was then assigned to obj. when obj = { name: "Ada", age: 20 }; is done, completely different object is assigned to obj and now reference that object. Finally obj is assigned to rabbit2.
