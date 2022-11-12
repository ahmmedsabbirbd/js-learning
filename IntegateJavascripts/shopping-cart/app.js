function updateProduct(productName, productPrice, incresing){
    // quantity update 
    const quantity = document.getElementById(productName + '-number');
    let finalQuantity = quantity.value;

    if(incresing) {
        finalQuantity = parseInt(quantity.value) + 1;
    } else if (quantity.value > 0){
        finalQuantity = parseInt(quantity.value) - 1;
    }
    quantity.value = finalQuantity;

    // price update 
    const quantifyPrice = document.getElementById(productName + '-total');
    const finalquantifyPrice = finalQuantity * productPrice;
    quantifyPrice.innerHTML = finalquantifyPrice;
    
    totalAmmount();
    tax();
}

function subTotal(subProduct) {
    const sunbproductPrice = document.getElementById(subProduct + '-total');
    return sunbproductPrice;
}

function tax(){
    const subTotalPrice = document.getElementById('sub-total');
    const taxAmount = document.getElementById('tax-amount');
    const taxTotalAmount = parseInt(subTotalPrice.innerHTML) / 5;
    
    taxAmount.innerHTML = taxTotalAmount;
    
    const totalPrice = document.getElementById('total-price');
    const finalTotalPrice = Number(subTotalPrice.innerHTML) + Number(taxAmount.innerHTML);

    totalPrice.innerHTML = finalTotalPrice;
}

function totalAmmount(){
    const productTotalPrice = subTotal('phone');
    const caseproductTotalPrice = subTotal('case');
    let subTotalPrice = document.getElementById('sub-total');
    subTotalPrice.innerHTML = parseInt(productTotalPrice.innerHTML) + parseInt(caseproductTotalPrice.innerHTML);
}

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct('phone', 1219, false);
})

document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProduct('case', 59, false);
})