const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');

const printData = async (API) => {
    const data1 = await fetchData(API);
    const data2 = await fetchData(data1.results[0].origin.url);

    const {info: {count} } = data1;
    const {name} = data1.results[0];
    const {dimension} = data2;
    console.log(count)
    console.log(name)
    console.log(dimension)
}

printData(API);