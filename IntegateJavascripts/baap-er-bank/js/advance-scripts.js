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

// get Amonunt
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

// inputUpdate Amonunt
function inputUpdate (tempuraryDepositBalanceNumber, totalBalance) {
    let totalBalanceNumber = parseFloat(totalBalance.innerText);
    totalBalance.innerText = totalBalanceNumber += tempuraryDepositBalanceNumber;
}

// modal
function modal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const overly = document.createElement('div');
    overly.classList.add('overly');

    modal.innerHTML = `
        <div style='color: red'>Plese add valid amount</div>
        <button id="close-button">Close Modal</button>
    `;

    document.body.appendChild(modal);
    document.body.prepend(overly);
    document.body.style.overflow = 'hidden';
    
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function(e){
        document.body.removeChild(e.target.parentNode);
        document.body.removeChild(overly);
        document.body.style.overflowX = 'hidden';
    });
}

const inputs = document.getElementsByTagName('input');

for(const input of inputs) {
    input.addEventListener('keyup', function(){
        if(!(input.value)) {
            document.getElementById('withdraw-button').setAttribute('disabled', true);
            document.getElementById('deposit-button').setAttribute('disabled', true);
        } else {
            document.getElementById('withdraw-button').removeAttribute('disabled', true);
            document.getElementById('deposit-button').removeAttribute('disabled');
        }
    })
}

// handle deposit method 
document.getElementById('deposit-button').addEventListener('click', function(){

    if( document.getElementById('deposit-input').value > 0) {
        const [tempuraryDepositBalanceNumber, totalBalance] = getInput('deposit-input', 'deposit-balance');
        // Deposit Balance + Total Balance 
        inputUpdate (tempuraryDepositBalanceNumber, totalBalance);
    } else { 
        modal();
        document.getElementById('deposit-input').value = '';
    }
})

// handle withdraw method 
document.getElementById('withdraw-button').addEventListener('click', function(){
    if(document.getElementById('withdraw-input').value > 0 && document.getElementById('withdraw-input').value <= parseFloat(document.getElementById('total-balance').innerText)) {
        const [tempuraryWithdrawBalanceNumber, totalBalance] = getInput('withdraw-input', 'withdraw-balance');
        // Withdraw Balance - Total Balance  
        inputUpdate (-(tempuraryWithdrawBalanceNumber), totalBalance);
    } else {
        modal();
        document.getElementById('withdraw-input').value = '';
    }
})