1. Challenge 1:

- Answer: B
- Explanation: La variable foo está declarada en el ámbito global. Cuando se ejecuta la función bar(), modifica la foo asignándole el valor "xyz". El primer console.log(foo) dentro de bar() imprime "xyz". Luego, al invocar console.log(foo) fuera de la función, la variable global ya ha sido alterada, por lo que vuelve a imprimir "xyz".

2. Challenge 2:

- Answer: 10 and 1
- Explanation: El parámetro a de la función example crea una variable local dentro de la función que oculta (shadowing) a la variable global a. Por eso, el primer console.log(a) imprime 10. Sin embargo, la variable global a (fuera de la función) no se ve afectada por lo que ocurra con el parámetro local, por lo que el segundo console.log(a) imprime 1.

3. Challenge 3:

- Answer: "Hi there!"
- Explanation: Este código demuestra el concepto de hoisting (elevación) en JavaScript. Las declaraciones de funciones completas (function sayHi() {}) son elevadas a la parte superior de su ámbito durante la fase de compilación. Por esta razón, puedes invocar la función sayHi() antes de su declaración en el código sin que arroje ningún error.

4. Challenge 4:

- Answer: { num: 90 }
- Explanation: Los objetos en JavaScript se asignan y se pasan por referencia. Al hacer const b = a;, tanto a como b apuntan exactamente al mismo objeto en la memoria. Cuando modificas una propiedad a través de b.num = 90;, estás cambiando el valor dentro de ese objeto compartido, de modo que al imprimir a se refleja el cambio ({ num: 90 }). Nota importante: reasignar la constante a daría error, pero mutar las propiedades de un objeto declarado con const está permitido.

5. Bonus - Challenge 5:

- Answer:
- Explanation:
