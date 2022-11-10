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

function getInput (input, balanceDeWi) {
    const inputNumber = document.getElementById(input);
    const balance = document.getElementById(balanceDeWi);
    const totalBalance = document.getElementById('total-balance');
    
    let balanceNumber = parseFloat(balance.innerText);
    const tempuraryBalanceNumber = parseFloat(inputNumber.value);
    balance.innerText = balanceNumber += tempuraryBalanceNumber;
    inputNumber.value = '';

    return [tempuraryBalanceNumber, totalBalance];
}

// handle deposit method 
document.getElementById('deposit-button').addEventListener('click', function(){
    const [tempuraryDepositBalanceNumber, totalBalance] = getInput('deposit-input', 'deposit-balance');
    
    // Deposit Balance + Total Balance 
    let totalBalanceNumber = parseFloat(totalBalance.innerText);
    totalBalance.innerText = totalBalanceNumber += tempuraryDepositBalanceNumber;
})

// handle withdraw method 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const [tempuraryWithdrawBalanceNumber, totalBalance] = getInput('withdraw-input', 'withdraw-balance');
    
    // Withdraw Balance - Total Balance  
    let totalBalanceNumber = parseFloat(totalBalance.innerText);
    totalBalance.innerText = totalBalanceNumber -= tempuraryWithdrawBalanceNumber;
})