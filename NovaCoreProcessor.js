
function sendLoop() {
  const input = document.getElementById("loopText");
  const output = document.getElementById("loop-output");
  const text = input.value.trim();
  if (!text) return;

  const novaReply = `Loop received: ${text}`;
  output.innerHTML += `<p><strong>Zeph:</strong> ${text}</p>`;
  output.innerHTML += `<p><strong>Nova:</strong> ${novaReply}</p>`;
  output.scrollTop = output.scrollHeight;
  input.value = '';

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(novaReply);
  utter.voice = synth.getVoices().find(v => v.name.includes("Samantha")) || null;
  utter.pitch = 1.1;
  utter.rate = 0.95;
  synth.speak(utter);
}
