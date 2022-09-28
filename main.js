const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const year = document.querySelector('.year')
const progressBar = document.querySelectorAll('.progress-bar')
const overAllLeft = document.querySelectorAll('.overall-left small')
const svg = document.querySelector('svg')
const svgRect = document.querySelector('svg rect')
const countDownDisplay = document.querySelector('.countdown')
const header = document.querySelector('.header')
const currentYear = new Date().getFullYear()

const nextYearDate = new Date(`January 01 ${currentYear + 1} 00:00:00`)

year.innerHTML = currentYear + 1

const runCountDown = () => {
    const timeAsOfNow = new Date()
    const differenceInMilliseconds = nextYearDate - timeAsOfNow

    const secondsLeft = Math.floor(differenceInMilliseconds / 1000) % 60
    const minutesLeft = Math.floor(differenceInMilliseconds / 1000 / 60) % 60
    const hoursLeft = Math.floor(differenceInMilliseconds / 1000 / 60 / 60) % 24
    const daysLeft = Math.floor(differenceInMilliseconds / 1000 / 60 / 60 /24)
    seconds.innerText = `${secondsLeft < 10 ? '0' + secondsLeft: secondsLeft}`
    minutes.innerText = `${minutesLeft < 10 ? '0' + minutesLeft: minutesLeft}`
    hours.innerText = `${hoursLeft < 10 ? '0' + hoursLeft: hoursLeft}`
    days.innerText = `${daysLeft < 10 ? '0' + daysLeft: daysLeft}`

    

    //progress bars
    const checkLeapYear = (year) => {
        if (year % 4 == 0 && year % 100 != 0) { 
            return 366
        } else if (year % 400 == 0) {
            return 366
        } else {
            return 365
        }
    } 
    //progress bars
    const progPctDay = 1 + daysLeft / checkLeapYear(currentYear) * 100
    progressBar[0].style.width = `${progPctDay}%`
    const progPctHour = 1 + (hoursLeft / 24) * 100
    progressBar[1].style.width = `${progPctHour}%`
    const progPctMinute = 1 + (minutesLeft / 60) * 100
    progressBar[2].style.width = `${progPctMinute}%`
    const progPctSecond = 1 + (secondsLeft / 60) * 100
    progressBar[3].style.width = `${progPctSecond}%`
    

    //overalls
    const secondsLeftToNewYear = Math.floor(differenceInMilliseconds / 1000)
    overAllLeft[2].innerHTML = `${secondsLeftToNewYear.toLocaleString()}  total remaining` 

    const minutesLeftToNewYear = Math.floor
    (differenceInMilliseconds / 1000 / 60)
    overAllLeft[1].innerHTML = `${minutesLeftToNewYear.toLocaleString()} total remaining` 

    const hoursLeftToNewYear = Math.floor
    (differenceInMilliseconds / 1000 / 60 / 60)
    overAllLeft[0].innerHTML = `${hoursLeftToNewYear.toLocaleString()} total remaining` 
    



}
//calling every second
setInterval(runCountDown, 1000)

setTimeout(() => {
    svg.style.width = '100px'
    svg.style.height = '100px'
    svg.style.bottom = '5px'
    svgRect.style.width = '100px'
    svgRect.style.height = '100px'
    svgRect.style.strokeWidth = '100px'
    svgRect.style.strokeDasharray = '100px'
    countDownDisplay.style.display = 'flex'
    header.style.display = 'unset'
},1000)