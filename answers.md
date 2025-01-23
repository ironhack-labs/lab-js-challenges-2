1. Challenge 1:

- Answer: b
- Explanation: the foo variable is directly reassigned from the outer scope

2. Challenge 2:

- Answer: c
- Explanation: inside the function the parameter a is a local variable that will shadow the global a, so any modifications will not affect the global, after the function call the global a remains unchanged because the function only modified its local a, not the global variable.

3. Challenge 3:

- Answer: c
- Explanation: declaring a function before initializing it is accepted

4. Challenge 4:

- Answer:c
- Explanation: modifying b.num will also affect a.num since b=a

5. Bonus - Challenge 5:

- Answer:c
- Explanation:
