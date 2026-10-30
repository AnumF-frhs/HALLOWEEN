alert("I have some Twix up my sleeve! 🍫");



let jokeBtn = document.getElementById ("btn");
jokeBtn.addEventListener("click", tellJoke);



function tellJoke() {

  let randomNum = Math.floor(Math.random() * 5);

  let jokes = ["What does Elon Musk do on Halloween? He goes trick-or-tweeting.🍬 ",
              "Why are spiders great at coding? They are natural web developers! 🕷️",
              "Why did the mummy never stress about group projects? He knew how to unwind. 🧻",
              "Why did the skeleton fail his art class? He only knew how to make skull-ptures. 💀",
              "What did the student say after failing their monster history exam? 'I guess I am just dead-icated to summer school'. 🧟‍♀️"];

    let joke = jokes[randomNum];

 
  document.getElementById("jokeText").textContent = joke;

}






  
  

