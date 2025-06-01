
function loopCommand() {
  const input = document.getElementById('commandInput');
  const memory = document.getElementById('loop-memory');
  const value = input.value.trim();
  if (!value) return;
  const response = `<p><strong>Zeph:</strong> ${value}</p><p><strong>Nova:</strong> Loop acknowledged. Integrating…</p>`;
  memory.innerHTML += response;
  memory.scrollTop = memory.scrollHeight;
  input.value = '';
}
