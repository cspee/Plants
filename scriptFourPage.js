// const basicsBtn = document.getElementById('basicsBtn');
//     const pricesBlock = document.querySelector('.pricesBlock');

//     // Добавляем обработчик клика для кнопки "Basics"
//     basicsBtn.addEventListener('click', () => {
//         // Переключаем класс "hidden" для блока "Prices"
//         pricesBlock.classList.toggle('hidden');
//     });

const basicBtn = document.getElementById('basicsBtn')
const standardBtn  = document.getElementById('standardBtn')
const proCareBtn  = document.getElementById('proCareBtn')

const fBtnsContainer =document.querySelector('.fBtnsContainer')

const pricesBlock = document.getElementById('pricesBlock')
const pricesBlockStand = document.getElementById('pricesBlockStand')
const pricesBlockPro = document.getElementById('pricesBlockPro')






basicBtn.addEventListener('click', () => {
    pricesBlock.classList.remove('hidden')
    basicBtn.replaceWith(pricesBlock)
    fBtnsContainer.style.gap = '5px'
})

pricesBlock.addEventListener('click', () => {
    pricesBlock.replaceWith(basicBtn)
    fBtnsContainer.style.gap = '32px'
})
// вторая кнопка
standardBtn.addEventListener('click', () => {
    standardBtn.classList.add('hidden')
    pricesBlockStand.classList.remove('hidden')
    standardBtn.replaceWith(pricesBlockStand)
    fBtnsContainer.style.gap = '5px'
})

pricesBlockStand.addEventListener('click', () => {
    standardBtn.classList.remove('hidden')
    pricesBlockStand.classList.add('hidden')
    pricesBlockStand.replaceWith(standardBtn)
    fBtnsContainer.style.gap = '32px'
})
// третья кнопка

proCareBtn.addEventListener('click', () => {
    proCareBtn.classList.add('hidden')
    pricesBlockPro.classList.remove('hidden')
    proCareBtn.replaceWith(pricesBlockPro)
    fBtnsContainer.style.gap = '5px'
})

pricesBlockPro.addEventListener('click', () => {
    proCareBtn.classList.remove('hidden')
    pricesBlockPro.classList.add('hidden')
    pricesBlockPro.replaceWith(proCareBtn)
    fBtnsContainer.style.gap = '32px'
})