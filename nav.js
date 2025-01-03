const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId   
 = link.getAttribute('href').substring(1); // Remove the "#"
        const targetElement = document.getElementById(targetId);   

        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});