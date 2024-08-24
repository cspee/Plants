const btns = document.querySelectorAll('.thirdBtn')
const cards = document.querySelectorAll('.cards')

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", () => {


        let countActive = document.querySelectorAll('.activeBtnFourPage').length
        if (countActive == 0) {
            for (let j = 0; j < cards.length; j++) {

                if (btns[i].dataset.category != cards[j].dataset.category) {
                    cards[j].classList.toggle("blurred")
                }
            }
            btns[i].classList.toggle('activeBtnFourPage')
        } 
        
        else if (countActive == 1 && btns[i].classList.contains('activeBtnFourPage')) {
            for (let j = 0; j < cards.length; j++) {
                if (btns[i].dataset.category != cards[j].dataset.category) {
                    cards[j].classList.toggle("blurred")
                }
            }
            btns[i].classList.toggle('activeBtnFourPage')
        }

        else if (countActive == 1 && !btns[i].classList.contains('activeBtnFourPage') ) {

            for (let j = 0; j < cards.length; j++) {
                if (btns[i].dataset.category == cards[j].dataset.category) {
                    cards[j].classList.toggle("blurred")
                }
            }
            btns[i].classList.toggle('activeBtnFourPage')
        } else if (countActive == 2  && btns[i].classList.contains('activeBtnFourPage')) {
            for (let j = 0; j < cards.length; j++) {
                if (btns[i].dataset.category == cards[j].dataset.category) {
                    cards[j].classList.toggle("blurred")
                }
            }
            btns[i].classList.toggle('activeBtnFourPage')
        }

        console.log(chekcountActive);
    })

    console.log('');
}

const navMenu = document.querySelector('.navMenu');
const ulList = document.querySelector('.ulList')
const burgerContainer = document.querySelector('.burgerContainer')
const logoContainer = document.querySelector('.logoContainer')

function burgerMenu() {
    const width = window.innerWidth;
    // console.log(`Ширина экрана: ${width}px`); 

    if (width < 640) {// ширина здесь не такая же как в отладчике браузера
        // console.log('Меню скрыто');
        navMenu.classList.add('hidden'); 
        burgerContainer.classList.remove('hidden')
    } else {
        // console.log('Меню отображается');
        burgerContainer.classList.add('hidden')
        navMenu.classList.remove('hidden'); 
        logoContainer.classList.remove('hidden')
        ulList.style.fontSize = '16px'; 
    }
}

burgerContainer.addEventListener('click', () => {
    navMenu.classList.toggle('hidden')
    logoContainer.classList.toggle('hidden')
    ulList.style.fontSize = '10px'; 
})

window.addEventListener('resize', burgerMenu);  
burgerMenu();