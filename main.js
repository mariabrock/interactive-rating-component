const ratingNumbers = document.getElementById("ratings");
const submitBtn = document.getElementById("submit");
const ratingCard = document.getElementById("rating-state");
const thankYouCard = document.getElementById("thankyou-state");
const selectionText = document.getElementById("selection-text");

  console.log("this works")
  
  function onSubmit(e) {
    const ratingCard = document.getElementById("rating-state");
    const thankYouCard = document.getElementById("thankyou-state");
      if (thankYouCard.style.visibility === 'hidden' &&  ratingCard.style.visibility === 'visible') {
        thankYouCard.style.visibility = 'visible';
        ratingCard.style.visibility = 'hidden';
      } else {
        thankYouCard.style.visibility = 'hidden';
        ratingCard.style.visibility = 'visible';
      }
    }
    document.getElementById('submit').onclick = onSubmit;
    
    // function handleClick(e)
    // {
    //     var sender = (e && e.target) || (window.event && window.event.srcElement);
    //     if(sender.id == "test1")
    //     {
    //         showContent('message 1');
    //     }
    //     else if(sender.id == "test2")
    //     {
    //         showContent('message 2');
    //     }
    //     if(window.event)
    //     {
    //         window.event.returnValue = false;
    //     }
    //     return false;
    // }
    
    // function showContent(msg)
    // {
    //     document.getElementById('content').innerHTML = msg;
    // }