//case 1
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, i) => {
        if(i < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

//case 2
const progress1 = document.getElementById('progress1')
const prev1 = document.getElementById('prev1')
const next1 = document.getElementById('next1')
const border = document.querySelectorAll('.border-triangle-bottom')

let currentActive1 = 1

next1.addEventListener('click', () => {
    currentActive1++

    if(currentActive1 > border.length) {
        currentActive1 = border.length
    }

    update1()
})

prev1.addEventListener('click', () => {
    currentActive1--

    if(currentActive1 < 1) {
        currentActive1 = 1
    }

    update1()
})

function update1() {
    border.forEach((border, i) => {
        if(i === currentActive1 - 1) {
            border.classList.add('active1')
        } else {
            border.classList.remove('active1')
        }
    })
    if(currentActive1 === 1) {
        prev1.disabled = true
    } else if(currentActive1 === border.length) {
        next1.disabled = true
    } else {
        prev1.disabled = false
        next1.disabled = false
    }
}