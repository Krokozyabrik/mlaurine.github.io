//получение значения из селектов
var type = document.querySelector('.type')
type.onchange = function() { console.log(this.value); };

var dezine = document.querySelector('.dezine')
dezine.onchange = function() { console.log(this.value); };

var adaptive = document.querySelector('.adaptive')
adaptive.onchange = function() { console.log(this.value); };




//подсчет стоимости
let custSumm = 0;

//вывод Стоимости
let sumcost = document.querySelector(".rezCost");
sumcost.innerText = custSumm;

/*
//подсчет времени
let timeSumm = 0;
//вывод времени
let sumtime = document.querySelector(".term");
sumtime.innerText = timeSumm;
*/