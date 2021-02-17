const clockContents = document.querySelector(".clock-contents")
const amElement = document.querySelector('.clock-am')
const pmElement = document.querySelector('.clock-pm')

function updateTime(){
  let mode = 'am'
  const now = new Date()
  const hour = now.getHours() % 12
  const minute = now.getMinutes()
  const second = now.getSeconds()
  const text = `${hour >= 10 ? hour : '0'+hour}:${minute >= 10 ? minute : '0'+minute}:${second >= 10 ? second : '0'+second}`
  if (mode === 'pm') {
    pmElement.classList.add('active')
    amElement.classList.remove('active')
  }
  else if (mode === 'am') {
    amElement.classList.add('active')
    pmElement.classList.remove('active')
  }
  clockContents.textContent = text
  setTimeout(updateTime, 1000)
}

updateTime()
