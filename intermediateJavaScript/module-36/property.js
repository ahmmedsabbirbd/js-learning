const botte = {
    color: 'red',
    price: 100,
    hold: 'watter'
};

// Only Key
const key = Object.keys(botte);
console.log(key);

// Only value
const value = Object.values(botte);
console.log(value);

// all
const entrie = Object.entries(botte);
console.log(entrie);

// Seal
Object.seal(botte);

// freeze
Object.freeze(botte);

// change value
botte.price = 80;

// Delete
delete botte.color;
console.log(botte);