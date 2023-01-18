/* user selection*/

const checkbox = document.querySelectorAll('.wkd-switch__native-control')

const haarfarbe = document.querySelector('.haarfarbe')
const glätte = document.querySelector('.glätte')
const kraft = document.querySelector('.kraft')
const färbung = document.querySelector('.färbung')
const schaden = document.querySelector('.schaden')
const kopfhaut = document.querySelector('.kopfhaut')
const schuppen = document.querySelector('.schuppen')
const haarausfall = document.querySelector('.haarausfall')

const submit = document.querySelector('.submit-button')

const haardiagnose = {
    haarfarbe: ['schwarz', 'braun', 'blond', 'rot'],
    glätte: Number,                //intensität von 1-4
    kraft: Number,
    färbung: Boolean,
    schaden: Boolean,
    kopfhaut: Number,
    schuppen: Boolean,
    haarausfall: Number
}

function interpretSlider(obj, property, slider) {

    if (slider.value < 25) {
        obj[property] = 1
        return obj[property]
    }

    if (slider.value < 50 && slider.value > 25) {
        obj[property] = 2
        return obj[property]
    }

    if (slider.value < 75 && slider.value > 50) {
        obj[property] = 3 
        return obj[property]   
    }

    if (slider.value < 100 && slider.value > 75) {
        obj[property] = 4
        return obj[property]
    }
}

function interpretMulti(obj, property, multi) {
    let children = multi.children

    const firstChildren = [];
    for (let i = 0; i < children.length; i++) {
        let firstChild = children[i].firstChild;
        firstChildren.push(firstChild);
    }

    let input = [];
    firstChildren.forEach(element => {
        let nextElmSibling = element.nextElementSibling
        input.push(nextElmSibling)
    });

    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            let selected = input[i].value
            obj[property] = obj[property][selected - 1]
            return obj[property]
        }
    }
}

function interpretCheckbox(obj, property, checkbox) {
    obj[property] = checkbox.checked
    return obj[property]
}

submit.addEventListener('click', () => {
    interpretMulti(haardiagnose, 'haarfarbe', haarfarbe)

    interpretSlider(haardiagnose, 'glätte', glätte)
    interpretSlider(haardiagnose, 'kraft', kraft)
    interpretSlider(haardiagnose, 'kopfhaut', kopfhaut)

    interpretCheckbox(haardiagnose, 'färbung', färbung)
    interpretCheckbox(haardiagnose, 'schaden', schaden)
    interpretCheckbox(haardiagnose, 'schuppen', schuppen)
    interpretCheckbox(haardiagnose, 'haarausfall', haarausfall)

    // let data = JSON.parse(haardiagnose)
    // console.log(data)
    console.log(haardiagnose)

    //location.reload(); zum seite neu laden...
})

// ist leider nicht wirklich multifunktionabel aber man hat ja auch nicht so viele eigenschafften in einem objekt 