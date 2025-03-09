1. Challenge 1:

- Answer: b
- Explanation: It is a let variable so the function reassigns the value "xyz"

2. Challenge 2:

- Answer:c
- Explanation: variable "a" is assigned 10 for the scope of the function before being logged the first time in the function, but is still 1 in the global scope.

3. Challenge 3:

- Answer: c
- Explanation: The function is hoisted.

4. Challenge 4:

- Answer: c
- Explanation: const b is a shallow copy, so what is changed in b is also changed in a.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: rabbit1.age was modified by the function, but obj was a totally new object that was returned by the function. rabbit2 was set to equal the returned obj from the function.