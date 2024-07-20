const btns = document.querySelectorAll('.thirdBtn')
const cards = document.querySelectorAll('.cards')
let ccc = document.querySelectorAll('.activeBtnFourPage').length;
console.log(ccc)
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        const countActive = document.querySelectorAll('.activeBtnFourPage').length;
        console.log(countActive)

        
            if (countActive == 0) {
                console.log('залупа')
                for (let j = 0; j < cards.length; j++) {
                    if (cards[j] != cards[i])
                    cards[j].classList.toggle('blurred');
                }
                btns[i].classList.toggle('activeBtnFourPage')
                
                
            }             
        

       
        console.log(countActive)
        if (countActive == 1) {
                for (let j = 0; j < cards.length; j++) {
                    if (btns[i].dataset.category == cards[j].dataset.category)
                    cards[j].classList.toggle('blurred')
                }
                    
                    btns[i].classList.toggle('activeBtnFourPage')
                    console.log('залупа')
                
        } 

        else if  (countActive == 2 && cards[i].classList.contains('activeBtnFourPage')) {
            console.log('ЗАЛУПА')
            cards[i].classList.toggle('blurred')
            btns[i].classList.toggle('activeBtnFourPage')
        }

    
        console.log(countActive)
    })
    console.log(ccc)
}

