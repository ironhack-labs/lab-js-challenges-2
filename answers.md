1. Challenge 1:

- Answer: b
- Explanation: La variable foo se declara globalmente como "abc" y se reasigna a "xyz" dentro de la función bar(), modificando la variable global. Ambas impresiones mostrarán "xyz".

2. Challenge 2:

- Answer: c
- Explanation: La función example(a) modifica una copia local de a, sin afectar la variable global. Por eso, imprime 10 dentro de la función y 1 afuera.

3. Challenge 3:

- Answer: c
- Explanation: La función sayHi, al ser una function declaration, es hoisted, permitiendo su ejecución antes de su declaración. Por eso, muestra "Hi there!" sin errores.

4. Challenge 4:

- Answer: c
- Explanation: a y b apuntan al mismo objeto. Al modificar b.num, también cambia a.num, por lo que console.log(a) mostrará { num: 90 }.

5. Bonus - Challenge 5:

- Answer:
- Explanation:
