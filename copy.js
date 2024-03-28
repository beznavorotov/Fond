
function copyAccount() {
  let accountNumber = 'UA653052990000026001010705472';
  navigator.clipboard.writeText(accountNumber);
  alert('Рахунок скопійовано: ' + accountNumber);
}

let myCarousel = new bootstrap.Carousel(document.getElementById('auctionsCarousel'), {
  interval: 5000, // змініть на потрібний вам інтервал
  wrap: true // змініть на false, якщо ви не хочете зациклювати карусель
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      }
    }
  });
});