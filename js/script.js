const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body'); 
const paragraph = document.querySelector('paragraph-text')
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.backgroundImage = 'url("images/white-fon.jpg")'; 
        body.style.color = '#888';
        body.style.transition = '3s';
    }else{
         body.style.backgroundImage = 'url("images/bAC.jpg")';
         body.style.backgroundSize = 'cover'
         body.style.backgroundPosition = 'center';
         body.style.backgroundRepeat = 'no-repeat';
         body.style.color = 'rgba(89, 0, 255, 0.495)';
         body.style.transition = '3s';
          
    };
})

window.addEventListener('DOMContentLoaded' , function () {
    window.addEventListener('scroll' , function () {
        const header= document.querySelector('header');
        header.classList.toggle('sticky' , window.scrollY > 0)
    })
    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItems = document.querySelectorAll(".navigation a")
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
    navigationItems.forEach(navItem =>{
        navItem.addEventListener('click', () =>{
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
            
        })
    })
    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll',() => {
        scrollBtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () => {
         document.body.scrollTop = 0; 
         document.documentElement.scrollTop = 0; 
    })

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')

        for(let i = 0; i< reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;
            
            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active')
            }1
        }

    })
})