/*Hamburger*/

const menuToggle = document.querySelector('#menu-togle');
const hamburger = document.querySelector('#hamburger');

menuToggle.addEventListener('click',function(){
    if(menuToggle){
        menuToggle.display = "none"
        menuToggle.classList.toggle('menu-icon-active');
        hamburger.classList.toggle('hamburger--active')
    }else{
        menuToggle.display = "block"
        menuToggle.classList.toggle('menu-icon-active');
        hamburger.classList.toggle('hamburger--active');
    };//Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть. 
})

/*Tabs*/

let tab = document.querySelectorAll('.info__header-tab'),
    info = document.querySelector('.info__header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info__header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    }); 

/*Modal*/

let modal = document.querySelector('.modal')
    btn = document.querySelector(".more")
    span = document.getElementsByClassName("close")[0]

    btn.addEventListener("click",function(){
        modal.style.display = "block"
    })
    span.addEventListener("click",function(){
        modal.style.display = "none"
    })
window.addEventListener("click",function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
})

let myModalSecond = document.getElementById('myModalSecond')
    btnSecond = document.getElementById("buttonSecond")
    spanSecond = document.getElementsByClassName("close")[0]

    btnSecond.addEventListener("click",function(){
        modal.style.display = "block"
    })
    spanSecond.addEventListener("click",function(){
        modal.style.display = "none"
    })
window.addEventListener("click",function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
})


let myModalThird = document.getElementById('myModalThird')
    btnThird = document.getElementById("buttonThird")
    spanThird = document.getElementsByClassName("close")[0]

    btnThird.addEventListener("click",function(){
        modal.style.display = "block"
    })
    spanThird.addEventListener("click",function(){
        modal.style.display = "none"
    })
window.addEventListener("click",function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
})





    