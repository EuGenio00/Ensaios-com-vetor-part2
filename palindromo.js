/* Palíndromo é aquele elemento que, se lido de trás para frente e de frente para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e/ou com palavras). */

// Cria vetor e variáveis
let numeros = []
let numeroAdd
let j = 5
let palindromo = 0

    // Cria loop para receber números	
    for(i=0; i < 6; i++){

	// Recebe números
	numeroAdd = Number(prompt("Digite um número: "))

	// Adiciona números no vetor
	numeros.push(numeroAdd)

    }

    // Cria loop para comparar números
    for(i=0; i < 3; i++){

	// Verifica se números batem
        if(numeros[i] == numeros[j]){

	    // Soma na variável 	
            palindromo++

        }

	// Diminui a contagem de j
        j--
    }

    // Verifica se é palíndromo
    if(palindromo == 3){

	// Mostra mensagem
        alert("Palíndromo!")

    Senão	
    }else{

	// Mostra mensagem
        alert("Não palíndromo!")

    }
