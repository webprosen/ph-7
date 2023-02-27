// Fetch API
const loadPhones = async(searchText, dataLimit) => {
    if(searchText == null){
        searchText = 'iphone';
    }
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

// Display data on homepage
const displayPhones = (phones, dataLimit) => {
    console.log(dataLimit);
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';

    // Limit data & Show all
    const loadMore = document.getElementById('load-more');
    if(dataLimit && phones.length > dataLimit){
        phones = phones.slice(0, dataLimit);
        loadMore.classList.remove('d-none');
    } else {
        loadMore.classList.add('d-none');
    }

    // Not found message
    const notFound = document.getElementById('not-found-message');
    if(phones.length === 0){
        notFound.classList.remove('d-none');
    } else {
        notFound.classList.add('d-none');
    }

    // Item added here
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card p-4">
                <img src="${phone.image}" class="" alt="" width="160">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });
    // Loading off
    loadingSpinner(false);
}

const processSearch = (dataLimit) => {
    // Loading start
    loadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

// Search button 
document.getElementById('btn-search').addEventListener('click', function(){
    processSearch(5);
});

document.getElementById('search-field').addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        processSearch(5);
    }
});

// Loading spinner
const loadingSpinner = isLoading => {
    const loader = document.getElementById('loader');
    if(isLoading){
        loader.classList.remove('d-none');
    } else {
        loader.classList.add('d-none');
    }
}

// Load more 
document.getElementById('load-more').addEventListener('click', function(){
    processSearch();
});

loadPhones();