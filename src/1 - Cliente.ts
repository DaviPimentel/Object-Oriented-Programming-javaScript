class Cliente {
    public nome: string;
    public cpf: string;
    public compra: String;
    
};

const usuario: Cliente = new Cliente ();
usuario.nome = 'Davi Pimentel';
usuario.cpf = '999.999.999-99';
usuario.compra = 'Arroz';

console.log(`\nNome: ${usuario.nome}`);
console.log(`\nCPF: ${usuario.cpf}`);
console.log(`\nCompra: ${usuario.compra}`);

document.write(`Nome: ${usuario.nome}<br>`);
document.write(`CPF: ${usuario.cpf}<br>`);
document.write(`Compra: ${usuario.compra}`);
