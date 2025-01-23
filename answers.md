1. Challenge 1:
  - Answer: b
  - Explanation: Declaramos que "foo" es igual a "abc", luego dentro de una función la volvemos a declarar dando valor "xyz" y lo sacamos a la consola
  luego llamamos la función para que cambie a "foo" en el exterior también y le hacemos otro console, devolviendo otro "xyz"


2. Challenge 2:
  - Answer: c
  - Explanation: Declaramos a = 1, dentro de una función le damos el valor 10 y hacemos un console de "a" que nos da el valor de esa función "10".
  Luego llamamos a la función, pero al no declarar de nuevo la función cuando volvemos a hacer el console nos da su valor original, 1


3. Challenge 3:
  - Answer: c
  - Explanation: Llamamos a la función antes que declararla, sin embargo, el mecanismo de Hoisting que tiene JavaScript, mueve a lo alto del scope las variables y funciones antes de ejecutarse.
  Por lo que aunque la llamemos antes de escribir la función, esta se ejecutará antes de que la llamemos


4. Challenge 4:
  - Answer: c
  - Explanation: Primero declaramos el valor de "a", luego declaramos que b = a, por último cambiamos el valor de "b" y hacemos console de "b".
  Como declaraos que b = a, al cambiar "b" también cambiaos "a" por que son lo mismo. Para evitar esto, deberíamos haber añadido del valor de "a" en "b" con "spread"


5. Bonus - Challenge 5:
  - Answer:c
  - Explanation:
  Objeto:
  Creamos una función que añade valores a un objeto al que declaramos que .age = 10
  Luego lo declaramos dandole un "name" y cambiando el "age".
  Al retornalo nos devuelve los nuevos valores
  Resto:
  creamos 2 objetos, dándole un valor al primero e inicializando la fórmula anterior con este nuevo objeto.
  Al usar la consola en ambos objetos:
  - El primero nos muestra que el "age" del objeto a cambiado a 10, pero no el "name" esto es porque no le está referenciando, a diferencia del obj.age
  - El segundo nos devuelve los valores de la fórmula
