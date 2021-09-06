'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    ganres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('How many movies have you already watched?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you already watched?', '');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
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
    },

    writeYourGanres: function() {
        for (/* let i = 1; i <= 3; i++ */ let i = 1; i < 2; i++) {
            /* const ganre = prompt(`Your favorite ganre is ${i}`);
            personalMovieDB.ganres[i - 1] = ganre; */
            
            // ОСНОВНОЙ ВАРИАНТ
            /* let ganre = prompt(`Your favorite ganre is ${i}`);
            
            if (ganre == '' || ganre == null) {
                console.log('You wrote wrong data or left this field empty');
                i--;
            } else {
                personalMovieDB.ganres[i - 1] = ganre;
            } */

            // ONE MORE VERSION OF REALIZATION
            let ganres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase(); 
            /*страхует от ошибок ввода, переводит в нижний регистр*/

            if (ganres == '' || ganres == null) {
                console.log('You wrote wrong data or left this field empty');
                i--;
            } else {
                personalMovieDB.ganres = ganres.split(', ');

                personalMovieDB.ganres.sort();
            } 
        }

        /* При выводе данных методом "sort()" в приоретете данные в большом регистре*/

        // console.log(typeof(personalMovieDB.ganres));

        personalMovieDB.ganres.forEach((item, i) => {
            console.log(`Favorite ganre ${i + 1} is ${item}`);
        });
    },

    showMyDB: function(hidden) {
        /* if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Privat information');
        } */
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};



