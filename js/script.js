// alert("I have some Twix up my sleeve! 😂");



//INSPO REFERENCE?//

// // STEP 1: Select the button from the page
// // TODO: Use document.getElementById to select the button
let jokeBtn = document.getElementById ("btn");


// // STEP 2: Add a click event listener to the button
// // TODO: When the button is clicked, run the askQuestion function
jokeBtn.addEventListener("click", tellJoke);


// // STEP 3: Create the function that runs when the button is clicked
function tellJoke() {

}




//   // STEP 6: Generate a random number
//   // NOTE: This creates a random number between 0 and 5
  let randomNum = Math.floor(Math.random() * 6);


  // STEP 7: Create a variable to store the final answer
  let joke;


  // STEP 8: Use conditional statements to choose an answer
  // TODO: Use a switch statement
  // TODO: Match each possible random number to a different answer
  
  switch (randomNum) {
      
      case 1: 
          joke = "What does Elon Musk do on Halloween? He goes trick-or-tweeting.☺️ "
      break;
      
      case 2: 
          joke = "Why are spiders great at coding? They are natural web developers!"
      break;
      
      case 3: 
          joke = "Why did the mummy never stress about group projects? He knew how to unwind."
      break;
      
      case 4: 
          joke = "Why did the skeleton fail his art class? He only knew how to make skull-ptures."
      break;
      
      case 5: 
          joke = "What did the student say after failing their monster history exam? 'I guess I am just dead-icated to summer school'."
      break;
      
      default: 
          joke = "Your trick yields no treat. Press the button again! 🙂‍↔️"
    
      
      
  }




//   // STEP 9: Display the final answer on the page
  // TODO: Select the answerText element and display the answer variable
  document.getElementById("jokeText").textContent = joke;

  
  

// }