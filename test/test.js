const assert = require('assert');
const fs = require('fs');

describe('Página Hola Hendrix 2022-0226', function() {
    it('debería contener "Hola Hendrix 2022-0226"', function(done) {
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) throw err;
            assert(data.includes('Hola Hendrix 2022-0226'));
            done();
        });
    });
});
