prompt('Сколько Вам лет?')
let new Date = prompt
function myThisAge() {
    let now = new Date(),
         birthdate = new Date("1978-10-19"),
         diff = now.getTime() - birthdate.getTime(),
         years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)),
         months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))),
         days = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.24 / 12))) / (1000 * 60 * 60 * 24)),
         hours = now.getHours(),
         minutes = now.getMinutes(),
         seconds = now.getSeconds();

    out.innerHTML = `<div id="my_age">Претус Игорь<br>
         ${years} года |
         ${months} месяцев | 
         ${days} дней | ${hours} часов | 
         ${minutes} минут | ${seconds} секунд</div>`
}

setInterval(myThisAge, 1000)