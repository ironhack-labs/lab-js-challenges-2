1. Challenge 1: ok
  - Answer: b
  - Explanation: Foo is reassigned in bar() and then when bar() is executed, "xyz" should be printed. Then the code reads the redeclaration as "abc" again, but when the function is executed Foo keeps getting reassigned as "xyz".


2. Challenge 2: not okay 
  - Answer: c
  - Explanation: You declared 2 things, then the function gets executed first which prints 10, then the code restarts from the top and you print 1


3. Challenge 3:
  - Answer: c
  - Explanation: Because of hoisting, the function is always executed regardless of where it is declared


4. Challenge 4:
  - Answer: c
  - Explanation: copy by reference


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: Since Rabbit1 is referenced inside the magicHat() function, its content is changed to age = 10. The obj object is assigned to obj and this part doesn't have anything to do with Rabbit 1. When you print Rabbit2, the obj gets printed and you get a new name and new age = 20.
