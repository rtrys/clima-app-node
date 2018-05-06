const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

let getTemp = async(direccion) => {
    try {
        let coors = await getLugarLatLng(direccion);
        let clima = await getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${clima}`;
    } catch (error) {
        return `No se pudo determinar el clima en '${direccion}'`
    }
}

getTemp(argv.d)
    .then(resp => {
        console.log(resp);
    }).catch(err => {
        console.log(err);
    });