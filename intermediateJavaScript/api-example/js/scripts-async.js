// loadQuote
const loadQuote = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => displayQuote(data))
}

loadQuote('https://api.kanye.rest/');

const displayQuote = (data) => {
    // console.log(data.quote);
    const h2 = document.createElement('h2');
    h2.innerHTML = `${data.quote}`;

    document.getElementById('quote').appendChild(h2);
}

// loadCountries
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (data) => {
    /*** Method 1
    for(const country of data) {
        const div = document.createElement('div');
        div.innerHTML = `<h3>Country: ${country.name.common}</h3>
        <p>capital: ${country.capital}</p>`;
        document.getElementById('countries').appendChild(div);
    } */

    // Method 2
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country', 'rounded-sm',  'bg-slate-200', 'p-4');
        div.innerHTML = `<h3 class="text-2xl font-bold mb-3 text-yellow-700">Country: ${country.name.common}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="countryDetails('${country.name.common}')" class="p-3 mt-5 text-white font-bold rounded-full bg-yellow-700">Details More</button>`;
        document.getElementById('countries').appendChild(div);
    })
}
loadCountries();

const countryDetails = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => loadPopup((data[0])))
}

const loadPopup = (country) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const overly = document.createElement('div');
    overly.classList.add('overly');

    modal.innerHTML = `<img class='mb-4' src=${country.flags.png}>
        <h3 class="text-2xl font-bold mb-3 text-yellow-700">Country: ${country.name.common}</h3>
        <p>Capital: ${country.capital}</p>
        <button id="close-button" class="p-3 mt-5 text-white font-bold rounded-full bg-yellow-700">Close Modal</button>
    `;

    document.body.appendChild(modal);
    document.body.prepend(overly);
    document.body.style.overflow = 'hidden';
    
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function(e){
        document.body.removeChild(e.target.parentNode);
        document.body.removeChild(overly);
        document.body.style.overflow = 'auto';
    });
}

// searchFood
const searchFoods = () => {
    const searchInput = document.getElementById('search-input');
    let searchText = searchInput.value;
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    if(searchText == '') {
        const div = document.createElement('div');
        div.classList.add('food', 'block', 'p-6', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow-md', 'hover:bg-gray-100', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:hover:bg-gray-700');
        div.innerHTML = `<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Please Search item</h5>`;
        
        document.getElementById('foods').appendChild(div);
    } else {
        fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
        .catch(err => console.log(err));
    }

    searchInput.value = '';
}

const displayFoods = data => {
    document.getElementById('foods').innerHTML = '';

    if(data) {
        data.forEach(food => {
            const div = document.createElement('div');
            div.classList.add('food', 'block', 'p-6', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow-md', 'hover:bg-gray-100', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:hover:bg-gray-700');
            div.innerHTML = `<img style='height: 300px' src=${food.strMealThumb} >
            <h5 class="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${food.strMeal}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">${food.strInstructions.slice(0, 200)}</p>
            <button onclick="foodDetails('${food.idMeal}')" class="p-3 mt-5 text-white font-bold rounded-full bg-yellow-700">Details More</button>`;
            
            document.getElementById('foods').appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.classList.add('food', 'block', 'p-6', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow-md', 'hover:bg-gray-100', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:hover:bg-gray-700');
        div.innerHTML = `<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No post founds</h5>`;
        
        document.getElementById('foods').appendChild(div);
    }
}

const foodDetails = async (foodId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    
    try{
        const res = await fetch(url);
        const data = await res.json();
        loadFood(data.meals[0]);
    } 
    catch(err) {
        console.log(err);
    }

    // fetch(url)
    // .then(res => res.json())
    // .then(data => loadFood(data.meals[0]))
}

const loadFood = (food) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const overly = document.createElement('div');
    overly.classList.add('overly');

    modal.innerHTML = `<img style='height: 500px; margin: auto;' src=${food.strMealThumb} >
    <h5 class="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${food.strMeal}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">${food.strInstructions}</p>
        <button id="close-button" class="p-3 mt-5 text-white font-bold rounded-full bg-yellow-700">Close Modal</button>`;

    document.body.appendChild(modal);
    document.body.prepend(overly);
    document.body.style.overflow = 'hidden';
    
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function(e){
        document.body.removeChild(e.target.parentNode);
        document.body.removeChild(overly);
        document.body.style.overflow = 'auto';
    });
}