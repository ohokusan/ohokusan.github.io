document.addEventListener("DOMContentLoaded", function () {
    const scrollDiv = document.querySelector("header");
    const logo = document.querySelector(".logo");
    const menuIcon = document.querySelector(".menu-icon-svg");

    const listItems = document.querySelectorAll(".awards li");

    listItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            // Hide all additional text elements
            item.classList.toggle("active");
        });
    });

    window.addEventListener("scroll", function () {
        // Check if the scroll position is greater than 20px
        if (window.scrollY > 20) {
            scrollDiv.style.background = "var(--main-white)";
            scrollDiv.style.color = "var(--Text-Grey)";
            logo.src = "./images/logo-dark.svg";
            menuIcon.src = "./images/MenuIcon-dark.svg";
        } else {
            // If not, revert to the original background color
            scrollDiv.style.background = "none";
            scrollDiv.style.color = "var(--Text-White)";
            logo.src = "./images/logo.svg";
            menuIcon.src = "./images/MenuIcon.svg";
        }
    });
});
