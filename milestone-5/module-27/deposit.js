document.getElementById('btn-deposit').addEventListener('click', function () {
    // Get input data
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    // Get old deposit data
    const dashboardDeposit = document.getElementById('dashboard-deposit');
    const dashboardDepositAmount = dashboardDeposit.innerText;

    // Get old balance data
    const dashboardBalance = document.getElementById('dashboard-balance');
    const dashboardBalanceAmount = dashboardBalance.innerText;

    // Check input false attempt
    if(parseFloat(newDepositAmount) > 0){
        // Added deposit amount with old deposit amount
        const grandDeposit = parseFloat(dashboardDepositAmount) + parseFloat(newDepositAmount);
        dashboardDeposit.innerText = grandDeposit.toFixed(2);

        // Added deposit with old balance
        const grandBalanceWhenDeposit = parseFloat(dashboardBalanceAmount) + parseFloat(newDepositAmount);
        dashboardBalance.innerText = grandBalanceWhenDeposit.toFixed(2);

        // Clear input field
        depositField.value = '';
    }

});