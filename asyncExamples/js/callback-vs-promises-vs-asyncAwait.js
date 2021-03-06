
const newMovieObject = {
  title: "It",
  body: "A psycho clown..."
};

const movies = [
  {
    title: "The Lord of the Rings",
    body: "They're taking the hobbits to Isengard..."
  },
  {
    title: "Colega, ¿dónde está mi coche?",
    body: "Un finde cualquiera en el Polígono de Alcorcón antes de la pandemia"
  }
];

function getMovies() {
  setTimeout(() => {
    movies.map(movie => {
      console.log(movie.title)
    })
  }, 1000);
}

// Callback version (before ES6 2015)

function createMoviesByCallback(movie, callbackFunction){
    setTimeout(() => {
      movies.push(movie);

      callbackFunction();
    }, 2000);
}

createMoviesByCallback(newMovieObject, getMovies);

// Promise version (ES6 2015)

function createMoviesByPromise(movie) {
  let watchdog = new Promise((resolve, reject) => {
    setTimeout(() => {
      movies.push(movie);

      const error = false; // Todo va bien...

      if (!error) {
        resolve();
      }
      else {
        reject('Error: Something went wrong!')
      }
    }, 2000);
  })

  return watchdog;
}

let newMoviePromise = createMoviesByPromise(newMovieObject, getMovies);
newMoviePromise
  .then(getMovies)
  .catch((errorMessage) => console.log(errorMessage));

// Async/await version (ES8 2017)

function createMoviesByAsyncAwait(movie) {
  setTimeout(() => {
    movies.push(movie);
  }, 2000);
}

async function init() {
  await createMoviesByAsyncAwait(newMovieObject);

  getMovies();
}
init();

// ----------- How to fetch... -----------

// ... without async/await, ES6 (2015) version
function fetchCharactersPromise() {
  fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
    .then(response => response.json())
    .then(data => console.log(data));
}

// ... without async/await, ES8 (2017) version
async function fetchCharactersAsyncAwait() {
  let response = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
  let data = await response.json();
  console.log(data);
}
