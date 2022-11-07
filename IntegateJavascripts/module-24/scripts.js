const blogP = document.querySelectorAll('p');
// console.log(blogP);

for(const p of blogP) {
    p.style.color = 'white';
    p.style.padding = '40px 20px';
    p.style.backgroundColor = 'black';
}

const contentChange = document.getElementById('latest-blog-title');
contentChange.innerHTML = '<h2>Latest Title</h2>';

const secondContentChange = document.getElementById('second-blog');
secondContentChange.innerHTML = `
    <h2>Second Blog</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, et!</p>
    <ul>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, fugit.</li>
        <li>Nam veritatis provident blanditiis consequatur voluptatem facilis accusantium nobis optio!</li>
    </ul>`;

const friends = document.getElementById('friends');
// console.log(friends.childNodes);

const second = friends.children[1];
// console.log(friends.removeChild(second));

friends.removeChild(second);

const four = document.createElement('li');
four.innerText = 'Friends 4';

// friends.prepend(four);
// friends.append(four);
friends.appendChild(four);
console.log(friends);