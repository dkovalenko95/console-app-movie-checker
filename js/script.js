'use strict';
// USING BASIC FUNCTIONS
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you already watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you already watched?', '');
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
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


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Privat information');
    }
}
showMyDB();
// one more variation of realization
function showMyDB2(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
// showMyDB2(personalMovieDB.privat);


function writeYourGanres() {
    for (let i = 1; i <= 3; i++) {
        const ganre = prompt(`Your favorite ganre is ${i}`);
        personalMovieDB.genres[i - 1] = ganre;

        // second shorter variation
        // personalMovieDB.genres[i - 1] = prompt(`Your favorite ganre is ${i}`);
    }
}
writeYourGanres();
