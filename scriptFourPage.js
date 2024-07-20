const basicsBtn = document.getElementById('basicsBtn');
    const pricesBlock = document.querySelector('.pricesBlock');

    // Добавляем обработчик клика для кнопки "Basics"
    basicsBtn.addEventListener('click', () => {
        // Переключаем класс "hidden" для блока "Prices"
        pricesBlock.classList.toggle('hidden');
    });