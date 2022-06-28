/* Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações. */

// Cria vetor e variáveis
let numeros = []
let numeroAdd
let maiorNumero = 0
let totalMultiplicacao = 0

    // Cria loop para receber números
    for(i=0; i < 5; i++){

	// Recebe número e armazena
        numeroAdd = Number(prompt("Digite um número: "))

	// Adiciona número no vetor
        numeros.push(numeroAdd)

	// Compara se número da vez é maior
        if(numeros[i] > maiorNumero){

	    // Substitui na variável
            maiorNumero = numeros[i]

        }
        
    }

    // Cria loop para percorrer vetor
    for(i=0; i < 5; i++){

	// Verifica se o número da vez não é o maior
        if(numeros[i] != maiorNumero){

	    // Realiza a multiplicação e joga para a variável de total
            totalMultiplicacao = totalMultiplicacao + (numeros[i] * maiorNumero) 

        }

    }

     // Mostra resultados
    alert(`Vetor: ${numeros} Total: ${totalMultiplicacao}.`)

