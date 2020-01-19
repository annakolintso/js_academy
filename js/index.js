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
    if (rating >= 10) {
        favouriteFilm.rating = 10;
    } else if (rating <= 0) {
        favouriteFilm.rating = 0;
    } else {
        favouriteFilm.rating = rating;
    }
}

let newRating = prompt(`What rating for ${favouriteFilm.name}?`);
changeRating(newRating);



///////
function getRecommendation(rating) {
    rating = Number(rating);
    switch (rating) {
        case 0:{
            alert("Awful film");
            break;
        }
        case 1:{
            alert("The worst film");
            break;
        }
        case 2:{
            alert("Very bad film");
            break;
        }
        case 3:{
            alert("Bad film");
            break;
        }
        case 4:{
            alert("Not interesting film");
            break;
        }
        case 5:{
            alert("Good film");
            break;
        }
        case 6:{
            alert("Very good film");
            break;
        }
        case 7:{
            alert("Interesting film");
            break;
        }
        case 8:{
            alert("The best film");
            break;
        }
        case 9:{
            alert("It worth watching");
            break;
        }
        case 10:{
            alert("Awesome film");
            break;
        }
        default:{
            alert("You use incorrect answer");
            break;
        }

    }
}

getRecommendation(newRating);