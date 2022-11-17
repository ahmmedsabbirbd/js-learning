const welcome = (name, sms) => {
    return name + sms();
}

const message = () => {
    return '. Kmn acho??'
}

console.log(welcome('Hi Sabbir', message))