console.log("Working")

let video = document.getElementById("promoVid")
let videoContainer = document.querySelector(".video-container")

let countContainer = document.querySelector(".count-container")

const countOptions = {
    root: null,
    threshold: .75,
    rootMargin: "0px"
}

const countObserver = new IntersectionObserver(countFunction, countOptions)

function countFunction(entries, observer){
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            startCount();
            observer.unobserve(entry.target)
        }
    })
}

countObserver.observe(countContainer)


let countDisplays = document.querySelectorAll(".count-num")
const interval = 5000

function startCount() {
    countDisplays.forEach((display) => {
        let startValue = 0;
        let endValue = parseInt(display.getAttribute("data-val"))
        let duration = Math.floor(interval / endValue)
        let counter = setInterval(() => {
            startValue += 1;
            display.textContent = `${startValue}+`
            if(startValue ==  endValue){
                clearInterval(counter)
            }
        }, duration)
    })
    
}


const videoOptions = {
    root: null,
    threshold: .15,
    rootMargin: "0px"
}

const videoObserver = new IntersectionObserver(videoFunction, videoOptions)

function videoFunction(entries, observer){
    // do something
    entries.forEach(entry => {
        // console.log(entry.isIntersecting)
        if(entry.isIntersecting){
            video.play()
            observer.unobserve(entry.target)
        }
    });
}

videoObserver.observe(videoContainer)