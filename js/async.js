"use strict";



// setTimeout(() => {
//   console.log("Hola 1");
// }, Math.random() * 100);

// setTimeout(() => {
//   console.log("Hola 2");
// }, Math.random() * 100);


let helloCounter = 0;

function sayHelloByConsole() {
  helloCounter++;

  console.log(`Hola${helloCounter}`);
}

function sayHelloByScreen() {
  helloCounter++;

  document.querySelector("body").textContent = `Hola${helloCounter}`;
}




const myPromise = new Promise((resolveFunction, rejectFunction) => {
  
  // Acción asíncrona
  const now = Math.random() * 100;

  setTimeout(() => {
    resolveFunction();
  }, now);
});

/*myPromise
  .then(sayHelloByScreen)
  .then(sayHelloByConsole)
  .catch(() => console.log("Error mmmmás bonito"));
console.log("Mu rápido!");
*/




function fetchToFuturama(character) {
  if(character !== "") {
    fetch(`https://futuramaapi.herokuapp.com/api/characters/${character}`)
      .then(response => response.json())
      .then(data => {
        data.map(quote =>
          document.querySelector('body').innerHTML +=
          `<p>${quote.quote}</p><img src="${quote.image}"><br />` );
      });
  }
}

document.querySelector('#choose').addEventListener("change", function() {
  fetchToFuturama(this.value);
});