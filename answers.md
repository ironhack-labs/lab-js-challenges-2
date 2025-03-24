1. Challenge 1:
  - Answer: b) "xyz" and "xyz"
  - Explanation: La variable global foo se modifica dentro de la función bar(). La función cambia foo a "xyz", y tanto dentro de bar() como en el console.log() final, se refleja ese cambio.


2. Challenge 2:
  - Answer: b) 1 and 10
  - Explanation: La función example() toma un parámetro a y lo cambia a 10. Sin embargo, esto solo afecta la variable local a, no la global.


3. Challenge 3:
  - Answer: c) "Hi there!"
  - Explanation: La declaración de la función se mueve al principio del código. Esto permite que se llame antes de su definición, y funciona correctamente.


4. Challenge 4:
  - Answer: c( { num: 90 }
  - Explanation: Aunque a es const, sus propiedades pueden modificarse porque es un objeto. Reasignar a a un nuevo objeto causaría un error, pero modificar sus propiedades es permitido.


5. Bonus - Challenge 5:
  - Answer: c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: rabbit1 se modifica dentro de la función, pero la asignación obj = { name: "Ada", age: 20 } crea un nuevo objeto que no afecta a rabbit1.
