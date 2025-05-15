1. Challenge 1:
  - Answer: xyz and xyz 
  - Explanation: Foo is a global variable foo initialized with "abc". When we call bar(), it modifies the global foo variable to "xyz" (there's no let or const declaration inside the function, so it accesses the outer variable) The first console.log inside the function prints "xyz". After the function execution, the global foo is now "xyz", so the second console.log also prints "xyz"

2. Challenge 2:
  - Answer: 10 and 1
  - Explanation:
  Like the answer above the gloabal variable is initalized with 1. The function takes it in as a parameter. So the function call example a prints 10 but then calling it outside the function scope calls the local variable.




3. Challenge 3:
  - Answer: "Hi there"
  - Explanation: The hoisted function allows it to access its own code.


4. Challenge 4:
  - Answer: 90 
  - Explanation: It is pointing to the reference in memeory since it is an object


5. Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: when you pass a rabbit2 into the magic hat it mutates it to { name: "Ada", age: 20 }. Otherwise it isn't mutated like bob. With rabbit2 we created a new object based on the function.
