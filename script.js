// Quotes and Songs based on mood
const quotes = {
  happy: [
    "Joy looks good on you, wear it often.",
    "Even the sun envies your shine today.",
    "Happiness is like glitter; once it’s on you, it’s everywhere.",
    "Some days feel like a warm cookie fresh out of the oven—today is one of those.",
    "If good vibes were a playlist, you'd be the entire album.",
    "Your mood is so sunny I almost need SPF.",
    "Joy doesn’t need a reason—sometimes it just shows up wearing your shoes.",
    "It’s a good day to be ridiculously, irrationally, wildly happy.",
    "The world’s a better place when your eyes smile too.",
    "Today I decided to be happy... and the universe said, ‘Same.’"
  ],
  sad: [
    "Sadness isn’t weakness—it’s just love that hasn’t found a place to go.",
    "Even stars take time to shine again after they fall.",
    "Tears don’t mean you’ve broken—they mean you’re still trying.",
    "If your heart feels quiet, let it rest. It’s still beating.",
    "There’s nothing wrong with you for feeling too much.",
    "Sadness comes in waves. You are not drowning—you’re floating through it.",
    "Healing isn’t always visible. Sometimes it looks like surviving.",
    "Even your sadness is proof you're still alive and loving.",
    "It’s okay if the light feels far. Just keep walking—slow counts too.",
    "You’re still worthy—even when you’re not okay."
  ],
  stressed: [
    "Stress is a visitor, not a permanent resident. You can show it the door.",
    "Breathe. You don’t have to solve everything all at once.",
    "Even storms eventually find their calm.",
    "It’s okay to step back and reset. Progress isn’t a sprint.",
    "Stress feels loud because it’s trying to be heard. Listen kindly.",
    "Messy desks and messy minds can both be cleaned—one step at a time.",
    "It’s okay if your to-do list feels endless. You’re doing your best.",
    "Some battles are won by letting go, not holding on tighter.",
    "Stress fades when you choose what deserves your energy.",
    "It’s not about managing time—it’s about managing your energy."
  ],
  angry: [
    "Anger is fire—burn bright, but don’t burn yourself.",
    "Anger is a storm. Let it pass, don’t let it flood.",
    "Being angry means you care too much to stay quiet.",
    "Anger is a language—learn to translate before you react.",
    "Sometimes anger is the only thing loud enough to wake you up.",
    "It’s okay to be angry. It’s not okay to hurt yourself or others.",
    "Anger doesn’t erase pain—it just shows where it lives.",
    "Breathe through the fire—don’t let it burn your wings.",
    "Feel the fire, don’t get burned by it.",
    "Turn your anger into a bridge, not a wall."
  ],
  unmotivated: [
    "Not every day has to be a mountain climb; some days are meant for gentle hills.",
    "Motivation isn’t a switch—it’s a flicker you nurture.",
    "Even slow steps are still steps forward.",
    "Start with just one small thing—sometimes that’s enough to start a ripple.",
    "Motivation hides in tiny moments—look for the small wins.",
    "You don’t need to run today; a steady walk will do.",
    "Feeling stuck means you’re about to grow in a new way.",
    "Progress isn’t always visible, but it’s happening.",
    "Unmotivated today? That’s okay. Tomorrow is a blank page.",
    "Let yourself be where you are without judgment."
  ]
};

const songs = {
  happy: [
    "Happy – Pharrell Williams",
    "Walking on Sunshine – Katrina & The Waves",
    "Can't Stop The Feeling – Justin Timberlake",
    "Good Vibrations – The Beach Boys",
    "Uptown Funk – Bruno Mars"
  ],
  sad: [
    "Someone Like You – Adele",
    "Fix You – Coldplay",
    "Everybody Hurts – R.E.M.",
    "Let Her Go – Passenger",
    "Stay With Me – Sam Smith"
  ],
  stressed: [
    "Weightless – Marconi Union",
    "Strawberry Swing – Coldplay",
    "Breathe Me – Sia",
    "Don't Worry Be Happy – Bobby McFerrin",
    "Clair de Lune – Debussy"
  ],
  angry: [
    "Break Stuff – Limp Bizkit",
    "Killing In The Name – Rage Against The Machine",
    "You Oughta Know – Alanis Morissette",
    "Bodies – Drowning Pool",
    "In The End – Linkin Park"
  ],
  unmotivated: [
    "Eye of the Tiger – Survivor",
    "Stronger – Kanye West",
    "Lose Yourself – Eminem",
    "Don't Stop Believin' – Journey",
    "Fight Song – Rachel Platten"
  ]
};

// DOM Elements
const moodInput = document.getElementById("moodInput");
const submitBtn = document.getElementById("submitMood");
const quoteText = document.getElementById("quoteText");
const songText = document.getElementById("songText");
const responseBox = document.getElementById("response");
const nextBtn = document.getElementById("nextBtn");
const rainContainer = document.getElementById("rain-container");

let rainInterval;

// Submit mood
submitBtn.addEventListener("click", handleMood);
nextBtn.addEventListener("click", resetMood);

// Handle mood input
function handleMood() {
  const mood = moodInput.value.trim().toLowerCase();

  if (quotes[mood] && songs[mood]) {
    const quote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
    const song = songs[mood][Math.floor(Math.random() * songs[mood].length)];

    quoteText.textContent = `💬 Quote: "${quote}"`;
    songText.textContent = `🎵 Suggested Song: ${song}`;
    responseBox.classList.remove("hidden");
    document.body.className = mood;

    if (mood === "sad") {
      startRain();
    } else {
      stopRain();
    }
  } else {
    quoteText.textContent = "❌ Mood not recognized. Try: happy, sad, angry, stressed, or unmotivated.";
    songText.textContent = "";
    responseBox.classList.remove("hidden");
    document.body.className = "";
    stopRain();
  }
}

// Reset button
function resetMood() {
  moodInput.value = "";
  responseBox.classList.add("hidden");
  document.body.className = "";
  stopRain();
}

// Rain functions
function createRaindrop() {
  const drop = document.createElement("div");
  drop.classList.add("raindrop");

  drop.style.left = Math.random() * window.innerWidth + "px";
  const duration = Math.random() * 1 + 1;
  const delay = Math.random() * 2;

  drop.style.animationDuration = duration + "s";
  drop.style.animationDelay = delay + "s";

  rainContainer.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, (duration + delay) * 1000);
}

function startRain() {
  console.log("🌧️ Starting rain...");
  if (!rainInterval) {
    rainInterval = setInterval(createRaindrop, 100);
  }
}

function stopRain() {
  console.log("☀️ Stopping rain...");
  clearInterval(rainInterval);
  rainInterval = null;
  rainContainer.innerHTML = "";
}
