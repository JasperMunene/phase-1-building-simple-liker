// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const likeButtons = document.getElementsByClassName('like');

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].onclick = () => {
    mimicServerCall()
      .then(response => {
        console.log(response);

        if (likeButtons[i].textContent === EMPTY_HEART) {
          likeButtons[i].textContent = FULL_HEART; 
          likeButtons[i].classList.add('activated-heart'); 
        } else {
          likeButtons[i].textContent = EMPTY_HEART; 
          likeButtons[i].classList.remove('activated-heart'); 
        }
      })
      .catch(error => {
        console.error(error);
        const errorDiv = document.getElementById('modal');
        const errorMessage = document.getElementById('modal-message');

        
        errorMessage.textContent = error;
        errorDiv.classList.remove('hidden'); 

        setTimeout(() => {
          errorDiv.classList.add('hidden');
        }, 3000);
      });
  };
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
