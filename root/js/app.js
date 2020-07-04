// Mobile Navbar functionality 
const navAnim = () => {
    let hamburger = document.getElementById('hamburger');  
    let nav = document.querySelector('nav'); 
    let navLinks = document.querySelectorAll('#nav_links li a');
    
    hamburger.addEventListener('click',()=>{
        nav.classList.toggle('nav_active');
        
        //link animation 
        navLinks.forEach((element, index) => {
            if(element.style.animation){
                element.style.animation = '';
            } else{
                element.style.animation =  `navLinkFade 1 ease forwards ${index / 7 + 1}s `; 
                console.log("ease");
            }
        });
    }) 
} 

navAnim();


