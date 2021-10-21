//Burguer menu functionality
const burguerSlider = ()=>{
    const burguer = document.querySelector('.hamburguer-menu-container img');
    const nav = document.querySelector('.ul-top-menu');

    //Toggle burguer menu
    burguer.addEventListener('click',()=>{
        nav.classList.toggle('active-hamburguer');
    });
}

burguerSlider();