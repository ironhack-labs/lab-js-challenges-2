1. Challenge 1:
  - Answer: b
  - Explanation: We call the bar function, which assigns "xyz" to the foo variable and then prints foo to the console. 

2. Challenge 2:
  - Answer: c
  - Explanation: The function print "10" because it assigns 10 to the parameter "a" inside the function. This does not modify the global variable a, so when we print a outside the function, it still holds its original value (1).


3. Challenge 3:
  - Answer: c
  - Explanation: The function is defined before execution but the order of the function call and its definition does not matter (hoisting)



4. Challenge 4:
  - Answer: c
  - Explanation: Because the variable b stores a reference to the object a. Modifying b.num also modifies a.num.



5. Bonus - Challenge 5:
  - Answer: c
  - Explanation:  When passing an object as a function parameter, the function can modify the object's properties directly. In this case, obj.age = 10 changes the age property of rabbit1. However, when obj is reassigned inside the function (obj = { name: "Ada", age: 20 }), this creates a new object instead of modifying rabbit1