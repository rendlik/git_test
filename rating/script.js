const ratings ={
    sony: 4.2,
    samsung: 3.3,
    sharp: 4.7
}

const starsTotal = 5;

document.addEventListener('DOMContentLoaded',getRatings)

function getRatings(){
    for(let rating in ratings){
        const percentRating = Math.round(ratings[rating] / starsTotal * 100);
        
        document.querySelector(`.${rating} .star-inner`).style.width = `${percentRating}%`;
    }
}