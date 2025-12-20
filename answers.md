# Answers to JavaScript Challenges

### 1. Challenge 1
- **Answer: b) "xyz" and "xyz"**
- **Explanation**:  
  La variable `foo` se declara con `let` en el ámbito global. Dentro de la función `bar()`, la asignación `foo = "xyz";` **no** crea una nueva variable local porque no hay `let`, `const` o `var` antes de `foo`. Por lo tanto, modifica directamente la variable global `foo`.  
  Primero se imprime `"xyz"` dentro de la función, y luego nuevamente `"xyz"` fuera. No hay error ni sombra de variable.

### 2. Challenge 2
- **Answer: c) 10 and 1**
- **Explanation**:  
  En JavaScript, los parámetros de una función se pasan **por valor**. Cuando se llama a `example(a)`, se pasa una **copia del valor** de la variable global `a` (que es `1`) al parámetro `a` de la función.  
  Dentro de la función, `a = 10;` modifica solo el parámetro local `a`, pero **no** afecta a la variable global `a`.  
  Por eso:  
  - Console log 1 → `10`  
  - Console log 2 → `1` (la variable global no cambió)

### 3. Challenge 3
- **Answer: c) "Hi there!"**
- **Explanation**:  
  Las declaraciones de funciones con la palabra clave `function` son **hoisted** (elevadas) completamente al inicio del ámbito en JavaScript. Esto significa que tanto la definición como la declaración de la función se mueven al principio del archivo/ámbito.  
  Por eso, se puede llamar a `sayHi()` **antes** de su declaración en el código, y funciona perfectamente sin errores.

### 4. Challenge 4
- **Answer: c) { num: 90 }**
- **Explanation**:  
  La variable `a` se declara con `const`, lo que significa que **no se puede reasignar** la referencia (no puedes hacer `a = algoNuevo`). Sin embargo, el **objeto al que apunta** no es inmutable.  
  Al hacer `const b = a;`, `b` apunta al **mismo objeto** en memoria que `a`.  
  Cuando modificamos `b.num = 90;`, estamos cambiando una propiedad del objeto compartido, por lo que tanto `a` como `b` verán el cambio.  
  Al imprimir `console.log(a);` se muestra `{ num: 90 }`. No hay error porque no estamos reasignando la constante, solo mutando el objeto.
