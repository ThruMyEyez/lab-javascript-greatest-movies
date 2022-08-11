const movies2 = [
  {
    title: "Fargo",
    year: 1996,
    director: "Joel Coen",
    duration: "1h 38min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.1,
  },
  {
    title: "The Sixth Sense",
    year: 1999,
    director: "M. Night Shyamalan",
    duration: "1h 47min",
    genre: ["Drama", "Mystery", "Thriller"],
    score: 8.1,
  },
  {
    title: "The Thing",
    year: 2004,
    director: "John Carpenter",
    duration: "1h 49min",
    genre: ["Horror", "Mystery", "Sci-Fi"],
    score: 8.2,
  },
  {
    title: "No Country for Old Men",
    year: 2007,
    director: "Ethan Coen",
    duration: "2h 2min",
    genre: ["Crime", "Drama", "Thriller"],
    score: 8.1,
  },
];
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will
// pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  console.log(moviesArray[1].director);
  let directorArr = [];
  moviesArray.map((movies) => {
    directorArr.push(movies.director);
  });
  return directorArr;
}
console.log(getAllDirectors(movies2));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
