const minutesLap=document.getElementById('minutes');
const secondsLap=document.getElementById('seconds');
const millisecondsLap=document.getElementById('milliseconds');
const startBtn=document.getElementById('startBtn');
const stopBtn=document.getElementById('stopBtn');
const pauseBtn=document.getElementById('pauseBtn');
const resetBtn=document.getElementById('resetBtn');
const laplist=document.getElementById('list-laps')

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
pauseBtn.addEventListener('click',pauseTimer);
resetBtn.addEventListener('click',resetTimer);

let minutes=0;
let seconds=0;
let milliseconds=0
let interval;

function startTimer(){
  interval=setInterval(updateTimer,10)
  startBtn.disabled=true;
}
function stopTimer(){
 clearInterval(interval)
 startBtn.disabled=false;
 addToList()
 reset()
}
function pauseTimer(){
  clearInterval(interval)
  startBtn.disabled=false;
}
function resetTimer(){
  clearInterval(interval)
  reset()
  startBtn.disabled=false;
}

function updateTimer(){
    milliseconds++;
    if(milliseconds==100){
        milliseconds=0;
        seconds++;
    }
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    displayTimer()
   
}

function padTimer(time){
  return time.toString().padStart(2,'0');

}
function displayTimer(){
    millisecondsLap.textContent=padTimer(milliseconds)
    secondsLap.textContent=padTimer(seconds)
    minutesLap.textContent=padTimer(minutes)
}
function reset (){
    minutes=0;
    milliseconds=0;
    seconds=0;
    displayTimer()
}

function addToList(){
    lapTime=`${padTimer(minutes)}:${padTimer(seconds)}:${padTimer(milliseconds)}`;
    listItem=document.createElement('li');
    listItem.innerHTML=`<span>Lap ${laplist.childElementCount +1}: </span>${lapTime}`
    laplist.appendChild(listItem);
}