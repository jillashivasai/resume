let button = document.getElementById("view-button");
button.addEventListener('click', function() {
    let portfolio = document.getElementById("resume");
    portfolio.classList.add("display-block");
    let home_page = document.getElementById("home-page");
    home_page.classList.add("display-none");
});
let back_button = document.getElementById("back-button");
back_button.addEventListener('click', function() {
    let portfolio = document.getElementById("resume");
    portfolio.classList.remove("display-block");
    let home_page = document.getElementById("home-page");
    home_page.classList.remove("display-none");
})