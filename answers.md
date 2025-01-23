1. Challenge 1:
  - Answer: b
  - Explanation: the "let" defined in the beginning is reassigned to xyz and also the function will output xyz. therefore its xyz xyz.


2. Challenge 2:
  - Answer: c
  - Explanation: this example is different as the global variable is passed as an argument to the function, and in it, the "a" is shadowing the global let = a. It does not affect the global variable. so inside the function the log is that of 10, but outside "a" remains 1. 


3. Challenge 3:
  - Answer: c
  - Explanation:  the function declared is hoisted to the top in js, therefore the function is available form the start and will print "hi there".


4. Challenge 4:
  - Answer: c
  - Explanation: when stating that "b = a", both will point to the same spot in memory. So the changes will affect the same object.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: 
  In the function, inside the "age" property of "obj" that points to "rabbit1", the value is set to 10 istead of 30. 
  Later, we assign a new object to obj ("Ada").
  Outside the function, "rabbit2" needs to return the vale of the function ("ada..."), and rabbit1 remains as was. Rabbit1 is not affected because the obj was reassigned to the other object. 