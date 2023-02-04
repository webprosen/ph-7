// First 100 = 100;
// 100 - 200 = 80;
// 200+ = 60;

const totalTicket = 201;
function ticketPrice(totalTicket){
    firstRate = 100;
    secondRate = 80;
    thirdRate = 60;

    if(totalTicket <= 100){
        totalPrice = firstRate * totalTicket;
    }
    else if(totalTicket <= 200){
        restTicket = totalTicket - 100;
        firstPrice = firstRate * 100;
        restPrice = secondRate * restTicket;
        totalPrice = firstPrice + restPrice;
    }
    else{
        restTicket = totalTicket - 200;
        firstPrice = firstRate * 100;
        secondPrice = secondRate * 100;
        restPrice = thirdRate * restTicket;
        totalPrice = firstPrice + secondPrice + restPrice;
    }
    return totalPrice;
}

const result = ticketPrice(totalTicket);
console.log(result);