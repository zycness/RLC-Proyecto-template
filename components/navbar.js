const navbar = document.querySelector(".navbar");
const navbarItems = document.querySelector(".navbar__list");
const navbarBtn = document.querySelector(".navbar__open");
const navbarLink = document.querySelectorAll(".navbar__list-item__link");

// Abrir navbar cuando esté en celular

window.onscroll = () => {
  let top = window.scrollY;
  // 4.5rem = 72px, le restamos para que el inicio del evento en la pantalla
  // se ejecute una vez el navbar toca la siguiente section
  let vh = window.innerHeight - 72;
  if (top >= vh) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
    navbar.classList.remove("show");
  }
};

navbarBtn.addEventListener("click", () => {
  let top = window.scrollY;
  // 4.5rem = 72px, le restamos para que el inicio del evento en la pantalla
  // se ejecute una vez el navbar toca la siguiente section
  let vh = window.innerHeight - 72;
  if (top <= vh) {
    navbar.classList.toggle("active");
  }
  navbarItems.classList.toggle("show");
});

navbarLink.forEach((item) => {
  item.addEventListener("click", () => {
    if (navbarItems.classList.contains("show")) {
      navbar.classList.toggle("active");
      navbarItems.classList.toggle("show");
    }
  });
});
