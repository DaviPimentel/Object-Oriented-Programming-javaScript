class Funcionario{
    public nome: string;
    public carteiraTrabalho: string;
    public sexo: string;
    public horasTrabalho: string;
    public metasVendas: string;
};

const pessoa: Funcionario = new Funcionario ();
pessoa.nome = 'Luizinho';
pessoa.carteiraTrabalho = '123456';
pessoa.sexo = 'Masculino';
pessoa.horasTrabalho = '40 Horas semanais';
pessoa.metasVendas = '5 Carros por dia';

console.log(`\nNome: ${pessoa.nome}`);
console.log(`\nCarteira de Trabalho: ${pessoa.carteiraTrabalho}`);
console.log(`\nSexo: ${pessoa.sexo}`);
console.log(`\nHoras Trabalhadas: ${pessoa.horasTrabalho}`);
console.log(`Metas Cumpridas: ${pessoa.metasVendas}`);

document.write(`${pessoa.nome}<br>`);
document.write(`${pessoa.carteiraTrabalho}<br>`);
document.write(`${pessoa.sexo}<br>`);
document.write(`${pessoa.horasTrabalho}<br>`);
document.write(`${pessoa.metasVendas}`);