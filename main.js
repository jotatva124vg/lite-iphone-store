
function generateLitecoinAddress() {
  // Fake generated address for now (real API integration comes later)
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let address = 'ltc1q';
  for (let i = 0; i < 33; i++) {
    address += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return address;
}

function startPlaying() {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Please enter a username.");
    return;
  }
  const address = generateLitecoinAddress();
  localStorage.setItem("username", username);
  localStorage.setItem("wallet", address);
  document.getElementById("walletAddress").innerText = address;
}

function copyAddress() {
  const address = document.getElementById("walletAddress").innerText;
  navigator.clipboard.writeText(address);
  alert("Address copied!");
}
