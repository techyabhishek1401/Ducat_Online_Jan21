let topics = [
  "Thinking is the hardest work there is, which is probably the reason so few engage in it.Henry Ford, American industrialist and founder of Ford Motor Co.",
  "A dream does not become reality through magic; it takes sweat, determination, and hard work.  Colin Powell, former U.S. Defense Secretary",
  "I’m a great believer in luck, and I find the harder I work, the more I have of it.  Thomas Jefferson, former President of the United States",
  "No matter how hard you work, someone else is working harder.  Elon Musk, entrepreneur",
  "Hard work beats talent if talent doesn’t work hard.  Tim Notke, basketball coach",
  "Satisfaction lies in the effort, not in the attainment.  Mahatma Gandhi, Indian activist",
  "We think, mistakenly, that success is the result of the amount of time we put in at work, instead of the quality of time we put in.  Ariana Huffington, businesswoman and author",
  "Men die of boredom, psychological conflict and disease. They do not die of hard work.  David Ogilvy, advertising business tycoon",
  "The only place where success comes before work is in the dictionary.  Vidal Sassoon, hairdressing business tycoon",
];

// taking the references

let topic_ref = document.querySelector(".text-section-div > p");
let input_ref = document.querySelector("#text-area");
let min_ref = document.querySelector("#minutes");
let sec_ref = document.querySelector("#seconds");

// setting the dynamic topic
let random_index = Math.floor(Math.random() * 8) + 0;
let new_topic = topics[random_index];
topic_ref.innerText = new_topic;

// Timmer Function
function startTimer() {
  var timer = 10, //120
    minutes,
    seconds;
  let interval = setInterval(function () {
    minutes = parseInt(timer / 60);
    seconds = parseInt(timer % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes; //minutes in 2 digits
    seconds = seconds < 10 ? "0" + seconds : seconds;

    min_ref.innerText = minutes;
    sec_ref.innerText = seconds;

    if (--timer < 0) {
      //stop the timmer
      clearInterval(interval);
      alert("TIME OVER");
    }
  }, 1000);
}

let startTimmer = true;
input_ref.addEventListener("keydown", (event) => {
  if (startTimmer) {
    startTimer();
    startTimmer = false;
  }
  if (new_topic.substr(0, event.target.value.length) === event.target.value) {
    event.target.classList.remove("border-danger");
    event.target.classList.add("border-success");
  } else {
    event.target.classList.remove("border-success");
    event.target.classList.add("border-danger");
  }
});
