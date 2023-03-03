const loaCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p><i> Capital: ${ country.capital}</i></p>
        <button class="btn" onclick="loadCountryDetails('${country.cca2}')">Details</button>
        ` 
        countryContainer.appendChild(countryDiv)
        
    });
}

const loadCountryDetails =code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))

}

const showCountryDetails = country =>{
    const showCountryDetails = document.getElementById('country-details')
    showCountryDetails.innerHTML = `
    <h3>name: ${country.name.common}</h3>
    <img src="${country.flags.png}"> <br>
    <a href="https://restcountries.com/v3.1/alpha/${country.cca2}" target="_blank">country details</a>
    `
}
loaCountries();