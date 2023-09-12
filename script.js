function updateUTCTime() {
  const currentUTCTimeMillis = Date.now();
  const currentTimeElement = document.getElementById("currentUTCTime");
  currentTimeElement.textContent = `current UTC Time (Milliseconds): ${currentUTCTimeMillis}`;
}

setInterval(updateUTCTime, 1000);
updateUTCTime();
