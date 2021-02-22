
let messages = {
  okLogin: "El login está mal",
  okPassword: "El password está mal"
};

// document.getElementById("login")
//   .addEventListener("change", () => showErrorMessage(messages.okLogin) );

// document
//   .getElementById("password")
//   .addEventListener("change", function() {
//     showErrorMessage(messages.okPassword);
//   });

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

    // for (let i = 0; i < todosLosParrafos.length; i++) {
    //   todosLosParrafos[i].style.color = "crimson";
    // }

    let arrayParrafos = Array.from(todosLosParrafos);

    console.log(arrayParrafos);

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

    // document
    //   .querySelectorAll("p")
    //   .forEach((oneP) => {
    //     oneP.style.textDecoration = "underline overline line-through";
    //   });
  });


function loca(num1, num2, num3) {
  
  // Si hay SOLO UN numero
  if (num2 == 0 && num3 == 1) {
    return num1 * num1;
  }
  
  // Si hay SOLO DOS numeros
  if (num2 != 0 && num3 == 1) {
    return num1 + num2;
  }
  
  // Si hay TRES numeros
  return Math.pow(num1 - num2, num3);
}

console.log( loca(3) );
console.log( loca(3,0,1) );