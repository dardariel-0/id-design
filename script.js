//animação scroll
function animacaoLeft() {
  const sections = document.querySelectorAll(".js-scroll-left");

  if (sections.length) {
    const metadeTelaUsuario = window.innerHeight * 0.85;
    // aqui puxei 70% do tamannho da tela do usuario que é a distancia q a animação vai acontecer

    function animacaoScroll() {
      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top - metadeTelaUsuario;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
  }
  animacaoScroll();

  window.addEventListener("scroll", animacaoScroll);
}
animacaoLeft();

function animacaoRight() {
  const sections = document.querySelectorAll(".js-scroll-right");

  if (sections.length) {
    const metadeTelaUsuario = window.innerHeight * 0.85;
    // aqui puxei 70% do tamannho da tela do usuario que é a distancia q a animação vai acontecer

    function animacaoScroll() {
      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top - metadeTelaUsuario;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
  }
  animacaoScroll();

  window.addEventListener("scroll", animacaoScroll);
}
animacaoRight();

//menu mobile

const btnMobile = document.querySelector(".btn-open");
const menuMobile = document.querySelector(".slide-menu");
const closeMenu = document.querySelector(".close-menu");

btnMobile.onclick = function () {
  menuMobile.classList.add("ativo");
};

closeMenu.onclick = function () {
  menuMobile.classList.remove("ativo");
};

document.onclick = function (evento) {
  if (
    !btnMobile.contains(evento.target) &&
    !menuMobile.contains(evento.target)
  ) {
    menuMobile.classList.remove("ativo");
  }
};
