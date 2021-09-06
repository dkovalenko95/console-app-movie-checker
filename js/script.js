'use strict';

const numberOfFilms = +prompt('How many movies have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


/* const a = prompt('Name one of the last movies you watched', ''),
      b = prompt('How did you rate the movie?', ''),
      c = prompt('Name one of the last movies you watched', ''),
      d = prompt('How did you rate the movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */
/* put data in object */
/* console.log(personalMovieDB); */


// QUESTION & ANSWER TASK
for (let i = 0; i < 1; i++ ) {
    const numberOfFilms = +prompt('How many movies have you already watched?', '');
        console.log(numberOfFilms);
    if (numberOfFilms == '' || numberOfFilms == null) {
        alert('Please, answer the question by using number');
        i--;

    } else if (personalMovieDB.count < 10) {
        alert('You watched quite a few movies');
        console.log('You watched quite a few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are a classic viewer');
        console.log('You are a classic viewer');
    } else if (personalMovieDB.count >= 30) {
        alert('You are a real movie fan');
        console.log('You are a real movie fan');
        
    } else {
        alert('You have not answer the question!');
        console.log('You have not answer the question!');
    }
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Name one of the last movies you watched', ''),
          b = prompt('How did you rate the movie?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        alert('Done!');
        console.log('Done');
    } else {
        alert('Error!');
        console.log('Error!!!');
        i--;
    }    
}


// SAME FEATURE WITH 'WHILE'&'DO' LOOPS INSTEAD OF 'FOR'
/* let i = 0;
while (i < 2) {
    const a = prompt('Name one of the last movies you watched', ''),
          b = prompt('How did you rate the movie?', '');
    i++;
    if  (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        alert('Done');
        console.log('Done');
    } else {
        alert('Error!');
        console.log('Error!');
        i--;
    }
} */


/* let i = 0;
do {
    const a = prompt('Name one of the last movies you watched', ''),
          b = prompt('How did you rate the movie?', '');
    i++;
    if  (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        alert('Done');
        console.log('Done');
    } else {
        alert('Error!');
        console.log('Error!');
        i--;
    }
}
while (i < 2); */

console.log(personalMovieDB);