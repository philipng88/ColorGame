let numSquares = 6
let colors = [] 
let pickedColor
let squares = document.querySelectorAll('.square') 
let colorDisplay = document.getElementById('colorDisplay')
let messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1') 
let resetButton = document.querySelector('#reset')
let modeButtons = document.querySelectorAll('.mode') 

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color 
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random] 
}

function generateRandomColors(num) {
    let arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr 
}

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

function reset() {
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent = ''
    h1.style.background = 'steelblue'
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block'
            squares[i].style.background = colors[i] 
        } else {
            squares[i].style.display = 'none';
        }
    }
}

resetButton.addEventListener('click', () => {
    reset()
})

function setModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected')
            modeButtons[1].classList.remove('selected')
            this.classList.add('selected') 
            this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6 
            reset() 
        })
    }
}

function setSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            let clickedColor = this.style.backgroundColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!'
                resetButton.textContent = 'Play Again'
                changeColors(clickedColor)
                h1.style.backgroundColor = pickedColor
            } else {
                this.style.backgroundColor = '#232323'
                messageDisplay.textContent = 'Try Again' 
            }
        })
    }
}

function init() {
    setModeButtons()
    setSquares()
    reset() 
}

init() 





