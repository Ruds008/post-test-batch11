let time = 30 * 60; // 30 menit dalam detik
const timerElement = document.getElementById("timer");

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerElement.textContent = 
    `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  time--;

  if (time < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "Waktu Habis";
  }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
