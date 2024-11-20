
// Closes the cookie banner when either accept or decline button is clicked
document.addEventListener("DOMContentLoaded", function () {
    const acceptButton = document.querySelector(".accept-button");
    const declineButton = document.querySelector(".decline-button");

    function close() {
        const elementID = document.getElementById("cookie-banner");
        elementID.style.display = "none";
    }

    acceptButton.addEventListener("click", close);
    declineButton.addEventListener("click", close);
});