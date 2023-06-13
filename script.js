/**
 * HEADER ANIMATION
 */

const header = document.querySelector(".header");
const toggleHeader = () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", toggleHeader);

/**
 * HEADER NAVIGATION
 */

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;
  const navLinks = document.querySelectorAll('a[data-nav-link]');
  const navToggleBtn = document.querySelector(".nav-toggle-btn");
  const navbar = document.querySelector(".navbar");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const targetOffsetTop = target.offsetTop;
      const newScrollPosition = targetOffsetTop - headerHeight + 10;
      window.scrollTo({
        top: newScrollPosition,
        behavior: "smooth",
      });
      
      navbar.classList.remove("active");
    });
  });

  navToggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    const targetElement = event.target;
    if (!targetElement.closest(".navbar") && !targetElement.closest(".nav-toggle-btn")) {
      navbar.classList.remove("active");
    }
  });
});

/**
 * IMAGE ANIMATION
 */
const images = document.querySelectorAll(".service-card, .branch-image");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    } else {
      entry.target.classList.remove("animated");
    }
  });
}, options);

images.forEach((image) => {
  observer.observe(image);
});

/**
 * BACKTOTOP BUTTON
 */
const backToTopButton = document.querySelector('.back-top-btn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});