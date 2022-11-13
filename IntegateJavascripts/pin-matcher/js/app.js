function getPin() {
    const pin = Math.floor(Math.random() * 10000);
    const pinString = pin + '';

    if(pinString.length >= 4) {
        return pin;
    } else {
        return getPin();
    }
}

document.getElementById('generate-btn').addEventListener('click', function(){
    document.getElementById('display-pin').value = getPin();
})

document.getElementById('calc-keyboard').addEventListener('click', function(e){
    const number = e.target.innerHTML;

    if(number == 'C') {
        document.getElementById('type-pin').value = '';
    } else if(!isNaN(number)){
        document.getElementById('type-pin').value += number;
    }
})

document.getElementById('submit-btn').addEventListener('click', function(){
    let displayPin = document.getElementById('display-pin');
    let typePin = document.getElementById('type-pin');
    const succesMessage = document.getElementById('notify-succes');
    const failedMessage = document.getElementById('notify-failed');
    
    if(displayPin.value == typePin.value) {
        console.log('verified');
        
        // displayPin.value = '';
        // typePin.value = '';
        succesMessage.style.display = 'block'
        failedMessage.style.display = 'none'
    } else {
        console.log('not mached')
        succesMessage.style.display = 'none'
        failedMessage.style.display = 'block'
    }
})