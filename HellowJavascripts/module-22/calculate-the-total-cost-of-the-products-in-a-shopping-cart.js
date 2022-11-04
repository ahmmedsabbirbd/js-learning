const products = [
    {
        name: 'shart',
        price: 20,
        quantity: 2
    },
    {
        name: 'pant',
        price: 150,
        quantity: 2
    }
];

let totalShopPrice = 0;
for(const product of products) {
    totalShopPrice += product.price * product.quantity;
}

console.log(totalShopPrice);