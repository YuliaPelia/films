"use strict";



// function start() {
//     numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

//     while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
//               b = prompt('На скільки оціните його?');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
              
      
//     }
// }

// //rememberMyFilms();



// function detectPersonalLevel() {
//     if(personalMovieDB.count < 10) {
//         console.log("Переглянуто мало фільмів");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Ви класичний глядач");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Ви кіноман");
//     } else {
//         console.log("Помилка");
//     }
// }

// //detectPersonalLevel();



// function showMyDB(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
//     }
// }
// writeYourGenres();


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");

        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");
    
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
                  b = prompt('На скільки оціните його?');
                
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
               personalMovieDB.movies[a] = b;
              console.log('done');
            } else {
              console.log('error');
              i--;
            }
        }

    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log("Переглянуто мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ви класичний глядач");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман");
        } else {
            console.log("Помилка");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisible: function (privat) {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let genre =  prompt(`Ваш улюблений жанр під номером ${i}`);
            
            if (genre === '' || genre == null) {
                console.log('Ви ввели неправильні дані або ж не ііели їх взагалі');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    }
    
};
