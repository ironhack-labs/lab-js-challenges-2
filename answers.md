1. Challenge 1:

- Answer: a
- Explanation: The output of the code will be "xyz" and "xyz" two times in the console because foo variable is in the parent scope and the value is being reassigning in the in the bar() method. Also, it will displayed two times as it is console.log in the function one time and after the function is invoked, there is also a console.log so two times, and the final value will of foo variable be to "xyz"

2. Challenge 2:

- Answer: c
- Explanation: The output of the code will be 10 and 1. The value of variable a in the outside of function scope is 1 but inside function scope it is being change to 10. So, for the console.log inside the function it will be 10 but after function is run the other console.log will show the value of a is 1 as the let a = 1 is the value of outside the example() method's scope.

3. Challenge 3:

- Answer: c
- Explanation: The output of this code will be "Hi there!" as it is the main concept of Hoisting in the JS. So in this case function declarations is moved to the top of its scope before code execution.

4. Challenge 4:

- Answer: c
- Explanation: The output of this code will be { num: 90 } As, the a is an object and so the non-primitive type data and in this type of data is stored as refrence that is why we can re assign it variable b even the data declration type is const but still we can reassign this type of data to new variable and next we are assigning b.num to 90 and as a result it will change the orignal array as well as it is a shadow copy of the orignal array.

5. Bonus - Challenge 5:

- Answer: a
- Explanation: The output of this code will be { name: "Bob", age: 30 } and { name: "Ada", age: 20 } as rabbit one is outside the function and we are passing as argument rabbit1 and as ob.age inside the function scope I don't think so it will changed the age value in rabbit 1. For Rabbit 2 it will be surely changed as it inside the function and then returning it.
