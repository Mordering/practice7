'use strict';

// ПЕРВОЕ ЗАДАНИЕ
btn.addEventListener('mousedown', function(){
    btn.style.display= 'none';
})

// ВТОРОЕ И ТРЕТЬЕ ЗАДАНИЕ
btn2.addEventListener('click', function(){
    text.classList.toggle('hidden') //при нажатии на кнопку, стиль hidden появляется в css, после пторого нажатия пропадает
})
