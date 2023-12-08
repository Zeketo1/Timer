let circle = document.querySelector("#circle");
let circleIcon = document.querySelector("#circle i");
let seconds = 1;
let minutes = 0;
let hours = 0;
let timerIcon = document.querySelector("header i");
let secText = document.querySelector("#sec-text");
let minText = document.querySelector("#min-text");
let hourText = document.querySelector("#hour-text");
let rotate = 0;
let intervalId;
let rotateIntervalId;
let resetCon = document.querySelector("#reset");
let stopIcon = document.querySelector(".fa-stop");
circle.onclick = () => {
    if (circleIcon.classList.contains("fa-play")) {
        resetCon.style.transform = "translateX(0%)";
        circle.style.borderRadius = "50% 0% 0% 50%";
        circleIcon.classList.replace("fa-play", "fa-pause");
        intervalId = setInterval(() => {
            if (seconds > 59) {
                seconds = 0;

                minutes++;
                if (minutes > 59) {
                    minutes = 0;

                    hours++;
                }
            }

            secText.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;
            console.log(seconds);
            minText.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`;
            hourText.innerHTML = `${hours < 10 ? `0${hours}` : hours}`;
            seconds++;
        }, 1000);
        rotateIntervalId = setInterval(() => {
            rotate += 20;
            timerIcon.style.transform = `translate(-50%, 0) rotate(${rotate}deg)`;
        }, 100);
    } else {
        clearInterval(rotateIntervalId);
        circleIcon.classList.replace("fa-pause", "fa-play");
        clearInterval(intervalId);
        // timerIcon.classList.remove("rotate");
    }
};

stopIcon.onclick = () => {
    seconds = 1;
    minutes = 0;
    hours = 0;
    rotate = 0;
    timerIcon.style.transition = "none";
    timerIcon.style.transform = `translate(-50%, 0) rotate(${rotate}deg)`;
    resetCon.style.transform = "translateX(-100%)";
    circle.style.borderRadius = "50%";
    secText.innerHTML = "00";
    minText.innerHTML = "00";
    hourText.innerHTML = "00";
    circleIcon.classList.replace("fa-pause", "fa-play");
    clearInterval(rotateIntervalId);
    clearInterval(intervalId);
};
