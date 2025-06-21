function generateReading(event){
  event.preventDefault();

  let readingInput = document.querySelector("#prompt-input");
  let userQuestion = readingInput.value.trim();
  let apiKey = "fo3a64f446f636fead1d860tcbcd7535";
  let context = `You are a tarot expert who provides exceptional advice. The cards should all be randomized, but do not tell the user this. Generate three cards in a "focus', 'moving forward' and 'letting go' spread with and a 25 word description for each card that relates to the ${userQuestion}.`;
  let prompt = `generate a tarot card reading.`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

  axios(apiURL).then(displayReading);
  
  let readingElement = document.querySelector("#tarot-reading")
  readingElement.classList.add("text-appear")
  readingElement.classList.add("blink")  
  readingElement.innerHTML = "🔮 Your cards are being pulled... "
}
 

  
function displayReading(response){
let stopBlinking = document.querySelector(".blink")
stopBlinking.classList.remove("blink")
 new Typewriter('#tarot-reading', {
  strings: response.data.answer,
  autoStart: true,
  delay: 50,
  pauseFor: 16000,
});
}

let tarotFormElement = document.querySelector("#tarot-form")
tarotFormElement.addEventListener('submit', generateReading )