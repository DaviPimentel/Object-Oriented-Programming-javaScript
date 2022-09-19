class Aviao{
    public marca: string;
    public modelo: string;
    public assentos: string;
    public voar: string;
    public voar_Altitude: string;
};

const aero: Aviao = new Aviao ();
aero.marca = 'Gol';
aero.modelo = 'Boeing 737-800';
aero.assentos = '186';
aero.voar = 'Velocidade media: 966 km/h';
aero.voar_Altitude = 'Altitude máxima: 41.000 pés';

console.log(`\nMarca: ${aero.marca}`);
console.log(`\nModelo: ${aero.modelo}`);
console.log(`\nAssentos: ${aero.assentos}`);
console.log(`\nVelocidade de Voô: ${aero.voar}`);
console.log(`Altutude de Voô: ${aero.voar_Altitude}`);

document.write(`${aero.marca}<br>`);
document.write(`${aero.modelo}<br>`);
document.write(`${aero.assentos}<br>`);
document.write(`${aero.voar}<br>`);
document.write(`${aero.voar_Altitude}`);
