const box = document.querySelector('#box')

box.innerHTML = `
      <p id='timer'></p>
      <button id="start">start</button>
      <button id="stop" disabled>stop</button>
      <button id="restart" disabled>restart</button>
`
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')
const restart = document.querySelector('#restart')
const start = document.querySelector('#start')
const timer = document.querySelector('#timer')

start.addEventListener('click',()=>{
  stop.removeAttribute('disabled');
  restart.removeAttribute('disabled');
  start.setAttribute('disabled', 'disabled');

  let sec = 0;
  let min = 0;
  let hours = 0;

  const A = setInterval(() => {
    if(sec === 60){
      if(min === 60){
        min = 0;
        hours++;
      }
      sec = 0;
      min++;
    }
    sec++;

    timer.textContent = `sec : ${sec} min : ${min} hour : ${hours}`

  }, 100);


  restart.addEventListener('click',()=>{
    
  })

})



















