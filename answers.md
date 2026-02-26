1. Challenge 1:
  - Answer: b
  - Explanation: because the function gets called first, which changes the value of foo to xyz, then prints its value, after the function execution the value of foo remains the same, then the second console log


2. Challenge 2:
  - Answer: c
  - Explanation: the function gets called with a value of one but inside the function the variable a (of the function scope) gets changed to 10 and gets printed, the global variable a never gets changed, then it 1 is printed


3. Challenge 3:
  - Answer: a
  - Explanation: because the function gets called before declaration, that's what I thought at first, but because of the javascript mecanism called hoisting, calling a function before it's defined doesn't break the code, it only works for function declarations but not for function expressions


4. Challenge 4:
  - Answer: c
  - Explanation: because the variable b holds a reference to the object in a, updating b updates a because it's actually the same object


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: because rabbit1 gets passed to the function (as a reference) and gets changed the value of age to 10, then obj (in the function scope) gets reassigned to ada and age 20, that makes rabbit2 be a completely different object than rabbit 1
