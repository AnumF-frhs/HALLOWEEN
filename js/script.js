// alert("I have some Twix up my sleeve! 😂");



//INSPO REFERENCE?//

// // STEP 1: Select the button from the page
// // TODO: Use document.getElementById to select the button
let jokeBtn = document.getElementById ("askBtn");


// // STEP 2: Add a click event listener to the button
// // TODO: When the button is clicked, run the askQuestion function
// askButton.addEventListener("click", askQuestion);


// // STEP 3: Create the function that runs when the button is clicked
// function askQuestion() {

//   // STEP 4: Get the user's question from the input box
//   // TODO: Select the input and store its value in a variable
//   let question = document.getElementById ("questionInput").value;
// //   console.log(question);


//   // STEP 5: Check if the question is empty
//   // TODO: Write an if statement that checks if question is an empty string
//   if ( question === "") {

//     // TODO: Display an error message in the answerText element
//     document.getElementById("answerText").textContent = "Error; You must write a question.😢";

//     // NOTE: This stops the function so no other code runs
//     return;
//   }


//   // STEP 6: Generate a random number
//   // NOTE: This creates a random number between 0 and 5
//   let randomNum = Math.floor(Math.random() * 6);


//   // STEP 7: Create a variable to store the final answer
//   let answer;


//   // STEP 8: Use conditional statements to choose an answer
//   // TODO: Use a switch statement
//   // TODO: Match each possible random number to a different answer
  
//   switch (randomNum) {
      
//       case 1: 
//           answer = "Heck ya!☺️ "
//       break;
      
//       case 2: 
//           answer = "ABSolutely Not!☹️"
//       break;
      
//       case 3: 
//           answer = "Probably?🤔"
//       break;
      
//       case 4: 
//           answer = "I don't know, to be honest...🙄"
//       break;
      
//       case 5: 
//           answer = "Most likely not...😗"
//       break;
      
//       default: 
//           answer = "Oops! An error has occured. Ask again.🙂‍↔️"
    
      
      
//   }




//   // STEP 9: Display the final answer on the page
//   // TODO: Select the answerText element and display the answer variable
//   document.getElementById("answerText").textContent = answer;

  
  

// }