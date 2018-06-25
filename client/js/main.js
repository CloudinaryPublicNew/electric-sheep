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