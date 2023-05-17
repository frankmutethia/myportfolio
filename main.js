/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')
     
     
//show menu
toggleMenu.addEventListener('click', ()=>{
           navMenu.classList.toggle('show');
})

//hide menu
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})

//removing the menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


//scroll sections active link

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(ccurrent =>{
        const sectionHeight=current.offsetHeight
        const sectionTop = currednt.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav__menu a [href*=' + sectionId +']').classList.add('active')
        }else{
                document.querySelector('.nav__menu a [href*=' + sectionId +']').classList.remove('active')  
            }
    })
}


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
