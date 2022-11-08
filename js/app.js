

//event listeners
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#menu-toggle-button')
            .addEventListener('click', menuToggle);

});

// call menuToggle function


function menuToggle(){
    let mobile_menu = document.getElementById("mobile-menu");
  
    mobile_menu.classList.toggle('hidden');
}
