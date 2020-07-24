const filterLinks = document.querySelector(".filter-links")
const links = document.querySelectorAll(".filter-links a")
const nodeElements = document.querySelectorAll(".filter-sections div")
const elements = Array.prototype.slice.call(nodeElements)

const showClass = 'show'

filterLinks.addEventListener("click", evt => {
    let target = evt.target
    if (target.closest("a") == null) return
    const text = target.text.toLowerCase()
    renderElements(text)
})

function animateElements(array) {
    (function show(counter) {
        setTimeout(() => {
            array[counter].classList.add(showClass);
            counter++;
            if (counter < array.length) show(counter);
        }, 10);
    })(0);
}

function renderElements(text) {
    elements.forEach(value => value.classList.remove(showClass))
    if (text === "all" || !text) {
        animateElements(elements)
    } else {
        elements
            .filter(value => value.classList.contains(text))
            .forEach((value, index, array) => animateElements(array))
    }
}

renderElements()