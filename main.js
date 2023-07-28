const ratingNumbers = document.getElementById("ratings");
const submitBtn = document.getElementById("submit");
const ratingCard = document.getElementById("rating-state");
const thankYouCard = document.getElementById("thankyou-state");
const selectionText = document.getElementById("selection-text");

  console.log("this works")
  
  const onSubmit = (e) => {
    if(e.target.classList.contains('btn-submit')) {
      if (thankYouCard.style.display === 'none' &&  ratingCard.style.display === 'block') {
        thankYouCard.style.visibility = 'visible';
        ratingCard.style.visibility = 'hidden';
      } else {
        thankYouCard.style.visibility = 'hidden';
        ratingCard.style.visibility = 'visible';
      }
    }
  }