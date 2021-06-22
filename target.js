$(function() {
    let link = $(".m-menu-link"); // получение класса
    let close = $(".close-menu");  // получение класса
    let menu = $(".m-menu");  // получение класса

    // во время клика открывается адаптивное меню
    link.on("click", function(e) { // функция при нажатии
        e.preventDefault(); // обнуление сылки
        menu.toggleClass("m-menu__active"); // смена класса 
    });

    // во время клика закрывается адаптивное меню
    close.on("click", function(e) {
        e.preventDefault();
        menu.toggleClass("m-menu__active");
    })

    // Закртытие адаптивного меню при выборе одного изпунктов
    let adaptive_menu = $(".adaptive_menu");
    let m_menu = $(".m-menu");
    adaptive_menu.on("click", function() {
        m_menu.removeClass("m-menu__active");
    })
})

// повяление фиксированного меню 
window.onscroll = () => { // свойтсво при скроллинге 
    let showBtn = document.querySelector(".isShowBtn"); // получение id

    // появление стрелки вверх
    if(window.scrollY > 400) { // если горизонтальное положение больше 400 px
        showBtn.classList.remove("isHideBtn"); // то удаляем стрелку вверх
    }
    
    else {
        showBtn.classList.add("isHideBtn");
    }

    
    const btn = document.getElementById("scrollTop");
    btn.addEventListener("click", () => window.scrollTo({
        top:0,
        behavior: 'smooth',
    }));


    
    let header = document.querySelector(".header_main_menu");

    if(window.pageYOffset > 200) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }

}



const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


