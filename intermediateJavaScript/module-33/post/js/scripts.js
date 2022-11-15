// POST
function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            tilte: 'New title',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, commodi.'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

// PUT
function addPut(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}

// PATCH
function addPatch(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

// DELETE
function addDelete(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
        body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

// CRUD - Create Read Update Delete