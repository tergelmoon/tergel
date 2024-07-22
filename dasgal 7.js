let bornYear = 1995
let bornMonth = 11
let bornDay = 28
let nowyear = 2024
let nowmonth = 7
let nowday = 19
const a = 365
const b = 12
const c = 31
amidarsanday=(nowyear-bornYear)*a + ( b - bornMonth + nowmonth) * 31 + (c - bornDay + nowday ) - a + c
console.log(amidarsanday)