const rootElement = document.documentElement
const scrollToTopBtn = document.getElementById("footerButton")

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop)


export { scrollToTop };