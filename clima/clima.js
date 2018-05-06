const axios = require('axios');

const getClima = async(lat, lng) => {

    let key = `b8ce424aab86a16c22bce90bf2742041`;
    let hst = `http://api.openweathermap.org/`;
    let url = `${hst}/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${key}`;

    let resp = await axios.get(url);

    if (resp.code === 400) {
        throw new Error(`No se han encontrado resultados`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}