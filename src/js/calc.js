//сроки
let sumTime = document.querySelector(".term");
sumTime.innerText = 0;

//стоимость
let sumCost = document.querySelector(".rezCost");
sumCost.innerText = 0;

let sum = 0;
let days = 5;

$(".type").on("change", function() {
    if (parseInt($(this).val()) > 0) {
        sum = sum + parseInt($(this).val()) + (days * 2000);
        days = days + (parseInt($(this).val()) / 200);
    } else {
        (parseInt($(this).val()) == 0)
        sum = 0;
        days = 0;
    }

    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum.toFixed(0);
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days.toFixed(0);
});

$(".dezine").on("change", function() {
    if (parseInt($(this).val()) > 0) {
        sum = sum + parseInt($(this).val()) + (days * 1000);
        days = days + (parseInt($(this).val()) / 200)
    } else {
        (parseInt($(this).val()) == 0)
        sum = 0;
        days = 0;
    }

    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum.toFixed(0);
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days.toFixed(0);
});

$(".adaptive").on("change", function() {
    if (parseInt($(this).val()) > 0) {
        sum = sum + parseInt($(this).val()) + (days * 500);
        days = days + (parseInt($(this).val()) / 200)
    } else {
        (parseInt($(this).val()) == 0)
        sum = 0;
        days = 0;
    }

    let sumCost = document.querySelector(".rezCost");
    sumCost.innerText = sum.toFixed(0);
    let sumTime = document.querySelector(".term");
    sumTime.innerText = days.toFixed(0);
});