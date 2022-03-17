//сроки
let sumTime = document.querySelector(".term");
sumTime.innerText = 0;

//стоимость
let sumCost = document.querySelector(".rez-cost");
sumCost.innerText = 0;

let sum = 0;
let days = 0;
let sum1 = 0;
let days1 = 0;
let sum2 = 0;
let days2 = 0;



$(".type").on("change", function() {
    if (parseInt($(this).val()) > 0) {
        sum = parseInt($(this).val()) + (5 * 2000);
        days = 5 + (parseInt($(this).val()) / 200);
    } else {
        (parseInt($(this).val()) == 0)


        sum = 0;
        days = 0;
        sum1 = 0;
        days1 = 0;
        sum2 = 0;
        days2 = 0;

    }


    sumCost.innerText = +sum.toFixed(0) + +sum1.toFixed(0) + +sum2.toFixed(0);
    sumTime.innerText = +days.toFixed(0) + +days1.toFixed(0) + +days2.toFixed(0);

});

$(".dezine").on("change", function() {
    if (parseInt($(this).val()) > 0) {
        sum1 = parseInt($(this).val()) + (5 * 1000);
        days1 = 5 + (parseInt($(this).val()) / 200)
    } else {
        (parseInt($(this).val()) == 0)
        sum = 0;
        days = 0;
        sum1 = 0;
        days1 = 0;
        sum2 = 0;
        days2 = 0;
    }


    sumCost.innerText = +sum.toFixed(0) + +sum1.toFixed(0) + +sum2.toFixed(0);
    sumTime.innerText = +days.toFixed(0) + +days1.toFixed(0) + +days2.toFixed(0);
});


$(".adaptive").on("change", function() {
    if (parseInt($(this).val()) > 0) {
        sum2 = parseInt($(this).val()) + (5 * 500);
        days2 = 5 + (parseInt($(this).val()) / 200)
    } else {
        (parseInt($(this).val()) == 0)
        sum = 0;
        days = 0;
        sum1 = 0;
        days1 = 0;
        sum2 = 0;
        days2 = 0;
    }

    sumCost.innerText = +sum.toFixed(0) + +sum1.toFixed(0) + +sum2.toFixed(0);
    sumTime.innerText = +days.toFixed(0) + +days1.toFixed(0) + +days2.toFixed(0);
});