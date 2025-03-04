let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// numeros
function contagemMaior() {
  const counters = document.querySelectorAll(".counters .maior");
  const container = document.querySelector(".counters");
  let activated = false;

  const telaUsuario = window.innerHeight * 0.9;

  window.addEventListener("scroll", () => {
    if (scrollY > telaUsuario - 0 && activated === false) {
      counters.forEach((counter) => {
        counter.innerText = 0;
        let count = 0;
        function uptadeCount() {
          const target = parseInt(counter.dataset.count);
          if (count < target) {
            count++;
            counter.innerText = count;
            setTimeout(uptadeCount, 1);
          } else {
            counter.innerText = target;
          }
        }
        uptadeCount();
        activated = true;
      });
    } else if (
      scrollY < telaUsuario - 500 ||
      (scrollY === 0 && activated === true)
    ) {
      counters.forEach((counter) => {
        counter.innerText = 0;
      });
      activated = false;
    }
  });
}

contagemMaior();

function contagemMenor() {
  const counters = document.querySelectorAll(".counters .menor");
  const container = document.querySelector(".counters");
  let activated = false;

  const telaUsuario = window.innerHeight * 0.9;

  window.addEventListener("scroll", () => {
    if (scrollY > telaUsuario - 0 && activated === false) {
      counters.forEach((counter) => {
        counter.innerText = 0;
        let count = 0;
        function uptadeCount() {
          const target = parseInt(counter.dataset.count);
          if (count < target) {
            count++;
            counter.innerText = count;
            setTimeout(uptadeCount, 250);
          } else {
            counter.innerText = target;
          }
        }
        uptadeCount();
        activated = true;
      });
    } else if (
      scrollY < telaUsuario - 500 ||
      (scrollY === 0 && activated === true)
    ) {
      counters.forEach((counter) => {
        counter.innerText = 0;
      });
      activated = false;
    }
  });
}

contagemMenor();

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
