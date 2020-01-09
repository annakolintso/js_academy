"use strict";
let favouriteFilm = {};
favouriteFilm.name = "Maleficent";
favouriteFilm.year = 2019;
favouriteFilm.country = "USA";
favouriteFilm.actor = {
    name: "Angelina",
    surname: "Joly"
};
favouriteFilm.timeLine = "119 min";
favouriteFilm.genre = "fantasy";
favouriteFilm.isWorthWatch = true;
favouriteFilm.rating = 5;
/////////
let question = confirm(`Have you watched ${favouriteFilm.name}?`);
if (question) {
    favouriteFilm.isWorthWatch = true;
    alert("Very good!")
} else {
    favouriteFilm.isWorthWatch = false;
    alert("It worth watching");
}
/////////
function changeRating(rating) {
    rating = Number(rating);
    if (rating >= 10){
        favouriteFilm.rating = 10;
    } else if (rating <= 0){
        favouriteFilm.rating = 0;
    } else {
        favouriteFilm.rating = rating;
    }
}
let newRating = prompt(`What rating for ${favouriteFilm.name}?`);
changeRating(newRating);
////////
function getRecommendation(rating){
    rating = Number(rating);
    if (rating <= 0){
        alert("Awful film");
    } else if (rating == 1){
        alert("The worst film");
    } else if (rating == 2){
        alert("Very bad film");
    } else if (rating == 3){
        alert("Bad film");
    } else if (rating == 4){
        alert("Not interesting film");
    } else if (rating == 5){
        alert("Good film");
    } else if (rating == 6){
        alert("Very good film");
    } else if (rating == 7){
        alert("Interesting film");
    } else if (rating == 8){
        alert("The best film");
    } else if (rating == 9){
        alert("It worth watching");
    } else if (rating >= 10) {
        alert("Awesome film");
    }
}
getRecommendation(newRating);