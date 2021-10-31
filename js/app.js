// UI variables
const form = document.querySelector("#input-form");
const inputGuess = document.querySelector("#my-guess");

const btnGuess = document.querySelector("#guess-value");
//  to set guess times
let guesstimes = 0; let tries;
form.addEventListener("submit", behave)
 
function behave(e){
  // console.log("hello, world");
  // limit the input value[1,10]
  // create my message element
  const message = document.createElement("h5");
  document.querySelector(".container").appendChild(message);
  
  if(inputGuess.value>=1 && inputGuess.value <=10){
    guesstimes += 1;
    tries = 7-guesstimes;


    if(inputGuess.value == 7){
      
            message.innerText =`The number is correct, You've guessed the correct answer in ${guesstimes} tries,Would you like to play again!`;
      
            message.style.cssText = `color:#72da44;
            background:	#eeeeee;
            padding:.5rem;
            font-weight: 500;
           `;
           inputGuess.classList.add
           ('right');
   
      btnGuess.value= "Play Again";
      form.addEventListener("submit", function(e){
        location.reload()
      })
      
    } else{
      
      if(tries <= 0){
        message.innerText ="you've finished your tries, would you like to play again";
        
        
        message.style.cssText =   `color:#f6546a;
        background:	#fbe9c3;
        padding:.5rem;
        font-weight: 500;
       `;
       inputGuess.classList.add("wrong");
        
        btnGuess.value= "Play Again";
        form.addEventListener("submit", function(e){
          location.reload()
        })
        
      }else{
        inputGuess.classList.add("wrong");
        message.innerText =`${inputGuess.value} is wrong!, pleas try again, You have ${tries} tries`;
        message.style.cssText =   `color:#f6546a;
        background:	#fbe9c3;
        padding:.5rem;
        font-weight: 500;
       `;
      }}
    }else{
      message.innerText =`The number ${inputGuess.value} is not between 1 and 10, please Guess a number between 1 and 10`;
      message.style.cssText =   `color:#f6546a;
      background:	#fbe9c3;
      padding:.5rem;
      font-weight: 500;
     `;
     inputGuess.classList.add("wrong");
  }
  

  setTimeout(function(e){
    message.style.display = "none";
    inputGuess.classList.remove("wrong");
    inputGuess.classList.remove("right");
  }, 2000)


  e.preventDefault();
}