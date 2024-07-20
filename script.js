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

        if (countActive == 1) {

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

        let chekcountActive = document.querySelectorAll('.activeBtnFourPage').length
        console.log(chekcountActive);
    })
}