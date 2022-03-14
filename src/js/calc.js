//сроки
let sumTime = document.querySelector(".term");
sumTime.innerText = 0;


//стоимость
let sumCost = document.querySelector(".rezCost");
sumCost.innerText = 0;


let sum = 0;
let days = 5;


$(".type").on("change", function() {
    sum = sum + parseInt($(this).val()) + (days * 2000);
    days = days + parseInt($(this).val())

    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});


$(".dezine").on("change", function() {
    sum = sum + parseInt($(this).val()) + (days * 2000);
    days = days + parseInt($(this).val())


    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});

$(".adaptive").on("change", function() {

    sum = sum + parseInt($(this).val()) + (days * 2000);
    days = days + parseInt($(this).val())


    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});