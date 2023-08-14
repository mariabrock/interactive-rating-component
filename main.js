const ratingCard = document.querySelector('#rating-state')
const thankYouCard = document.querySelector('#thankyou-state')
 
 console.log("this works")

  const ratings = document.querySelectorAll('.rating');
  console.log(ratings);

  ratings.forEach (rating => {
    rating.addEventListener('click', function(e) {
      ratings.forEach(r => r.classList.remove('active'));
      e.target.classList.add('active');
      console.log(e.target.innerHTML)
    })
  });


  const submitBtn = document.querySelector('.btn-submit')
  submitBtn.addEventListener('click', function(){

    const selected = document.querySelector('.active');
    if(selected === null) {
      alert('Please select your rating.') 
    } else {
      thankYouCard.style.visibility = 'visible';
      ratingCard.remove();
    }

  });