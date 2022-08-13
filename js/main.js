let elOpen = document.querySelector(".site-header__burger")
let elList = document.querySelector(".site-header__nav");

elOpen.addEventListener("click", ()=> {
    elList.classList.toggle("site-header__list-on")
})
