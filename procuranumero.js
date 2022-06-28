/* Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra. */

// Cria vetores e variável para pesquisa
let numeros = [5, 12, 7, 4, 4, 8, 4, 10, 16, 9]
let indices = []
let pesquisa

    // Recebe e armazena número a ser pesquisado
    pesquisa = Number(prompt("Qual número deseja pesquisar? "))

    // Cria loop para percorrer o vetor
    for(i=0; i < 10; i++){

        // Compara número pesquisado com número da vez
        if(pesquisa == numeros[i]){

            // Adiciona índice no vetor de índices
            indices.push(i)

        }

    }
   
    // Verifica se o vetor de índices não está vazio
    if(indices != ''){

        // Mostra resultado com os índices
        alert(`O número foi encontrado nos índices ${indices}.`)

    // Senão
    }else{

        // Mostra mensagem de não encontrado
        alert(`O número não foi encontrado!.`)

    }
