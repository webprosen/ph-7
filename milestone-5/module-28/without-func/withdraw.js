document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Get input data
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    // Previous withdraw capture
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // Live Withdraw
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal.toFixed(2);

    // Previous balance capture
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Live Balance
    const newBalancetTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalancetTotal.toFixed(2);
    
});