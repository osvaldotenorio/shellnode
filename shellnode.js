const fs = require('fs');

// Lê o arquivo flag.txt de forma assíncrona
fs.readFile('flag.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo flag.txt:', err.message);
        return;
    }
    
    // Exibe o conteúdo da flag.txt no console
    console.log('Conteúdo da flag.txt:', data);
});
