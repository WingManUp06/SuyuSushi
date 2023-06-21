const bar = document.querySelectorAll(".bar-container")

const navMenu = document.querySelector(".nav-menu")

bar.forEach((bar) => {
    bar.addEventListener("click", () => {
        // toggle class
        console.log("clicked")
        navMenu.classList.toggle("view")
    })
})
