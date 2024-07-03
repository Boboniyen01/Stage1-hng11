
function UpdateTime (){

    let Displayday = document.getElementById('present-date')
let now= new Date()
let TodayDate = now.getUTCDay()

let DayOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
for(let i= 0; i<7; i++){
    if(i == TodayDate){
        console.log (TodayDate)
    let DateDisplayed =Displayday.textContent 
       DateDisplayed = DayOfTheWeek[i]
       Displayday.textContent = DateDisplayed
    }
}
// to display current time 
let CurrentHour = document.querySelector('.display-date .hours')
let CurrentMinutes = document.querySelector('.display-date .minute')
let CurrentSeconds = document.querySelector('.display-date .seconds')
//to display hours
let Hours = now.getHours()
CurrentHour.textContent = Hours
// to display minutes 
let Minute = now.getMinutes()
CurrentMinutes.textContent = Minute
//to display seconds
let Seconds = now.getSeconds()
CurrentSeconds.textContent = Seconds
}
UpdateTime()
setInterval(UpdateTime, 1000)

