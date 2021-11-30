let buyForm = document.querySelector('.tickets__buy-form');
    buyFormOpen = document.querySelector('.tickets__buy-now');
    buyFormClose = document.querySelector('.tickets__payment-exit');

    buyFormOpen.onclick = function() {
      buyForm.classList.toggle("animate");
    };
    buyFormClose.onclick = function() {
      buyForm.classList.toggle('animate');
    };

window.onclick = function(e) {
  if (e.target == buyForm) {
    buyForm.classList.toggle('animate');
  }
}

const progress = document.querySelector('.video__progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

const progressVolume = document.querySelector('.volume__progress');

progressVolume.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})


document.querySelector('.burger__menu').addEventListener('click', function(){
  document.querySelector('.burger__menu').classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle("goleft");
})

let nav = document.querySelector('.header__nav')

window.onclick = function(e) {
  if (e.target == nav) {
    nav.classList.toggle('goleft');
    document.querySelector('.burger__menu').classList.toggle('active');
  }
}

let li = document.querySelectorAll('.header__li')

for (let i = 0; i < li.length; i++) {
  li[i].onclick = function(){
    document.querySelector('.burger__menu').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle("goleft");
  };
}

// let buyForm = document.querySelector('.tickets__buy-form');

// window.onclick = function(e) {
//   if (e.target == buyForm) {
//     buyForm.style.left='-2000';
//   }
// }


console.log("Оценка - 150 баллов")
console.log('Отзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1. Совмещается адаптивная и респонсивная (резиновая) вёрстка +14 При изменении ширины экрана плавно изменяются размеры: слайдера в секции .\n Результат проверки скорости сайта для мобильных устройств: 0 to 49 (red): Poor - не выполнено, 0 баллов\n')

console.log('Все остальные пункты я считаю полностью выполненными\nСвязь Discord: D.Na#1622')
