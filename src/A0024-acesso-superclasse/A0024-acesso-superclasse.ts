export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + ' Iaepppp!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Pedro', 'Thomás', 37, '333.333.333-33');
const aluno = new Aluno('Valdemar', 'Santana', 35, '999.999.999-00', '2B');
const cliente = new Cliente('Fernanda', 'Rodrigues', 30, '111.111.111-11');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
