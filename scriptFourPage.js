// const basicsBtn = document.getElementById('basicsBtn');
//     const pricesBlock = document.querySelector('.pricesBlock');

//     // Добавляем обработчик клика для кнопки "Basics"
//     basicsBtn.addEventListener('click', () => {
//         // Переключаем класс "hidden" для блока "Prices"
//         pricesBlock.classList.toggle('hidden');
//     });

const basicBtn = document.getElementById('basicsBtn')
const standardBtn = document.getElementById('standardBtn')
const proCareBtn = document.getElementById('proCareBtn')

const fBtnsContainer = document.querySelector('.fBtnsContainer')

const pricesBlock = document.getElementById('pricesBlock')
const pricesBlockStand = document.getElementById('pricesBlockStand')
const pricesBlockPro = document.getElementById('pricesBlockPro')


let activeBlock = null
let activeBtn = null


function showBlock(btn, block) {
    if (!fBtnsContainer.querySelector(".pricesBlock")) {
        block.classList.remove('hidden')
        btn.replaceWith(block)
        fBtnsContainer.style.gap = '5px'
        activeBlock = block
        activeBtn = btn
        console.log("РРАБОТА")
    }
    //почемеу НЕ ПОДСКАЗЫВАЕТ МЕТОДЫ КОГДа пишу contains нету его в подсказках btn.classList.contains
    else if (fBtnsContainer.querySelector(".pricesBlock") && btn.classList.contains("styleForElemInButton")) {
        console.log('ДОМ')
        showBtn(activeBtn, activeBlock)
        showBlock(btn, block)
    }

}

function showBtn(btn, block) {

    block.replaceWith(btn)
    fBtnsContainer.style.gap = '32px'
}



basicBtn.addEventListener('click', () => showBlock(basicBtn, pricesBlock))
standardBtn.addEventListener('click', () => showBlock(standardBtn, pricesBlockStand))
proCareBtn.addEventListener('click', () => showBlock(proCareBtn, pricesBlockPro))

pricesBlock.addEventListener('click', () => showBtn(basicBtn, pricesBlock))
pricesBlockStand.addEventListener('click', () => showBtn(standardBtn, pricesBlockStand))
pricesBlockPro.addEventListener('click', () => showBtn(proCareBtn, pricesBlockPro))



// basicBtn.addEventListener('click', () => {
//     if (!fBtnsContainer.querySelector(".pricesBlock")) {
//         pricesBlock.classList.remove('hidden')
//         basicBtn.replaceWith(pricesBlock)
//         fBtnsContainer.style.gap = '5px'
//     }



// },)

// pricesBlock.addEventListener('click', () => {
//     pricesBlock.replaceWith(basicBtn)
//     fBtnsContainer.style.gap = '32px'
// })
// // вторая кнопка
// standardBtn.addEventListener('click', () => {
//     if (!fBtnsContainer.querySelector(".pricesBlock")) {
//         standardBtn.classList.add('hidden')
//         pricesBlockStand.classList.remove('hidden')
//         standardBtn.replaceWith(pricesBlockStand)
//         fBtnsContainer.style.gap = '5px'
//     }

// })

// pricesBlockStand.addEventListener('click', () => {
//     standardBtn.classList.remove('hidden')
//     pricesBlockStand.classList.add('hidden')
//     pricesBlockStand.replaceWith(standardBtn)
//     fBtnsContainer.style.gap = '32px'
// })
// // третья кнопка

// proCareBtn.addEventListener('click', () => {

//     if (!fBtnsContainer.querySelector(".pricesBlock")) {
//         proCareBtn.classList.add('hidden')
//         pricesBlockPro.classList.remove('hidden')
//         proCareBtn.replaceWith(pricesBlockPro)
//         fBtnsContainer.style.gap = '5px'

//     }

// })

// pricesBlockPro.addEventListener('click', () => {
//     proCareBtn.classList.remove('hidden')
//     pricesBlockPro.classList.add('hidden')
//     pricesBlockPro.replaceWith(proCareBtn)
//     fBtnsContainer.style.gap = '32px'
// })