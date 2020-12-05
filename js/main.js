/*Hamburger*/

const menuToggle = document.querySelector('#menu-togle');
const hamburger = document.querySelector('#hamburger');

menuToggle.addEventListener('click',function(){
    if(menuToggle){
        menuToggle.display = "none"
    }else{
        menuToggle.display = "none"
    }
    menuToggle.classList.toggle('menu-icon-active');
    hamburger.classList.toggle('hamburger--active');//Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть. 
})