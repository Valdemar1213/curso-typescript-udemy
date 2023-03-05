// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Valdemar'];
const dadosCliente2: [number, string, string] = [1, 'Valdemar', 'Santana'];
const dadosCliente3: [number, string, string?] = [1, 'Valdemar'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Valdemar'];

dadosCliente2[0] = 100;
dadosCliente2[1] = 'Santana';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly
const array: readonly string[] = ['Valdemar', 'Santana'];
const array1: ReadonlyArray<string> = ['Pedro', 'Santana'];

console.log(array);
console.log(array1);
