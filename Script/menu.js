/*
 * DESPLEGAR MENÚ
 */
var togglemenu = document.getElementById('toggle-menu');
var menu = document.getElementById('menu');
var link = document.getElementsByClassName('link');

togglemenu.addEventListener('click', function (){
   menu.classList.toggle('mostrar');
});

/*
 * ESCONDER MENÚ
 */
link.addEventListener('click', function (){
	menu.classList.toggle('mostrar');
});