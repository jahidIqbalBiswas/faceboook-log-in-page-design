var btn = document.querySelector(".crBtn");
var page = document.querySelector(".signUpPage");
var back = document.querySelector(".back");
btn.addEventListener("click", function() {
    page.classList.add("openPage");
});
back.addEventListener("click", function() {
    page.classList.remove("openPage");
});