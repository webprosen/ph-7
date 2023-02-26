const loadPhones = async(searchText) => {
    console.log(searchText);
    if(searchText == null || searchText == ''){
        searchText = 'iphone'
    }
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones => {

    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    if(phones.length != 0){
        phones.forEach(phone => {
            console.log(phone);
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
    } else {
        phonesContainer.innerHTML = `
            <div class="alert alert-danger mx-auto" role="alert">
                No result found!
            </div>
        `;
    }
}

document.getElementById('search-field').addEventListener('keyup', function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
});

loadPhones();