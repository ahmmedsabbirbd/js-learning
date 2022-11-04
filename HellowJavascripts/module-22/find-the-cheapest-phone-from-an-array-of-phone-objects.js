const phones = [
    {
        name: 'Symphony',
        price: 500,
        ram: 1,
        phoneMemory: 3
    },
    {
        name: 'oppo',
        price: 1800,
        ram: 4,
        phoneMemory: 64
    },
    {
        name: 'iphone',
        price: 10000,
        ram: 2,
        phoneMemory: 64
    }
]

function bestPhone() {
    let bestPhone = phones[0];
    
    for (const phone of phones) {
        if(bestPhone.price > phone.price) {
            bestPhone = phone;
        }
    }

    return bestPhone;
}

console.log(bestPhone());