const prompt = require('prompt-sync')();

var Aviao = /** @class */ (function () {
    function Aviao() {
    }
    return Aviao;
}());

var aero = new Aviao();
aero.marca = 'Gol';
aero.modelo = 'Boeing 737-800';
aero.assentos = '186';
aero.voar = 'Velocidade media: 966 km/h';
aero.voar_Altitude = 'Altitude máxima: 41.000 pés';

console.log(`\nMarca: ${aero.marca}`)
console.log(`\nModelo: ${aero.modelo}`)
console.log(`\nAssentos: ${aero.assentos}`)
console.log(`\nVelocidade de Voô: ${aero.voar}`)
console.log(`\nAltutude de Voô: ${aero.voar_Altitude}`)

document.write("".concat(aero.marca, "<br>"));
document.write("".concat(aero.modelo, "<br>"));
document.write("".concat(aero.assentos, "<br>"));
document.write("".concat(aero.voar, "<br>"));
document.write("".concat(aero.voar_Altitude));