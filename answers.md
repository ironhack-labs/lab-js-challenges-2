1. Challenge 1:
  - Answer: b
  - Explanation: el scope del primer console.log y foo = "xyz" esta dentro de la misma funcion.


2. Challenge 2:
  - Answer: c
  - Explanation: El primer console.log comparte scope con a = 10 dentro de la funcion, el segundo console.log accede al valor de (a) fuera de la funcion.


3. Challenge 3:
  - Answer: c
  - Explanation: Al ser una function normal, el console.log se lee antes de que se ejecute el código.


4. Challenge 4:
  - Answer: a
  - Explanation: Las variables esta declaradas con const, ambas apuntan al mismo objeto, no se les puede asignar un valor nuevo.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: rabbit1 y rabbit2 apuntan al mismo objeto, despues la function le da un valor nuevo al obj.age = 10; el primer console.log rabbit1 = name: "Bob", age: 10. El segundo console.log imprime el obj original al que apuntaba junto a 
  rabbit1 antes de ser modificado y con el return recibe el valor de name: "Ada", age: 20.
