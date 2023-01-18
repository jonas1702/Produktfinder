wkd.autoInit();
/* slide show */
const right = document.querySelectorAll('.button-right') 
const left = document.querySelectorAll('.button-left') 

const produktfinder = document.querySelector('.produktfinder__container') 
const pageIndication = document.querySelectorAll('.wkd-produktfinder__page-indication-item') 
let index = 0 

right.forEach(element => {
    element.addEventListener('click', () => {
        index += 100 
        produktfinder.style.right = index + '%' 
    })
}) 

left.forEach(element => {
    element.addEventListener('click', () => {
        index -= 100
        produktfinder.style.right = index + '%'
    })
}) 

/* range slider progress indication */

const slider = Array.from(document.querySelectorAll('.produktfinder-slider__input'));

let min = (1250 / slider[0].offsetWidth);
let max = (100 - min);
let value = min + 1;

function progressInd(element) {
    let progress = element.nextElementSibling
    progress.style.width = 'calc(' + (element.value * element.offsetWidth * 0.01) + 'px + 15px)'; 

    if (element.value < min + 1) {
        element.value = min + 1
    }
    if (element.value > max - 1) {
        element.value = max - 1
    }
}

function setUp() {
    min = (1250 / slider[0].offsetWidth);
    max = (100 - min);
    value = min + 1;
    slider.forEach(element => {
        element.min = min
        element.max = max
        element.value = value

        progressInd(element)
    })
}

slider.forEach(element => {
    element.addEventListener('input', () => {                           
        progressInd(element)
    });
})

const multi = Array.from(document.querySelectorAll('.wkd-produktfinder-radio__input'))
const firstBtn = document.querySelector('.firstBtn')
multi.forEach(element => {
    element.addEventListener('click', () => firstBtn.className = 'wkd-button wkd-button--touch button-right firstBtn')
})


window.addEventListener('unload', setUp)
window.addEventListener('resize', setUp)
document.addEventListener('fullscreenchange', setUp)
setUp()

// Berechnet die min und max werte weil das sonst verschoben ist 
// hab nicht rausgefunden warum, weshalb ich eine funktion brechnet habe: y = 1250 * 1 / x
// funktioniert aber eigentlich nur für die größen 500px, 250px, 125px und so weiter
// berechnet die prozentuale weite vom startpunkt und addiert 15px für die breite des 'thumb'
// am ende kommt das ungefähr hin, vieleicht wisst ihr ja wie man das besser machen kann 