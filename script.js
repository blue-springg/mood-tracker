const quotes = {
  happy: [
    "Joy looks good on you, wear it often.",
    "It’s a good day to be wildly happy.",
  ],
  sad: [
    "Sadness isn’t weakness—it’s just love that hasn’t found a place to go.",
    "Even stars take time to shine again after they fall.",
  ],
  angry: [
    "Anger is fire—burn bright, but don’t burn yourself.",
    "Turn your anger into a bridge, not a wall.",
  ],
  stressed: [
    "Stress is a visitor, not a resident. You can show it the door.",
    "Breathe. You don’t have to solve everything all at once.",
  ],
  unmotivated: [
    "Even slow steps are still steps forward.",
    "Motivation isn’t a switch—it’s a flicker you nurture.",
  ]
};

const moodInput = document.getElementById("moodInput");
const submitBtn = document.getElementById("submitMood");
const quoteText = document.getElementById("quoteText");
const response = document.getElementById("response");
const nextBtn = document.getElementById("nextBtn");

submitBtn.addEventListener("click", () => {
  const mood = moodInput.value.trim().toLowerCase();
  document.body.className = ""; // reset mood class

  if (quotes[mood]) {
    const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
    quoteText.textContent = `"${randomQuote}"`;
    response.classList.remove("hidden");
    document.body.classList.add(mood); // apply background
  } else {
    quoteText.textContent = "Sorry, I don’t know that mood. Try happy, sad, angry, stressed, or unmotivated.";
    response.classList.remove("hidden");
  }
});

nextBtn.addEventListener("click", () => {
  moodInput.value = "";
  response.classList.add("hidden");
  document.body.className = "";
});
