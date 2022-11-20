// const addProduct = document.getElementById('product-add');

// const saveLocalStorage = ()=> {
//     const productName = document.getElementById('product-input').value;
//     const cart = localStorage.getItem('cart');

//     let addCart;
//     if(productName) {
//         addCart = JSON.parse({name: 3, age: 3});
//     }

//     console.log(JSON.stringify(addCart));
//     // localStorage.setItem(productName, JSON.stringify(productName));

//     document.getElementById('product-input').value = '';
    
//     // showData();
// }

// addProduct.addEventListener('click', saveLocalStorage);

// // const showData = ()=> {
// //     document.getElementById('products').innerHTML = '';
    
// //     for(const [key, value] of Object.entries(localStorage)) {
        
// //         const ul = document.createElement('ul');
// //         ul.innerHTML = `<li>${JSON.parse(value)}</li>`;

// //         document.getElementById('products').appendChild(ul);
// //     }
// // }

// // showData();


// let addCart; 
// addCart = JSON.stringify({, age: 3});

// addCart = JSON.parse(addCart);
// addCart.newitem = 2;

// console.log(addCart);

// function bake_cookie(name, value) {
//     var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
//     document.cookie = cookie;
// }

// bake_cookie('car', 3);

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let carObj;

    if(cart) {
        carObj = JSON.parse(cart);
    } else {
        carObj = {};
    }

    return carObj;
}
const addProductCart = name => {
    const cart = getCart();
    console.log(cart);
    
    if(cart[name]) {
        cart[name] += 1;
    } else {
        cart[name] = 1;
    }

    const cartStingify = JSON.stringify(cart);

    console.log(cartStingify);

    localStorage.setItem('cart', cartStingify);
}