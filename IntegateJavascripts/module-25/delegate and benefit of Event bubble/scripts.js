const listContainer = document.getElementById('list-container');
const addItem = document.getElementById('add-item');
const items = document.getElementsByClassName('item');

/*** Method 1
for ( const item of items) {
    item.addEventListener('click', function(e){
        // item.parentElement.removeChild(item);
        // e.target.parentElement.removeChild(item);
        e.target.parentNode.removeChild(e.target);
    })
}


addItem.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = 'New Item';
    // li.setAttribute('class', 'item');
    // li.classList.add('item');

    listContainer.appendChild(li);

    for ( const item of items) {
        item.addEventListener('click', function(e){
            // item.parentElement.removeChild(item);
            // e.target.parentElement.removeChild(item);
            e.target.parentNode.removeChild(e.target);
        })
    }
})
*/

// for ( const item of items) {
//     item.addEventListener('click', function(e){
//         // item.parentElement.removeChild(item);
//         // e.target.parentElement.removeChild(item);
//         e.target.parentNode.removeChild(e.target);
//     })
// }

// Method 2
addItem.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = 'New Item';

    listContainer.appendChild(li);
})

listContainer.addEventListener('click', function(e){
    console.log(e.target);
    listContainer.removeChild(e.target);
})