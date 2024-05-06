let timer;
let isRunning = false;
let time = 0;
let lapCounter = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStopButton').textContent = 'Start';
    isRunning = false;
  } else {
    timer = setInterval(updateTime, 10);
    document.getElementById('startStopButton').textContent = 'Stop';
    isRunning = true;
  }
}

function updateTime() {
  time++;
  const minutes = Math.floor(time / (100 * 60));
  const seconds = Math.floor((time / 100) % 60);
  const milliseconds = time % 100;
  document.getElementById('display').textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function recordLap() {
  const lapTime = document.getElementById('display').textContent;
  const lapList = document.getElementById('laps');
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
  lapList.appendChild(lapItem);
  lapCounter++;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  time = 0;
  lapCounter = 1;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startStopButton').textContent = 'Start';
  document.getElementById('laps').innerHTML = '';
}

