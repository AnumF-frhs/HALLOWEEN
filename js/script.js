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

//background animation! from google.

const canvas = document.getElementById('halloween-bg');
const ctx = canvas.getContext('2d');

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const items = [];
const itemTypes = ['👻', '🎃', '🦇', '•'];

window.addEventListener('resize', () => {
  width = (canvas.width = window.innerWidth);
  height = (canvas.height = window.innerHeight);
});

class SpookyElement {
  constructor() {
    this.reset();
    this.y = Math.random() * height; // Distribute across screen initially
  }

  reset() {
    this.x = Math.random() * width;
    this.y = height + Math.random() * 100; // Start below screen
    this.type = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    this.size = this.type === '•' ? Math.random() * 4 + 1 : Math.random() * 20 + 16;
    this.speedY = Math.random() * 1 + 0.5; // Moving upward
    this.speedX = Math.sin(Math.random() * 2) * 0.5; // Slight drift
    this.opacity = Math.random() * 0.5 + 0.1;
    this.wobbleSpeed = Math.random() * 0.02 + 0.01;
    this.wobbleCount = Math.random() * 100;
  }

  update() {
    this.y -= this.speedY;
    this.wobbleCount += this.wobbleSpeed;
    this.x += Math.sin(this.wobbleCount) * 0.8; // Floating sway

    // Reset if it goes off top or sides
    if (this.y < -50 || this.x < -50 || this.x > width + 50) {
      this.reset();
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    if (this.type === '•') {
      ctx.fillStyle = '#a300ff';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.font = `${this.size}px Arial`;
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(this.type, this.x, this.y);
    }
    ctx.restore();
  }
}

// Populate background density based on screen width
const count = Math.min(60, Math.floor(width / 20));
for (let i = 0; i < count; i++) {
  items.push(new SpookyElement());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  
  items.forEach((item) => {
    item.update();
    item.draw();
  });

  requestAnimationFrame(animate);
}

animate();







  
  

