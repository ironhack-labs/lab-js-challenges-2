1. Challenge 1:
  - Answer: b) "xyz" and "xyz"
  - Explanation: La variable "foo" está declarada globalmente. Dentro de bar() se cambia el valor y como se cambió globalmente se vuelve a imprimir "xyz".


2. Challenge 2:
  - Answer: c) 10 and 1
  - Explanation: Dentro se imprime 10 y fuera 1 porque el valor de fuera de la función no afecta a la declaración global.


3. Challenge 3:
  - Answer:c) "Hi there!"
  - Explanation: Se puede llamar antes porque es una función declarada con function.


4. Challenge 4:
  - Answer: c) {num: 90}
  - Explanation: Aunque a está declarado con const, no se está cambiando la referencia del objeto, sino una de sus propiedades. b es una referencia al mismo objeto, por lo que al cambiar b.num, también cambia a.num.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
