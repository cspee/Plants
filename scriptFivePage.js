const fiveCityBtn  = document.querySelector('.fiveCityBtn')
const chooseCityContainer = document.querySelector('.chooseCityContainer')
const fiveActiveBtn = document.getElementById('fiveActiveBtn')
const cityBlockArr = document.querySelectorAll('.cityBlock')
const fiveRightSide = document.querySelector('.fiveRightSide')

const yonkersPanel = document.getElementById('yonkers')
const canandaiguaPanel = document.getElementById('canandaigua')
const sherrilPanel = document.getElementById('sherril')
const newYorkPanel = document.getElementById('newYork')


// const circle = document.getElementById('idCircle')
// const upCircle = document.getElementById('upCircle')

const canandaiguaBtn = document.getElementById('canandaiguaBtn')
const newYorkBtn = document.getElementById('newYorkBtn')
const yonkersBtn = document.getElementById('yonkersBtn')
const sherrilBtn = document.getElementById('sherrilBtn')

let btnActive = false;
let isChooseCityActive = true;

   

fiveCityBtn.addEventListener('click', () => {
    if (fiveRightSide.querySelector('.cityBlock')) {
        fiveRightSide.querySelector('.cityBlock').replaceWith(chooseCityContainer)
    }
    chooseCityContainer.classList.toggle('hidden')
    fiveCityBtn.classList.toggle('hidden')
    fiveActiveBtn.classList.toggle('hidden')
    btnActive = false;
})

fiveActiveBtn.addEventListener('click', () => {
    btnActive = true
    cityBlockArr.forEach((element, index) => {
        if (!element.classList.contains('hidden')) {
            cityBlockArr[index].classList.toggle('hidden')
        }
    });
    chooseCityContainer.classList.toggle('hidden')
    fiveCityBtn.classList.toggle('hidden')
    fiveActiveBtn.classList.toggle('hidden')
    
})


canandaiguaBtn.addEventListener('click', () => {
    canandaiguaPanel.classList.remove('hidden') // если использовать  toggle вместо remove  то не работает как надо 
    chooseCityContainer.replaceWith(canandaiguaPanel)

    
})

canandaiguaPanel.addEventListener('click', () => {
    canandaiguaPanel.replaceWith(chooseCityContainer)
    
})


newYorkBtn.addEventListener('click', () => {
    newYorkPanel.classList.remove('hidden')
    chooseCityContainer.replaceWith(newYorkPanel)
})

newYorkPanel.addEventListener('click', () => {
    newYorkPanel.replaceWith(chooseCityContainer)
})



yonkersBtn.addEventListener('click', () => {
    yonkersPanel.classList.remove('hidden')
    chooseCityContainer.replaceWith(yonkersPanel)
})

yonkersPanel.addEventListener('click', () => {
    yonkersPanel.replaceWith(chooseCityContainer)
})


sherrilBtn.addEventListener('click', () => {
    sherrilPanel.classList.remove('hidden')
    chooseCityContainer.replaceWith(sherrilPanel)
    
})

sherrilPanel.addEventListener('click', () => {
    sherrilPanel.replaceWith(chooseCityContainer)
})
