const { argv } = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Ciudad de donde se desea saber el clima',
            demand: true
        }
    })
    .help();

module.exports = {
    argv
};