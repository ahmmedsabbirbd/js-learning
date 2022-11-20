const alertMessage = ()=> {
    alert('Alert sms');
}

const askPicni = ()=> {
    const picnic = confirm('Are you go');
    console.log(picnic);

    if(picnic) {
        alert('Congragulation');
    } else {
        alert('tui pake jaiya mor');
    }
}

const nameCollect = ()=> {
    const name = prompt('Type your  name');
    if(name) {
        console.log(name);
    }
}