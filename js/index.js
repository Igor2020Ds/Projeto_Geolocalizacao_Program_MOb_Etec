let app = {

}

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    navigator.geolocation.getCurrentPosition(
        sucessoNaGeolocalizacao,
        erroNaGeolocalização
    );
}

function sucessoNaGeolocalizacao(position) {
    let inputlat = document.getElementById("lat"))
        let inputlng = document.getElementById("lng");

    inputlat.value = position.coords.latitude;
    inputlgn.value = position.coords.longitude;

}

function erroNaGeolocalização(err) {

    console.log(err);