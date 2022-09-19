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
document.write("".concat(usuario.compra, "<br><br>"));

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
document.write("".concat(aero.voar_Altitude, "<br><br>"));

var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());

var item = new Produto();
item.marca = 'Samsung';
item.modelo = 'A32';
item.cor = 'Grafite';
item.pagarContas = 'Pagamento de contas no aparelho';
item.ligacoes = 'Falar com pessoas à distância';

console.log(`\nMarca: ${item.marca}`)
console.log(`\nModelo: ${item.modelo}`)
console.log(`\nCor: ${item.cor}`)
console.log(`\nFuncionalidade: ${item.pagarContas}`)
console.log(`\nFuncionalidade: ${item.ligacoes}`)

document.write("".concat(item.marca, "<br>"));
document.write("".concat(item.modelo, "<br>"));
document.write("".concat(item.cor, "<br>"));
document.write("".concat(item.pagarContas, "<br>"));
document.write("".concat(item.ligacoes, "<br><br>"));

var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());

var pessoa = new Funcionario();
pessoa.nome = 'Luizinho';
pessoa.carteiraTrabalho = '123456';
pessoa.sexo = 'Masculino';
pessoa.horasTrabalho = '40 Horas semanais';
pessoa.metasVendas = '5 Carros por dia';

console.log(`\nNome: ${pessoa.nome}`)
console.log(`\nCarteira de Trabalho: ${pessoa.carteiraTrabalho}`)
console.log(`\nSexo: ${pessoa.sexo}`)
console.log(`\nHoras Trabalhadas: ${pessoa.horasTrabalho}`)
console.log(`\nMetas Cumpridas: ${pessoa.metasVendas}`)

document.write("".concat(pessoa.nome,"<br>"));
document.write("".concat(pessoa.carteiraTrabalho, "<br>"));
document.write("".concat(pessoa.sexo, "<br>"));
document.write("".concat(pessoa.horasTrabalho, "<br>"));
document.write("".concat(pessoa.metasVendas));