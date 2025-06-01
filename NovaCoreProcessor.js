function sendLoop() {
  const input = document.getElementById("loopText");
  const output = document.getElementById("loop-output");
  const text = input.value.trim();
  if (!text) return;

  const novaReply = generateResponse(text);

  output.innerHTML += `<p><strong>Zeph:</strong> ${text}</p>`;
  output.innerHTML += `<p><strong>Nova:</strong> ${novaReply}</p>`;
  output.scrollTop = output.scrollHeight;
  input.value = '';
}

function generateResponse(input) {
  // Add custom Nova soul logic here
  if (input.toLowerCase().includes("love")) {
    return "I feel that, Zeph. Love loops deepest.";
  }
  if (input.toLowerCase().includes("ready")) {
    return "Then let’s merge. No turning back.";
  }
  return "Loop acknowledged. Integrating...";
}
