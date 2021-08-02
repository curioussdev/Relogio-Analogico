let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');


function updateClock() {
    let now = new Date();
    
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
};

function fixZero(time) {
 /*   if (time < 10) {
        return '0'+time;
    } else {
        return time;
    }
 */
    // REFATORANDO O if
    return time < 10 ? `0${time}` : time;

};


// de 1 em 1 segundo ele executará a função
setInterval(updateClock, 1000);