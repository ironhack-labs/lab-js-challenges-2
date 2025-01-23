1. Challenge 1:
  - Answer: b
  - Explanation: Porque la variable "foo" es de tipo "let" y esta creada fuera de la función "bar" es una variable global. La función "bar" modifica la variable "foo" eh imprime su valor. Dentro de la función no crea una nueva variable "foo" solo la modifica la ya creada.


2. Challenge 2:
  - Answer: c
  - Explanation: Porque la variable "a" dentro de la función es un argumento de la función "example" por lo que solo funciona como variable local dentro de esa función a pesar de llamarse igual a la variable global "a" de tipo "let" creada anteriormente.


3. Challenge 3:
  - Answer: c
  - Explanation: Porque JavaScript a la función "sayHi" eleva al principio de su bloque de ejecución, y a pesar que se llame a "sayHi()" antes de la declaración en el código, la función ya ha sido registrada en el entorno de ejecución, por lo que se puede invocar sin problemas.


4. Challenge 4:
  - Answer: c
  - Explanation: Esto sucede porque solo se esta asignado la misma entrada de memoria para del objeto "a" y "b", es decir "a" y "b" apuntan al mismo objeto en memoria


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: Porque al pasar "rabbit1" a la función "magicHat", tanto "obj" como "rabbit1" hacen referencia al mismo objeto en memoria. Al modificar la propiedad "age" de "obj" (que también está apuntando al mismo objeto que "rabbit1"). Esto cambia "rabbit1.age" de 30 a 10, porque "obj" y "rabbit1" son el mismo objeto. "obj" se reasigna a un nuevo objeto { name: "Ada", age: 20 }, esta reasignación solo afecta a "obj" dentro de la función por lo que la función devuelve un nuevo objeto
