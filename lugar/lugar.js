const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    console.log(direccion);

    const encodedUrl = encodeURI(direccion);
    const googleKey = 'AIzaSyBs52QZRgMo6lLTj_QCr6YcJPjIiL9fqEg';
    const googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

    let resp = await axios.get(`${googleUrl}?address=${encodedUrl}&key=${googleKey}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    };
}

module.exports = {
    getLugarLatLng
}