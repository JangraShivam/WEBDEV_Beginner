const ratingNumber = document.querySelectorAll('.rating div')
const submit = document.querySelector('button')
const ratingSum = document.querySelector('h4')
let currentRatingElement = null;

function updateRating(event){
    if(currentRatingElement){
        currentRatingElement.classList.remove('active');
    }
    currentRatingElement = event.target;
    currentRatingElement.classList.add('active');
    console.log(currentRatingElement)
}

function showRating(){
    let ratingSelected = null;
    if(currentRatingElement === null){
        ratingSelected = `You selected 0 out of 5`
    }
    else{
        ratingSelected = `You selected ${currentRatingElement.textContent} out of 5`
    }
    ratingSum.textContent = ratingSelected
    document.querySelector('.card').classList.add('visible');
    console.log(ratingSelected)
}
ratingNumber.forEach(rating => {
    rating.addEventListener('click',updateRating)
});
submit.addEventListener('click', showRating)