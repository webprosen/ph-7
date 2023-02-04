function paperRequirements(bookOneQty, bookTwoQty, bookThreeQty){
    bookOnePaper = 100;
    bookTwoPaper = 200;
    bookThreePaper = 300;

    bookOne = bookOnePaper * bookOneQty;
    bookTwo = bookTwoPaper * bookTwoQty;
    bookThree = bookThreePaper * bookThreeQty;
    
    totalPapers = bookOne + bookTwo + bookThree;
    return totalPapers;
}

const result = paperRequirements(0, 0, 1);
console.log(result);