const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    console.log(visibility);
    if (visibility === "closed") {
        primaryNav.setAttribute("data-visible", "open");
    } else {
        primaryNav.setAttribute("data-visible", "closed");
    }
});
