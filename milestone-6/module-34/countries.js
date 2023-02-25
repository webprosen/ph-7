const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries');
    
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

const loadDetails = code => {
    const url = `https://restcountries.com/v2/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(details => displayDetails(details));
}

const displayDetails = details => {
    const detailsContainer = document.getElementById('country-details');
    detailsContainer.innerHTML = `
        <h3>${details.name}</h3>
        <img src="${details.flags.png}">
    `;

}

loadCountries();