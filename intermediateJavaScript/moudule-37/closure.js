// Method 1
/* const bank = woner => {
    balance = 0;

    return ammount => {
        balance += ammount;
        return balance;
    }
}

const mojishBank = bank('Mofij');


console.log(mojishBank(20));
console.log(mojishBank(20));
console.log(mojishBank.balance);
console.log(mojishBank(10)); */

const bank = woner => {
    balance = 0;

    return {
        depojit:ammount => {
            balance += ammount;
            return balance;
        },
        withdraw:ammount => {
            balance -= ammount;
            return balance;
        }
    }
}

const mojishBank = bank('Mofij');


console.log(mojishBank.depojit(20));
console.log(mojishBank.depojit(20));
console.log(mojishBank.depojit(20));
console.log(mojishBank.withdraw(59));