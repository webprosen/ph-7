document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Get input data
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;

    // Get old withdraw data
    const dashboardWithdraw = document.getElementById('dashboard-withdraw');
    const dashboardWithdrawAmount = dashboardWithdraw.innerText;

    // Get old balance data
    const dashboardBalance = document.getElementById('dashboard-balance');
    const dashboardBalanceAmount = dashboardBalance.innerText;

    // Condition check
    if(parseFloat(dashboardBalanceAmount) >= parseFloat(newWithdrawAmount)){

        // Added withdraw amount with old withdraw amount
        const grandWithdraw = parseFloat(dashboardWithdrawAmount) + parseFloat(newWithdrawAmount);
        dashboardWithdraw.innerText = grandWithdraw.toFixed(2);

        // Added deposit with old balance
        const grandBalanceWhenWithdraw = parseFloat(dashboardBalanceAmount) - parseFloat(newWithdrawAmount);
        dashboardBalance.innerText = grandBalanceWhenWithdraw.toFixed(2);

        withdrawField.value = '';
    }

});