const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", function() {
    modal.classList.remove("d-none");
    modal.classList.add("d-block");
});

closeBtn.addEventListener("click", function() {
    modal.classList.remove("d-block");
    modal.classList.add("d-none");
})