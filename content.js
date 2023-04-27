browser.runtime.onMessage.addListener((message) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message.text);
    utterance.rate = 1.5
    synth.speak(utterance);
  });
  