// import { movies } from "./data.js";
// console.log(movies);
// variables for test and debug.
const newMoviesArr = [
  { year: 2000, score: 9 },
  { year: 2000, score: 1 },
  { year: 2001, score: 7 },
  { year: 1987, score: 10 },
  { year: 1987, score: 2 },
  { year: 1999, score: 7 },
];
const singleMov = [{ year: 2005, score: 8 }];
const singleMovie = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "F. Darabont",
    duration: "2h 22min",
    genre: ["Crime"],
    score: 9.3,
  },
];
const movies2 = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
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

//!##Remember to try to make pure functions!
//* Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will
// pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//! Bonus 1: clean duplicate directors in Array and return cleaned Arr =>
const unifyArr = (arr) => {
  const unified = arr.filter((el, i) => {
    return arr.indexOf(el) === i;
  });
  return unified;
};

function getAllDirectors(moviesArray) {
  const directorArr = [];
  moviesArray.map((movies) => {
    directorArr.push(movies.director);
  });
  return directorArr;
}
const allDirectors = unifyArr(getAllDirectors(movies2));

//* Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergDramaMovies = 0;
  if (!moviesArray.length) return 0;
  for (const idx in moviesArray) {
    if (
      moviesArray[idx].director.includes("Steven Spielberg") &&
      moviesArray[idx].genre.includes("Drama")
    ) {
      spielbergDramaMovies += 1;
    }
  }
  return spielbergDramaMovies;
}
//console.log(howManyMovies([]));
//console.log(howManyMovies(cine));
//console.log(howManyMovies(movies2));

//* Iteration 3: All scores average - Get the average of all scores with 2 decimals
//*###*//
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let entrysAmount = 0,
    sumScores = 0;
  for (const i in moviesArray) {
    if (!moviesArray[i].score) {
      entrysAmount++;
    } else {
      sumScores += moviesArray[i].score;
      entrysAmount++;
    }
  }
  const result = sumScores / entrysAmount;
  return Math.round(result * 100) / 100;
}
//console.log(scoresAverage(cine));
//console.log(scoresAverage([{ score: 6 }, { score: "" }, {}]));
//*###*//

//* Iteration 4: Drama movies - Get the average of Drama Movies
//*###*//
function dramaMoviesScore(moviesArray) {
  let sumOfDramas = 0,
    entrysAmount = 0;
  for (const idx in moviesArray) {
    if (moviesArray[idx].genre.includes("Drama")) {
      sumOfDramas += moviesArray[idx].score;
      entrysAmount += 1;
    }
  }
  if (!sumOfDramas) return 0;
  const result = Math.round((sumOfDramas / entrysAmount) * 100) / 100;
  return result;
}
//console.log(dramaMoviesScore(cine));

//* Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//*###*// // 📖 This was a nice one! 💪
function orderByYear(moviesArray) {
  /*let result = [...moviesArray].sort( 
    (a, b) => a.year - b.year || b.title - a.title);*/
  const sorted = [...moviesArray].sort((a, b) => {
    return a.year < b.year
      ? -1
      : a.year > b.year
      ? 1
      : a.title < b.title
      ? -1
      : 1;
  });
  return sorted;
}

//console.log(orderByYear(cine));
//console.log(
//  orderByYear([
//    { title: "blaa", year: 1982 },
//    { title: "abc", year: 2002 },
//    { title: "bac", year: 1982 },
//    { title: "aab", year: 1982 },
//  ])
//);
//*###*//

//* Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//*###*//
function orderAlphabetically(moviesArray) {
  //  const minAmount = 20,
  const sortedMovieTitles = moviesArray
    .map((el) => {
      return el.title;
    })
    .sort();
  return sortedMovieTitles.slice(0, 20);
}
//*###*//

//TODO BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const result = moviesArray.map((el) => {
    return;
  });

  return result;
}
console.log(singleMovie);

//*✅ BONUS 🎯 🧐  - Iteration 8: Best yearly score average - Best yearly score average
/*
  //TODO get scores of each year > make a arr for each year || Perhaps with filter method.
  //* looks like i need to get an array for eacht film by year > than get the avg score for that year
  //TODO compare scores of each year || year with highest score wins
  //TODO pick the older Year if there is a tie between years.
 */

function bestYearAvg(movs) {
  if (!movs.length) return null;
  if (movs.length === 1)
    return `The best year was ${movs[0].year} with an average score of ${movs[0].score}`;
  const groupByYear = (objArr, key) => {
    return objArr
      .reduce((acc, cur) => {
        console.log(acc);
        console.log(cur[key]);
        acc[cur[key]] = acc[cur[key]] || []; // if the key is new, initiate its value to an array, otherwise keep its own array value
        acc[cur[key]].push(cur);
        console.log(acc);
        return acc;
      }, [])
      .filter((arrElem) => arrElem);
  };

  const avgScoreOnYear = groupByYear(movs, "year").map(function (el, i, arr) {
    const extractYear = el.map((obj) => obj.year),
      filterYear = extractYear.filter((year, i) => {
        return extractYear.indexOf(year) === i;
      }); //.filter((year, i) => { console.log(extractYear) })
    console.log(filterYear[0]);
    console.log(extractYear);
    const avgScorePerYear =
      el.reduce((acc, curV) => acc + curV.score, 0) / el.length;

    return { year: filterYear[0], avgScore: avgScorePerYear };
  });

  // console.log(avgScoreOnYear);

  console.log(correctAnswer(avgScoreOnYear));
  return correctAnswer(avgScoreOnYear);
  function correctAnswer(arrOfScores) {
    arrOfScores.sort((a, b) => b.avgScore - a.avgScore);

    if (arrOfScores[0].year < arrOfScores[1].year) {
      return `The best year was ${arrOfScores[0].year} with an average score of ${arrOfScores[0].avgScore}`;
    } else {
      return `The best year was ${arrOfScores[1].year} with an average score of ${arrOfScores[1].avgScore}`;
    }
  }
}
//console.log(bestYearAvg([{ year: 2007, score: 5}]))

console.log(bestYearAvg([]));
console.log(bestYearAvg(newMoviesArr));
console.log(bestYearAvg(singleMov));

//let sor = map.map(function (el, i) {
//  const avgScorePerYear =
//    el.reduce((acc, curV) => acc + curV.score, 0) / el.length;
//  console.log(avgScorePerYear);
//  console.log(i);
//
//  // return avgScorePerYear;
//  return { year: i, avgScore: avgScorePerYear };
//});
//console.log(sor);

//const totalReviews = product.reviews.reduce(function (acc, review) {
//  return acc + review.rate;
//}, 0); // starts acc to 0
//const averageRate = totalReviews / product.reviews.length;
//! for later re -use
//result.reduce(function (em, e) {
//  em.set(e.id, (em.get(e.id) || []).concat([e]));
//  return em;
//}, new Map());
//console.log(result);
//###########
//*const groupByYear = (objArr, key) => {
//*  return objArr.reduce((acc, cur) => {
//*    console.log(acc);
//*    console.log(cur[key]);
//*    acc[cur[key]] = acc[cur[key]] || [];
//*    acc[cur[key]].push(cur);
//*    console.log(acc);
//*    return acc;
//*  }, []).filter((arrElem) => arrElem);
//*};
//! END OF ITERATION 8
