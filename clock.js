// Clock 3
const time = document.querySelectorAll('.time')
const ampm = document.querySelectorAll('.ampm')
const dayOfWeek = document.querySelectorAll('.day')
const month = document.querySelectorAll('.month')
const date = document.querySelectorAll('.date')

const day_list = ['Sun', 'Mon', 'Tue', 'Wed', 
                    'Thu', 'Fri', 'Sat',]

const month_list = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                    'Jun', 'July', 'Aug', 'Sept', 'Oct',
                    'Nov', 'Dec']
            
function format(val) {
    if(val < 10) {
        return "0"
    }
    else {
        return ""
    }
}

function clock(d, i) {
    let h = d.getHours()
    ampm[i].innerHTML = h>=12 ? 'PM' : 'AM'

    h = h>12 ? h-12 : h
    let m = d.getMinutes()
    let s = d.getSeconds()
    let t = format(h) + h + ":" + format(m) + m + ":" + format(s) + s
    
    time[i].innerHTML = t
    dayOfWeek[i].innerHTML = day_list[d.getDay()]
    month[i].innerHTML = month_list[d.getMonth()]
    date[i].innerHTML = d.getDate()
}

function zones() {
    let d = new Date()
    let d1 = new Date (d.toLocaleString("en-US", {timeZone: 'Asia/Kolkata'}))
    let d2 = new Date (d.toLocaleString("en-US", {timeZone: 'America/Chicago'}))
    let d3 = new Date (d.toLocaleString("en-US", {timeZone: 'Europe/London'}))
    
    clock(d1, 0)
    clock(d2, 1)
    clock(d3, 2)
}

// Updating the time every second
setInterval(zones, 1000);
