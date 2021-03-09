const firebaseConfig = {
  apiKey: "AIzaSyDxDds9V5X4dW-JkTyUMclnZObEPP4313Y",
  authDomain: "urban-monsters.firebaseapp.com",
  databaseURL: "https://urban-monsters-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "urban-monsters",
  storageBucket: "urban-monsters.appspot.com",
  messagingSenderId: "316615256952",
  appId: "1:316615256952:web:7b3cc829cad09b9958f68d",
};

// Global variables
let next = 0;
let database;
let messagesRef;
let provider;
let auth;
let logged = false;

async function init() {
  // Acceder a la BD
  await firebase.initializeApp(firebaseConfig);

  database = firebase.database();
  messagesRef = database.ref('messages');

  // Cuando cambien los datos (o en la primera carga)
  await messagesRef.on('value', response => {

    const data = response.val();
    
    // Actualizar el valor del mensaje siguiente
    next = data.length;

    // Pintar datos
    document
      .querySelector("#messagesBox")
      .textContent = data.map(item =>
        `${item.timestamp}: ${item.text}, `);
  });

  // Mostrar la parte privada (o no)
  await firebase.auth().onAuthStateChanged(user => {
    if (user) {
      logged = true;

      document.querySelector("#writeMessagesBox").style.display = "block";
      document.querySelector("#loginBtn").style.display = "none";
      document.querySelector("#logoutBtn").style.display = "block";
    } else {
      logged = false;

      document.querySelector("#writeMessagesBox").style.display = "none";
      document.querySelector("#loginBtn").style.display = "block";
      document.querySelector("#logoutBtn").style.display = "none";
    }
  });

  document
    .querySelector("#sendMsg")
    .addEventListener("click", () => writeMessage(document.querySelector("#newMessage").value));
}

function writeMessage(message) {

  // Meter nuevo mensaje
  database.ref('messages/' + next).update({
    timestamp: Date.now(),
    text: message
  });
}

function login() {
  provider = new firebase.auth.GoogleAuthProvider();
  auth = firebase.auth();

  // Controlar el acceso a la parte privada
  auth.signInWithPopup(provider)
    .then((result) => {
      let credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = credential.accessToken;

      // The signed-in user info.
      let user = result.user;

      logged = true;

      document.querySelector("#writeMessagesBox").style.display = "block";
      document.querySelector("#loginBtn").style.display = "none";
      document.querySelector("#logoutBtn").style.display = "block";
    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...

      console.log(error.message);
    });
}

document
  .querySelector("#loginBtn")
  .addEventListener("click", login);

init();