const kalkulatorScreen = document.querySelector(".kalkulator-screen")

const updateScreen = (number) => {
    kalkulatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

number.foreach((number) => {
number.addEventListener("click", (event) => {
    updateScreen(event.target.value)
})
})