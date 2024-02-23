const { assistir, fetchAnimesRecents, genero, veranime } = require('./api.js');
const episodes = fetchAnimesRecents();
console.log(episodes);