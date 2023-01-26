const timeElement = document.querySelector('.time')
const startBtn = document.getElementById ('start')
const stopBtn = document.getElementById ('stop')
const resetBtn = document.getElementById ('reset')

let seconds = 56
let interval = null

startBtn.addEventListener('click', start)

function timer() {
    seconds++

    // formats for time
    let secs = seconds % 60
    let mins = Math.floor((seconds - hrs * 3600) / 60)
    let hrs = Math.floor(seconds / 3600) // 60 * 60

    if (secs < 10) secs ='0' + secs
    if (mins < 10) mins ='0' + mins
    if (hrs < 10) hrs = '0' + hrs

    timeElement.innerText = `${hrs}:${mins}:${secs}`
}

function start() {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval)
    interval = null
}

function reset() {
    stop()
    seconds = 0
    timeElement.innerText = '00:00:00'
}