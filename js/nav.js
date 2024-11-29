const primaryNav = document.querySelector(".primary-navigation");
const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    // Läs aktuellt tillstånd från data-visible
    const isMenuOpen = primaryNav.getAttribute("data-visible") === "open";

    // Bestäm nästa tillstånd
    const newState = isMenuOpen ? "closed" : "open";

    // Uppdatera data-visible på både primaryNav och hamburgerWrapper
    primaryNav.setAttribute("data-visible", newState);
    hamburgerWrapper.setAttribute("data-visible", newState);

    // Uppdatera aria-expanded på navToggle
    navToggle.setAttribute("aria-expanded", newState === "open" ? "true" : "false");
});

