function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 };
  
magicHat(rabbit1); // { name: "Ada", age: 20 }
  
console.log("rabbit1: ", rabbit1);