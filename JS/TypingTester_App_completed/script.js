// let timer=5000;
// minutes = parseInt(timer / 60, 10);
// seconds = parseInt(timer % 60, 10);

let topics = [
  "Thinking is the hardest work there is, which is probably the reason so few engage in it. ~ Henry Ford, American industrialist and founder of Ford Motor Co.",
  "A dream does not become reality through magic; it takes sweat, determination, and hard work. ~ Colin Powell, former U.S. Defense Secretary",
  "I’m a great believer in luck, and I find the harder I work, the more I have of it. ~ Thomas Jefferson, former President of the United States",
  "No matter how hard you work, someone else is working harder. ~ Elon Musk, entrepreneur",
  "Hard work beats talent if talent doesn’t work hard. ~ Tim Notke, basketball coach",
  "Satisfaction lies in the effort, not in the attainment. ~ Mahatma Gandhi, Indian activist",
  "We think, mistakenly, that success is the result of the amount of time we put in at work, instead of the quality of time we put in. ~ Ariana Huffington, businesswoman and author",
  "Men die of boredom, psychological conflict and disease. They do not die of hard work. ~ David Ogilvy, advertising business tycoon",
  "The only place where success comes before work is in the dictionary. ~ Vidal Sassoon, hairdressing business tycoon",
];

// --------------------------------<References>
let topic_ref = document.querySelector(".text-section-div > p");
let seconds = document.querySelector("#seconds");
let minute = document.querySelector("#minutes");
let input_ref = document.querySelector("#text-area");
// --------------------------------</References>

//Generating Random Index for topic
let top_index = Math.floor(Math.random() * topics.length - 1) + 0;
let heading_t = topics[top_index];

// Setting Dynamic Heading'
topic_ref.innerText = heading_t;

// Timer
function startTimer() {
  let timer = 60 * 2;
  let minutes;
  let second;

  let time_interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    second = parseInt(timer % 60, 10);
    console.log("secods:", second);
    // minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;
    minute.innerText = minutes;
    seconds.innerText = second;

    if (--timer < 0) {
      clearInterval(time_interval);
    }
  }, 1000);
}

// Starting timer on start typing
let timmer_running = true;
input_ref.addEventListener("keyup", function (event) {
  if (timmer_running) {
    startTimer();
    timmer_running = false;
  }
  let input_typed = event.target.value;
  if (input_typed == heading_t.substring(0, input_typed.length)) {
    input_ref.classList.remove("border-danger");
    input_ref.classList.add("border-success");
  } else {
    input_ref.classList.remove("border-success");
    input_ref.classList.add("border-danger");
  }
});

// minute.innerText=02;
// seconds.innerText=58;

// let congSection = document.querySelector(".cong-section");
// let clickme = document.querySelector(".clickMe");

// clickme.addEventListener("click", (event) => {
//   event.target.style.display = "none";
//   congSection.style.display = "block";
// });
