
const head = ([first,]) => console.log("Ejercicio head: ", first);
const tail = ([, ...args]) => {
  console.log("Ejercicio tail: ", ...args);
};

const init = (array) => {
    array.pop()
    console.log("Ejercicio init: ", ...array)
}

const last = (array) => {
    console.log("Ejercicio init: ", array.pop())
}
console.log("1. Array Operations")
head(["primero", "segundo", "tercero", "ultimo"]);
tail(["primero", "segundo", "tercero", "ultimo"]);
init(["primero", "segundo", "tercero", "ultimo"]);
last(["primero", "segundo", "tercero", "ultimo"]);

const concat = (a, b) =>{
    
    console.log("Ejercicio concat: ", ...a, ...b)
}

const concatv2 = (...args) => {
    console.log("Ejercicio concat v2: ", ...[].concat(...args))
}
console.log("2. Concat")
concat([1,2,3],[4,5,6])
concatv2([1,2,3],[4,5,6],[7,8,9])

const clone = (source) =>{
    console.log("Ejercicio clone: " , {...source})
}

const merge = (source, target) => {
    console.log("Ejercicio merge: " ,{...target, ...source})
}
console.log("3. Clone Merge")
clone({nombre: "Irene", apellidos: "Solera"})
merge({ name: "Maria", surname: "Ibañez", country: "SPA" }, { name: "Luisa", age: 31, married: true })
