let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    
    const now = new Data();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    digitalElement.innerHTML = `${hour}:${minutes}:${seconds}`;

};


// de 1 em 1 segundo ele executará a função
setInterval(updateClock, 1000);