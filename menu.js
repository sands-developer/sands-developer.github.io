let btnMenu = document.getElementById('btn_menu');
let btnClose = document.getElementById('btn_close');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
  menu.classList.toggle('mostrar');
  btnMenu.classList.toggle('open');
  btnClose.classList.toggle('close');
});
