const products = [
    {
        name: 'laptop',
        price: 45000,
        brand: 'lenevo',
        color: 'black'
    },
    {
        name: 'watch',
        price: 3000,
        brand: 'samor',
        color: 'yellow'
    },
    {
        name: 'oppo a7s',
        price: 17000,
        brand: 'oppo',
        color: 'black'
    }
]

// 1. map coppy array of object
const brands = products.map(product  => product.brand);// return
const prices = products.map(product  => product.price); // return

console.log(brands, prices);

// 2. forEach
products.forEach(product => console.log(product)) // not return
products.forEach(product => console.log(product.color)) // not return

// 3. fillter
const fillterPrice = products.filter(product => product.price <= 5000);
console.log(fillterPrice);

const specificFillter = products.filter(p => p.name.includes('o'))
console.log(specificFillter);

// 4. find
const specal = products.find(product => product.name.includes('oppo'));
console.log(specal);