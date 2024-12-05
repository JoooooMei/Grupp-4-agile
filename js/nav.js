// Select elements
const primaryNav = document.querySelector(".primary-navigation");
const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
const navToggle = document.querySelector(".mobile-nav-toggle");

// Function to manage `aria-hidden` based on menu state and screen size
const updateAriaHidden = () => {
    const isMenuOpen = primaryNav.getAttribute("data-visible") === "open"; // Check if the menu is open
    const isSmallScreen = window.innerWidth < 768; // Check if the screen width is less than 768px

    // Set aria-hidden based on menu state and screen size
    if (isSmallScreen) {
        primaryNav.setAttribute("aria-hidden", isMenuOpen ? "false" : "true");
    } else {
        primaryNav.removeAttribute("aria-hidden"); // Remove aria-hidden for larger screens
    }
};

// Add event listener for click events on the nav toggle button
navToggle.addEventListener('click', () => {
    const isMenuOpen = primaryNav.getAttribute("data-visible") === "open"; // Check current menu state

    const newState = isMenuOpen ? "closed" : "open"; // Toggle between "open" and "closed"

    primaryNav.setAttribute("data-visible", newState); // Update menu state
    hamburgerWrapper.setAttribute("data-visible", newState); // Update hamburger wrapper state

    navToggle.setAttribute("aria-expanded", newState === "open" ? "true" : "false"); // Update aria-expanded

    // Update aria-hidden attribute after the menu state changes
    updateAriaHidden();
});

// Add event listener to monitor screen size changes
window.addEventListener('resize', updateAriaHidden);

// Call the function on page load to ensure the correct aria-hidden state is applied
updateAriaHidden();
