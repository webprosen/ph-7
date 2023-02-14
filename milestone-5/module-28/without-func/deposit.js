document.getElementById('btn-deposit').addEventListener('click', function(){
    // Get input data
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

    // Previous deposit capture
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // Live Deposit
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal.toFixed(2);

    // Previous balance capture
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Live Balance
    const newBalancetTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalancetTotal.toFixed(2);
});