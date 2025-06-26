1. Challenge 1:
  - Answer: xyz, xyz
  - Explanation: The first foo variable is declared in the global scope, thus is also available in the children scope of the function bar. It is assigned a new value inside the bar function and that new value is logged when the function is invoked. Then, the console.log of the variable also gives the xyz value because it has been previously reassinged inside the function.
  Apparently, this function does not return undefined, even though it is missing its return statement, because it is modifying the global variable foo, and it does not "need" to return smoe value.


2. Challenge 2:
  - Answer: Undefined
  - Explanation: Missing return statement. 
  However, my assumption was incorrect because there is shadowing of the global variable a by the function-scope variable a. When the function is invoked, it returns a with the value 10 from the function, and then the final console.log returns the value of the global a variable, which is still 1.


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation: The function when invoked will display the message from its console.log. It is invoked before it is defined, however this is allowed and it works.


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: Variable a has a value of object type with the object property num: 42. When a is re-assigned to variable, what is reassigned is not actually the value of variable a, but its reference. This is because objects in JavaScript are stored as references, and only their content i.e. the properties of each object, are stored directly. As such, variable b still refers to variable a, and any operation on b affects a. When we add a new property to b, that new property is also added to a, which is why we get num:90 when we log a.


5. Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: rabbit1 has initial name value Bob and initial age value 30. When we invoke the function and use it as an argument, its age object property value turns to 10 because the function defines it. Then when rabbit2 is logged, we see that it has the value of obj from the function.
