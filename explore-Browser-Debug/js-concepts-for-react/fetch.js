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
];
// JSON //  JSON TO OBJECT / OBJECT TO JSON
const productStringify = JSON.stringify(products);
const productParse = JSON.parse(productStringify);
console.log(productStringify, productParse);

// fetch
fetch(url)
.then(res => res.json())
.then(data => console.log(data));

// key, value
const key = Object.keys(products);
const value = Object.values(products);

// for
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
numbers.map(num => num *2);

// loop array 'of'
// loop object 'in'

// coppy new products
const newProduct = { name: 'nokia', price: 5000, brand: 'nokia', color: 'black' };
const copyProductNewProduct = [...products, newProduct];

// remove spesic file
const specalProducts = copyProductNewProduct.filter(p => p.name !== 'watch');