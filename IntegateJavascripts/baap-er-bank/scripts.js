const submitButton = document.getElementById('submit-login');

// login method
if (submitButton) {
    submitButton.addEventListener('click', function(){
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        // check email and password
        if(email.value == 'ahmmedsabbirbd@gmail.com' && password.value == 1234567890) {
            window.location.href = 'banking.html';
        } else {
            alert('Please type valid password');
        }
    });
}

// handle deposit method
const depositButton = document.getElementById('deposit-button');
const depositInput = document.getElementById('deposit-input');
const depositBalance = document.getElementById('deposit-balance');
const totalBalance = document.getElementById('total-balance');

depositButton.addEventListener('click', function(){
    // Deposit Balance
    let depositBalanceNumber = parseFloat(depositBalance.innerText);
    const tempuraryDepositBalanceNumber = parseFloat(depositInput.value);
    depositBalance.innerText = depositBalanceNumber += tempuraryDepositBalanceNumber;
    depositInput.value = '';

    // Deposit Balance + Total Balance 
    let totalBalanceNumber = parseFloat(totalBalance.innerText);
    totalBalance.innerText = totalBalanceNumber += tempuraryDepositBalanceNumber;
})

// handle withdraw method 
const withdrawBalance = document.getElementById('withdraw-balance');
const withdrawInput = document.getElementById('withdraw-input');
const withdrawButton = document.getElementById('withdraw-button');

withdrawButton.addEventListener('click', function(){
    // Withdraw Balance
    let withdrawBalanceNumber = parseFloat(withdrawBalance.innerText);
    const tempuraryWithdrawBalanceNumber = parseFloat(withdrawInput.value);
    withdrawBalance.innerText = withdrawBalanceNumber += tempuraryWithdrawBalanceNumber;
    withdrawInput.value = '';

    // Withdraw Balance - Total Balance 
    let totalBalanceNumber = parseFloat(totalBalance.innerText);
    totalBalance.innerText = totalBalanceNumber -= tempuraryWithdrawBalanceNumber;
})