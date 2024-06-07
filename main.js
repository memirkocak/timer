const box = document.querySelector('#box')

box.innerHTML = `
      <p id='timer'></p>
      <button id="start">start</button>
      <button id="stop" disabled>stop</button>
      <button id="resume" disabled>resume</button>
      <button id="restart" disabled>restart</button>
`
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')
const restart = document.querySelector('#restart')
const start = document.querySelector('#start')
const timer = document.querySelector('#timer')
const resume = document.querySelector('#resume')

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

  }, 1000);

  stop.addEventListener('click',()=>{
    clearInterval(A)
    stop.setAttribute('disabled', 'disabled')
    resume.removeAttribute('disabled')
  }) 

  resume.addEventListener('click',()=>{
    stop.removeAttribute('disabled')
    resume.setAttribute('disabled', 'disabled')
    restart.setAttribute('disabled', 'disabled')

    const B = setInterval(() => {
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
  
    }, 1000);

    stop.addEventListener('click',()=>{
    clearInterval(B)
    stop.setAttribute('disabled', 'disabled')
    resume.removeAttribute('disabled')
    restart.removeAttribute('disabled')
  }) 
  })
  
  restart.addEventListener('click',()=>{
    clearInterval(A)

    start.removeAttribute('disabled')

    sec = 0;
    min = 0;
    hours = 0;

    timer.textContent = `sec : ${sec} min : ${min} hour : ${hours}`

    stop.setAttribute('disabled', 'disabled')
    resume.setAttribute('disabled','disabled')
    restart.setAttribute('disabled','disabled')
  })
})



















