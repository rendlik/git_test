const ratings ={
    sony: 4.2,
    samsung: 3.3,
    sharp: 4.7
}

const starsTotal = 5;

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

let product;

productSelect.addEventListener('change',(e) => {
    product = e.target.value;
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
})

ratingControl.addEventListener('change ',(e) => {
    const rating = e.target.value;

    if(rating>5){
        alert('Enter number between 0 - 5');
        return;
    }

    ratings[product] = rating;
    getRatings();
})


document.addEventListener('DOMContentLoaded',getRatings)

function getRatings(){
    for(let rating in ratings){
        const percentRating = Math.round(ratings[rating] / starsTotal * 100);
        
        document.querySelector(`.${rating} .star-inner`).style.width = `${percentRating}%`;
    }
}