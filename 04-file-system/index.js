const fs = require('fs');

// don't do this
const fileContent = fs.readFileSync('./students.txt', 'utf-8');
console.log(fileContent);
console.log('Executo no fim da leitura do arquivo');

function printFileContent(error, data) {
    // if (error) throw error;
    if (error) {
        console.log('File not found! ', error);
        return;
    }

    console.log(data);
}

fs.readFile('./students.txt', 'utf-8', printFileContent);
console.log('Não preciso esperar o fim da leitura do arquivo para executar');