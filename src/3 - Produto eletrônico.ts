class Produto{
    public marca: string;
    public modelo: string;
    public cor: string;
    public pagarContas: string;
    public ligacoes: string;
};

const item: Produto = new Produto ();
item.marca = 'Samsung';
item.modelo = 'A32';
item.cor = 'Grafite';
item.pagarContas = 'Pagamento de contas no aparelho';
item.ligacoes = 'Falar com pessoas à distância';

console.log(`\nMarca: ${item.marca}`);
console.log(`\nModelo: ${item.modelo}`);
console.log(`\nCor: ${item.cor}`);
console.log(`\nFuncionalidade: ${item.pagarContas}`);
console.log(`Funcionalidade: ${item.ligacoes}`);

document.write(`${item.marca}<br>`);
document.write(`${item.modelo}<br>`);
document.write(`${item.cor}<br>`);
document.write(`${item.pagarContas}<br>`);
document.write(`${item.ligacoes}`);
