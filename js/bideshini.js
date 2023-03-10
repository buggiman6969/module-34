const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
} 

const displayUser = user => {
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML= user.results[0].gender; 
    // name
    const nameTag = document.getElementById('name')
    nameTag.innerHTML= user.results[0].name.first + ' ' + user.results[0].name.last; 
    // location
    const locationTag = document.getElementById('location')
    locationTag.innerHTML = user.results[0].location.street.number + ', ' + user.results[0].location.street.name + ', ' + user.results[0].location.city+ ', '+ user.results[0].location.state + ', ' + user.results[0].location.country+ ', ' + user.results[0].location.postcode;
}
