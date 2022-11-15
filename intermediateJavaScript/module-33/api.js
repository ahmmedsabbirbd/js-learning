function dataLoad(url){ 
    fetch(url).then(res => res.json())
    .then(data => console.log(data));
}

// console.log(dataLoad('https://jsonplaceholder.typicode.com/todos/1'));

function dataTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => console.log(data))
}

// dataTodos();

function dataPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => console.log(data))
}

// dataPhotos();

function dataUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data));
}

function displayUser(data) {
    console.log(data);

    for(const user of data) {
        console.log(user);

        const disUser = document.createElement('div');
        disUser.classList.add('user`')
        disUser.innerHTML = `<h2>${user.name}</h2>
        <p>email: ${user.email}</p>
        <p>phone: ${user.phone}</p>`;

        document.getElementById('user-wrapper').prepend(disUser);
    }
}

// displayUser();
dataUsers();