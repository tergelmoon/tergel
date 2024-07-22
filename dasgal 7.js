let bornYear = prompt("torson onoo oruulnuu")
let bornMonth = prompt("torson saraa oruulnuu")
let bornDay = prompt("torson odoroo oruulnuu")
let nowyear = 2024
let nowmonth = 7
let nowday = 19
const a = 365
const b = 12
const c = 31
amidarsanday=(nowyear-bornYear)*a + ( b - bornMonth + nowmonth) * 31 + (c - bornDay + nowday ) - a + c
console.log(amidarsanday)