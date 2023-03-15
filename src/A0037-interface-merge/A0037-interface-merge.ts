interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  readonly idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Valdemar',
  sobrenome: 'Santana',
  enderecos: ['Av. Brasil'],
  idade: 35,
};

console.log(pessoa);
