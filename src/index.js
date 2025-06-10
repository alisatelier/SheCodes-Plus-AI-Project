function generateReading(event){
  event.preventDefault();

  let readingElement = document.querySelector("#tarot-reading")
  readingElement.classList.add("text-appear")  
 new Typewriter('#tarot-reading', {
  strings: ['Your Future Awaits...'],
  autoStart: true,
});
}

let tarotFormElement = document.querySelector("#tarot-form")
tarotFormElement.addEventListener('submit', generateReading )