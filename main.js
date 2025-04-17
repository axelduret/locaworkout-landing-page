function toggleMobileMenu() {
  const menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("open");
}

// Highlight active section in sidebar navigation
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".terms-section");
  const navLinks = document.querySelectorAll(".terms-nav a");

  function onScroll() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});
