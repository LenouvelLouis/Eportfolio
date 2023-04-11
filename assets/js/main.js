/*==================== MENU SHOW Y HIDDEN ====================*/
window.addEventListener("load",init);
var navMenu;
var skillsContent;
var skillsHeader;
var target;
function init(){
    navMenu = document.getElementById("nav-menu");
    var navToggle = document.getElementById('nav-toggle');
    var navClose = document.getElementById('nav-close');
    var navLink = document.querySelectorAll('.nav__link');
    navLink.forEach(n=>n.addEventListener('click',linkAction));
    skillsContent=document.getElementsByClassName('skills__content');
    skillsHeader=document.querySelectorAll('.skills__header');
    var tabs = document.querySelectorAll('[data-target]');
    var tabContents = document.querySelectorAll('[data-content]');
    /*==================== QUALIFICATION ====================*/
    tabs.forEach(tab=>{
        tab.addEventListener('click',()=>{
            target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tabContents=>{
                tabContents.classList.remove('qualification__active');
            })
            target.classList.add('qualification__active');

            tabs.forEach(tab=>{
                tab.classList.remove('qualification__active');
            })
            tab.classList.add('qualification__active');
        })
    })

    skillsHeader.forEach((el)=>{
        el.addEventListener('click',toggleSkills);
    })
    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu');
        })
    }
    
    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu');
        })
    }

}


/*==================== REMOVE MENU MOBILE ====================*/
function toggleSkills(){
    var itemClass = this.parentNode.className;
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass==='skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}



function linkAction(){
    navMenu.classList.remove('show-menu');
}

/*==================== EPORTFOLIO ====================*/ 

var swiper=new Swiper('.portfolio__container',{
    cssMode:true,
    loop: true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
});


/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})