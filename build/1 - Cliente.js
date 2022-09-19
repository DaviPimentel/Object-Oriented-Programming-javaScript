const prompt = require('prompt-sync')();

var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());

var usuario = new Cliente();
usuario.nome = 'Davi Pimentel';
usuario.cpf = '999.999.999-99';
usuario.compra = 'Arroz';

console.log(`\nNome: ${usuario.nome}`);
console.log(`\nCPF: ${usuario.cpf}`);
console.log(`\nCompra: ${usuario.compra}`);

document.write("".concat(usuario.nome, "<br>"));
document.write("".concat(usuario.cpf, "<br>"));
document.write("".concat(usuario.compra));