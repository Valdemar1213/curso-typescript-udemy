let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;

const pessoa = {
  nome: 'Valdemar' as const,
  sobrenome: 'Santana',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module Mode
export default 1;
