/*
	A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta
*/

let matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function transporMatriz(A) {
    let linhas = A.length;
    let colunas = A[0].length;
    let matrizTransposta = [];

    for(let j = 0; j < colunas; j++){
        matrizTransposta[j] = [] 
        for(let i = 0; i < linhas; i++){
            matrizTransposta[j][i] = A[i][j];
        }
    }
    return matrizTransposta;
}

let matrizTransposta = transporMatriz(matriz);

function imprimirMatriz(A) {
  //imprime matriz original
  for (let i = 0; i < A.length; i++) {
    let linha = "";
    for (let j = 0; j < A[i].length; j++) {
      linha += A[i][j] + "\t";
    }
    console.log(linha);
  }
}

console.log("Matriz original: ");
imprimirMatriz(matriz);

console.log("Matriz transportada: ");
imprimirMatriz(matrizTransposta);