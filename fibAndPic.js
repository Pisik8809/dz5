document.addEventListener("DOMContentLoaded", ready);
function ready() {
function fib(n) {
 if(n <=1) {
   return n;
 }
  else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log( fib(9) );

var pic = document.getElementById('frog');
function moveImg1() {
  var posX = screen.availWidth - 1200;
  pic.style.left = posX + 'px';
  var posY = screen.availHeight - 750;
  pic.style.top = posY + 'px';
};
function moveImg2() {
  var posX = screen.availWidth - 1000;
  pic.style.left = posX + 'px';
  var posY = screen.availHeight - 1000;
  pic.style.top = posY + 'px';
};
function moveImg3() {
  var posX = screen.availWidth - 900;
  pic.style.left = posX + 'px';
  var posY = screen.availHeight - 900;
  pic.style.top = posY + 'px';
};
function moveImg4() {
  var posX = screen.availWidth - 800;
  pic.style.left = posX + 'px';
  var posY = screen.availHeight - 800;
  pic.style.top = posY + 'px';
};
function timers() {
setTimeout(moveImg1, 1000);
setTimeout(moveImg2, 1500);
setTimeout(moveImg3, 2000);
setTimeout(moveImg4, 2500);
}
setInterval(timers, 8000);
}
