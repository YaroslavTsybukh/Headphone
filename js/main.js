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
    tabContent = document.querySelectorAll('.info-tabcontent');//метод querySelectorAll, получающий все теги, подпадающие под CSS селектор, в виде массива элементов. 

    function hideTabContent(a) { //Функция для скрытия табов
        for (let i = a; i < tabContent.length; i++) { // с помощью этого цикла наш код подстраивается под количество этих елементов
            tabContent[i].classList.remove('show'); // i = переменная итератор , то есть таким образом при каждом проходе цикла , мы будем использовать каждый таб контент начиная с первого и заканчивая последним. Remove (метод ) = удалять класс 
            tabContent[i].classList.add('hide');// для того чтобы скрыть елемент со страницы добавлять клас hide , методом add обьекта classList
        }
    }
    hideTabContent(1); // вызов функции ; 1 = скрываются все елементы кроме первого ;

    function showTabContent(b) {// функция показывает таб контент , b = параметр для показа того елемента который мы хотим увидеть на сайте
        if (tabContent[b].classList.contains('hide')) {// проверяем действительно этот елемент скрыт (b) . Метод contains объекта classList проверяет наличие CSS класса элемента
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) { //event = обьект , ведь мы будем сравнивать с тем куда мы кликаем
        let target = event.target; // в переменную таргет поместили event . 
        if (target && target.classList.contains('info__header-tab')) { // && - оператор И для сравнения. Дальше мы проверяем что мы действительно кликнули на этот елемент. Если мы четко кликнули на .info__header-tab этот елемент , то выполниться цикл действий
            //дальше нам нужно определить что бы елемент Музыка на целый день откликалась со свои текстом 
            for(let i = 0; i < tab.length; i++) { // i < tab.length цикл закончиться тогда , когда закончатся табы , tab.length = длина табов (сколько их всего )
                if (target == tab[i]) {// если то куда мы нажали полностью совпадает с табом который мы перебираем  , то в таком случае мы выполним действия.
                    hideTabContent(0); // скрываем все табы
                    showTabContent(i); // показываем только тот , который совпадает с нашим табом. То есть TabContent совпадает с Табом по нумерации . Строка 43 используется tab[i] то есть допустим это 2-й 3-й таб и тд и точно такой же TabContent мы и показываем . Вместо i допустим попадет 2 она попадает в функцию showTabContent вместе b и там выполняется действие 
                    break;// цикл остановлен
                }
            }
        }

    }); 

/*Modal*/

let modal = document.querySelector('.modal')
    btn = document.querySelector(".more")
    span = document.getElementsByClassName("close")[0]

    btn.addEventListener("click",function(){// при клике на нашу кнопку должно открываться наше модальное окно.
        modal.style.display = "block"
    })
    span.addEventListener("click",function(){// функция для закрытия нашего модального окна
        modal.style.display = "none"
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

let myModalThird = document.getElementById('myModalThird')
    btnThird = document.getElementById("buttonThird")
    spanThird = document.getElementsByClassName("close")[0]

    btnThird.addEventListener("click",function(){
        modal.style.display = "block"
    })
    spanThird.addEventListener("click",function(){
        modal.style.display = "none"
    })






    