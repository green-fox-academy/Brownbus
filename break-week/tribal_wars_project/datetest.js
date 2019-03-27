'use strict;'

function dateStamp(){

  let current = new Date();
  let minute = 60;
  let hour = 60 * 60;
  let day = 24 * 60 * 60;
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  
  function daysInAYear(year) {
    let yearInDays = 0;
    for (let i = 0; i < 12; i++) {
      yearInDays += daysInMonth(i + 1, year)
    }
    return yearInDays
  }
  
  function timeStamper() {
    let timeStamp =
    current.getFullYear() * daysInAYear(current.getFullYear()) * day +
    (current.getMonth() + 1) * daysInMonth(current.getMonth() + 1, current.getFullYear()) * day +
    current.getDate() * day +
    current.getHours() * hour +
    current.getMinutes() * minute +
    current.getSeconds()
    return timeStamp
  }
  return timeStamper()
}
  

function dateParser(timeNumber) {
  let minute = 60;
  let hour = 60 * 60;
  let day = 24 * 60 * 60;
  let years = Math.floor(timeNumber/(day*365))
  let yearRemainder = timeNumber%(day*365)
  let months = Math.floor(yearRemainder/(day*30))
  let monthRemainder = (yearRemainder%(day*30))
  let days = Math.floor(monthRemainder/day)
  let dayRemainder = (monthRemainder%day)
  let hours = Math.floor(dayRemainder/hour)
  let hourRemainder = dayRemainder%hour
  let minutes = Math.floor(hourRemainder/minute)
  let minuteRemainder = (hourRemainder%minute)
  let seconds = Math.floor(minuteRemainder/60)
  let secondRemainder = (minuteRemainder%60)
return `${years}/${months}/${days}/${hours}:${minutes}:${secondRemainder}`
}

//console.log(dateParser(dateStamp()))
exports.dateStamp = dateStamp()
//exports.foo
