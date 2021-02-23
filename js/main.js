
// ---------- Arrow functions ----------

let messages = {
  okLogin: "El login está mal",
  okPassword: "El password está mal"
};

/*
document.getElementById("login")
  .addEventListener("change", () => showErrorMessage(messages.okLogin) );

document
  .getElementById("password")
  .addEventListener("change", function() {
    showErrorMessage(messages.okPassword);
  });
*/

function showErrorMessage (message) {
  if (document.getElementById("login").value == "") {
    document
      .getElementById("loginErrorMessage")
      .innerText = message;

    this.style.backgroundColor = "crimson";
  }
  else {
    document
      .getElementById("loginErrorMessage")
      .innerText = message;

    this.style.backgroundColor = "white";
  }
}
/*
setTimeout(function () {
  console.log("Hola");
}, 3000);
*/
//setTimeout(() => console.log("Hola"), 3000);

function suma2(n1, n2) {
  return n1 + n2;
}

// General
const suma2a = (n1, n2) => { return n1 + n2 }

// Two parameter example...
const suma2b = (n1, n2) => n1 + n2

// One parameter example...
function cuadrado(n) {
  return n * n;
}
/*
function cuadradoFlecha(n) {
  return n * n;
}
*/
const cuadradoFlecha = n => n * n;
//console.log(cuadradoFlecha(2));

// ---------------------------------------------

document
  .getElementById("changeBtn")
  .addEventListener("click", () => {

    // Cambiar todos los párrafos en rojo
    const todosLosParrafos = document.getElementsByTagName("p");

    /*
    for (let i = 0; i < todosLosParrafos.length; i++) {
      todosLosParrafos[i].style.color = "crimson";
    }
    */

    // Cast "HTMLCollection Object" to "Array Object"
    //let arrayParrafos = Array.from(todosLosParrafos); // ES5
    let arrayParrafos = [...todosLosParrafos]; // ES6

    arrayParrafos.forEach((oneP) => {
      oneP.style.color = "crimson";
    });
  });

  /*
  // Cast example
  let numero = Boolean("true");
  console.log(typeof numero); // boolean
  */

document
  .getElementById("changeBtn")
  .addEventListener("click", () => {

    // Subrayar todos los párrafos en rojo
    const todosLosParrafos = document.querySelectorAll("p");

    todosLosParrafos.forEach((oneP, whichP, allP) => {
      oneP.style.textDecoration = "underline overline line-through";
      
      //console.log("Soy el párrafo " + (whichP+1) + " de " + (allP.length));
      console.log(`Soy el párrafo ${whichP + 1} de ${allP.length}
y soy un "párrafo" ${ whichP % 2 != 0 ? "par" : "impar" }`);
    });

    // Functional programming version
    /*
    document
      .querySelectorAll("p")
      .forEach((oneP) => {
        oneP.style.textDecoration = "underline overline line-through";
      });
    */
  });

// ---------- Default parameters ----------

function crazy(num1, num2 = 0, num3 = 1) {

  // Si hay SOLO UN numero...
  if (num2 == 0 && num3 == 1) {
    // ... el cuadrado del número pasado
    return num1 * num1;
  }
  
  // Si hay SOLO DOS numeros...
  if (num2 != 0 && num3 == 1) {
    // ... la suma de ambos números
    return num1 + num2;
  }
  
  // Si hay TRES numeros...
  // ... elevar al tercer número la resta de los dos primeros
  return Math.pow(num1 - num2, num3);
}

// console.log( crazy(3) ); // 9
// console.log( crazy(3,0) );
// console.log( crazy(3,0,1) );

// ---------- Rest parameters ----------

function sum(...numbers) {
  return numbers.forEach((number) => { total += number });
}

//console.log(sum(1, 2, 3)); // 6
//console.log(sum(1, 2, 3, 4, 5)); // 15

// ---------- Spread operator ----------

let parts = ['shoulder', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];

//console.log(lyrics); // ['head', 'shoulder', 'knees', 'and', 'toes']

/*
let num1 = 1; 
let num2 = 2;
*/
let [num1, num2] = [1, 2];

/*
let a = 10;
let b = 20;
*/
let { a, b } = { a: 10, b: 20 };

let [a2, b2, ...rest] = [10, 20, 30, 40, 50];

//console.log(a2); // 10
//console.log(b2); // 20
//console.log(rest); // [30, 40, 50]

let { a4, b4, ...rest4 } = { b4: 10, a4: 20, d4: 30, c4: 40 };

//console.log(a4); // 10
//console.log(b4); // 20
//console.log(rest4.d4); // {d4: 30, c4: 40}

let o1 = { g: 10, h: 20 };
let o2 = {...o1, i: 30, j: 40, k: 50 };