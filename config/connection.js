const mongooes = require('mongoose');

async function main() {
    try {
        await mongooes.connect('mongodb://localhost:27017/jeetTest');
        console.log('Conected to db succesfully...');
    } catch (err) {
        console.log(err);
    }
}

main();

module.exports = mongooes;