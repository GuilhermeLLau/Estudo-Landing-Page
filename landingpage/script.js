const btnMobile = document.getElementById('btn-mobile');

function Ativar () {
    const Nav = document.getElementById('nav-menu');
    Nav.classList.toggle('ativo');
}

btnMobile.addEventListener('click',Ativar);