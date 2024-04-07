//scroll section

let sections = document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');
window.onscroll = () => {
    //sticky header
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop -100;
        let height =sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset){
            navlinks.forEach(links=> {
                links.classList.remove('active');
                document/querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
//smooth scroll 
navlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
