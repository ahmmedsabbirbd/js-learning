const cards = document.querySelectorAll('.card');
const buyButtons = document.querySelectorAll('.card a');
let images = [];

for(const card of cards) {
    card.style.transition = 'all .3s ease';    
    card.addEventListener('mouseenter', cardHover);
    card.addEventListener('mouseleave', cardHoverRemove);
    const imageUrl = card.getElementsByTagName('img')[0].attributes.src;
    images.push(imageUrl);
}

function cardHover(e){
    e.target.style.borderRadius = '50px';
    e.target.style.backgroundColor = '#ff8b0f';
    // e.target.getElementsByTagName('img')[0].setAttribute('src', 'assets/img/card-3.jpg');
}


function cardHoverRemove(e){
    e.target.style.borderRadius = '20px';
    e.target.style.backgroundColor = '#e38826';
    
    /*** for(const imageUrl of images) {
        console.log(imageUrl);
    } */
}

for(const buyButton of buyButtons){
    buyButton.addEventListener('click', addBuy);
}

function addBuy(e){
    e.preventDefault();
    const tempuraryCard = e.target.parentNode.parentNode;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    const overly = document.createElement('div');
    overly.classList.add('overly');

    modal.innerHTML = ` 
        ${tempuraryCard.innerHTML}
        <div style='color: red'>This product not available</div>
        <button id="close-button">Close Modal</button>
    `;

    document.body.appendChild(modal);
    document.body.prepend(overly);
    
    const removeBuy = document.querySelector('.modal a');
    removeBuy.parentNode.removeChild(removeBuy);

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function(e){
        document.body.removeChild(e.target.parentNode);
        document.body.removeChild(overly);
    });
}

// Form
const emailInput = document.getElementById('email-input'); 
const contactSubmit = document.getElementById('contact-submit');

emailInput.addEventListener('keyup', formValidation);

function formValidation(e){
    const emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    
    if(emailCheck.test(e.target.value)) {
        contactSubmit.removeAttribute('disabled');
    } else {
        contactSubmit.setAttribute('disabled', true);
    }
}
