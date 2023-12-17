let scoreselement = document.getElementById('score');
let answer = 0;
let score = 0;
let time = 10;






window.onload = generateNewQuestion 
function generateNewQuestion() {
  time = 10;
  var text = generateTopic();
  var pre = document.querySelector("pre");
  pre.getAttribute("data-text", text);
  var lines = text.split("");
  pre.textContent = "";
  var i = 0;
  var interval = setInterval(function () {
    if (i < lines.length) {
      pre.textContent += lines[i];
      i++;
    } else {
      clearInterval(interval);
      startTimer()
    }
  }, 50);
};




let data = [
  {
    name: "What is h20?",
    ans: 0,
    images: [ 
      "assets/images/que1/water.png",
      "assets/images/que1/iron.png",
      "assets/images/que1/copper.png",
    ],
  },
  {
    name: "What element is a key component in the production of glass used in windows and mirrors?",
    ans: 1,
    images: [
      "assets/images/que2/calcium.png",
      "assets/images/que2/silicon.png",
      "assets/images/que2/sodium.png",
    ],
  },
  {
    name: "In rechargeable batteries found in many electronic devices, which element is commonly used in the cathode?",
    ans: 1,
    images: [
      "assets/images/que3/zinc.png",
      "assets/images/que3/lithium.png",
      "assets/images/que3/nickel.png",
    ],
  },
  {
    name: "What metal is often alloyed with copper to create brass, a widely used material in the manufacturing of musical instruments and decorative items?",
    ans: 2,
    images: [
      "assets/images/que4/nickel.png",
      "assets/images/que4/aluminium.png",
      "assets/images/que4/zinc.png",
    ],
  },
  {
    name: "In the semiconductor industry, what element is a fundamental component of silicon wafers used in electronic devices?",
    ans: 1,
    images: [
      "assets/images/que4/nickel.png",
      "assets/images/que2/silicon.png",
      "assets/images/que3/zinc.png",
    ],
  },
];

function generateTopic() {
  const randomIndex = Math.floor(Math.random() * data.length);
  let topic = data[randomIndex];

  answer = topic.ans;

  let element = `<div class="answers">
  <div>
  <P class="option">OPTION 1:</P>
  <img class="imageclass" id="0" src=${topic.images[0]} alt=""/>
  </div>
  <div>
  <p class="option" >OPTION 2:</P>
  <img  id="1"class="imageclass" src=${topic.images[1]} alt="" />
  </div>
  <div>
  <p class="option" >OPTION 3:<p>
  <img id="2" class="imageclass" src=${topic.images[2]} alt="" />
  </div>
</div>`;

  let container = document.getElementById("container");
  container.innerHTML = element;

  var imagesdiv = document.querySelectorAll(".imageclass");
  // console.log(imagesdiv);

  for (let i = 0; i < imagesdiv.length; i++) {
    imagesdiv[i].addEventListener("click", clickOnImage);
  }

  return topic.name;
}
generateTopic();


function clickOnImage(e) {
  console.log(e.target.id);

  if (answer == e.target.id) {
    console.log("correct answer");
    time=10
    score++;
    generateNewQuestion()
    scoreselement.innerText=score
  } else {
    localStorage.setItem('score',score)
    location.href='gameover.html'
    console.log("wrong answer");
    
  }
}


function startTimer(){
time = 10;
var timerInterval = setInterval(()=>{
  if(time==1){
    localStorage.setItem('score',score)
    window.location.href = "gameover.html";
  }
  time--
  document.getElementById("timer").innerHTML=time
}, 1000);
}



