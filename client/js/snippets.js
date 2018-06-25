// Enhance 224 to 176. 
// Enhance, stop. 
// Move in, stop. 
// Pull out, track right, stop. 
// Center in, pull back. 
// Stop. 
// Track 45 right. Stop. 
// Center and stop. 
// Enhance 34 to 36. 
// Pan right and pull back. Stop. 
// Enhance 34 to 46. 
// Pull back. 
// Wait a minute, go right, stop. 
// Enhance 57 to 19. 
// Track 45 left. Stop. 
// Enhance 15 to 23. 
// Give me a hard copy right there.






/*

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
var recognition;

window.onload = function(){

  document.getElementById("btn").addEventListener("click", dictate);
  recognition = new SpeechRecognition();
  recognition.onresult = (event) => {
    console.info("event.results",event.results)
    const speechToText = event.results[0][0].transcript;
    document.getElementById("transcrypt").textContent = speechToText;
  }

}


const dictate = () => {
  recognition.start();
}