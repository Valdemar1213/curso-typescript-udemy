function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Valdemar',
  sobrenome: 'Santana',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Valdemar', 'Santana');
pessoa.exibirNome();

export { pessoa };
