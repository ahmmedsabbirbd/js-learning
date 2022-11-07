/*** Method 1 */
function handleClickGreen(){
    document.body.style.backgroundColor = 'green';
}

/*** Method 2 */
function handleOnblurRed(){
    document.body.style.backgroundColor = 'red';
}

/*** Method 3 */
const inputText = document.getElementById('input-text');
inputText.addEventListener('keyup', function(e){
    console.log(e.target.value);
})

/*** Method 4 */
const love = document.getElementById('love');
const loveDelete = document.getElementById('love-delete');
const loveInput = document.getElementById('love-input');

loveInput.addEventListener('keyup', deleteButtonEnable);
loveInput.addEventListener('focus', backgroundColorRed);
loveInput.addEventListener('blur', backgroundColorRedRemove);
love.addEventListener('mouseover', trueLove);
love.addEventListener('mouseleave', trueLoveRemove);
loveDelete.addEventListener('click', function loveDeleteMethod(){ 
    love.remove(love);
    loveInput.value = '';
});

function deleteButtonEnable(){
    if(loveInput.value == 'delete') {
        loveDelete.removeAttribute('disabled');
    } else {
        loveDelete.setAttribute('disabled', true);
    }
}

function backgroundColorRed(){
    document.body.style.backgroundColor = 'red';
}

function backgroundColorRedRemove(){
    document.body.style.backgroundColor = '';
}

love.style.transition = 'all .3s ease';

function trueLove(){
    love.style.color = 'red';
}

function trueLoveRemove(){
    love.style.color = 'black';
}