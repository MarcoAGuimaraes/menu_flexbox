
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
}

function selectItem() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.remove('active');
}
    
/*
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button"); // Ajuste a classe conforme necessário
    const menuItems = document.querySelectorAll(".mobile-menu a"); // Itens do menu

    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }

    menuItems.forEach(item => {
        item.addEventListener("click", selectItem);
    });
});
*/