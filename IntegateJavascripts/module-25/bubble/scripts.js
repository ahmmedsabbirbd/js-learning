const sectionContainer = document.getElementById('section-container');
const listContainer = document.getElementById('list-container');
const secondItem = document.getElementById('second-item');

secondItem.addEventListener('click', function(e){
    console.log('Second item click');

    // e.stopPropagation(); // stop propation
    // e.stopImmediatePropagation(); // stop propation
});

secondItem.addEventListener('click', function(e){
    console.log('Second 1 item click');
});

secondItem.addEventListener('click', function(e){
    console.log('Second 2 item click');
});

listContainer.addEventListener('click', function(){
    console.log('ul click');
});

sectionContainer.addEventListener('click', function(){
    console.log('section click');
});