const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API} ${data.results[0].id}`)
    })
    .then(data => {
        console.log(`Name: ${data.name}\nSpecie: ${data.species}\nGender: ${data.gender}\nStatus: ${data.status}`)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(`Location: ${data.name}\n${data.dimension}`)
    })
    .catch(err => console.error(err));