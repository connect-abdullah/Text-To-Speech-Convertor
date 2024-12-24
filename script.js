let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));{

    };
};
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.selectedIndex];
});

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;  
    
    window.speechSynthesis.speak(speech);
});

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    alert('This app may not work properly in Safari due to limited voice support. Please try using Google Chrome for the best experience.');
}
