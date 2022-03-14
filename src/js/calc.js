//сроки
let sumTime = document.querySelector(".term");
sumTime.innerText = 0;


//стоимость
let sumCost = document.querySelector(".rezCost");
sumCost.innerText = 0;



$(".type").on("change", function() {
    let sum = 0;
    let days = 5;
    sum = sum + parseInt($(this).val()) + (days * 2000);
    days = days + parseInt($(this).val())
    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;

    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});

$(".dezine").on("change", function() {
    let sum = 0;
    let days = 5;
    sum = sum + parseInt($(this).val()) + (days * 2000);
    days = days + parseInt($(this).val())
    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;

    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});

$(".adaptive").on("change", function() {
    let sum = 0;
    let days = 5;
    sum = sum + parseInt($(this).val()) + (days * 2000);
    days = days + parseInt($(this).val())
    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum;

    let sumTime = document.querySelector(".term");
    sumTime.innerText = days;
});

//сроки
/*
$(.type + " option:selected").attr("days");
let days = 5;

let sumTime = document.querySelector(".term");
sumTime.innerText = 0;*/