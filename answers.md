1. Challenge 1:
  - Answer: B
  - Explanation: the function bar() modifies the foo variable to "xyz" and do a 
    console.log to print foo variable, after make another console.log out
    of the function (with the variable modified to "xyz" by the function)

2. Challenge 2:
  - Answer: C
  - Explanation: the function example(a) prints 10 (the value of the parameter 
    inside the function) and the console.log prints 1 (was no modified by the function)

3. Challenge 3:
  - Answer: C
  - Explanation: the function sayHi() prints the console.log("Hi there!) even is not defined
    thanks to hoisting (during compilation the function is moved to top)


4. Challenge 4:
  - Answer: C 
  - Explanation: when working with objects modifying b.num changes a.num (both are linked to the same object)


5. Bonus - Challenge 5:
  - Answer: C
  - Explanation: rabbit1 is modified by magicHat(obj) to {name: "Bob", age: 10} and rabbit2 is assigned a new object
   {name: "Ada", age: 20} returned by the function. 