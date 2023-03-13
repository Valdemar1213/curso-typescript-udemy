export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO!');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO!');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Pedro', 'Thomás', 37, '333.333.333-33');
pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);
