// Method 1 indexOf()
const products = [
    'vivo 4gb 64gb Led ',
    'symphony 1gb 8gb led lower bugget',
    'laptop 12gb',
];

const searching = 'lEd';

let output = [];

for(product of products) {
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}

// console.log(output);

// Method 2 includes()
const products1 = [
    'vivo 4gb 64gb Led ',
    'symphony 1gb 8gb led lower bugget',
    'laptop 12gb symphony',
];

const searching1 = 'lEd';

let output1 = [];

for(product of products1) {
    if(product.toLowerCase().includes(searching1.toLowerCase())) {
        output1.push(product);
    }
}

// console.log(output1);

// Method 3 startsWith() and endsWith()
const products2 = [
    'vivo 4gb 64gb Led ',
    'dell symphony  1gb 8gb led lower bugget',
    'dell laptop 12gb symphony',
];

const searching2 = 'Dell';

let output2 = [];

for(product of products2) {
    if(product.toLowerCase().startsWith(searching2.toLowerCase())) {
        output2.push(product); 
    }
}

console.log(output2);