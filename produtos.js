/* 1) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço entre R$50 e R$100;
c) A média dos preços dos produtos com preço superior a R$100.*/

// Cria vetores e variáveis
let nomeProduto = []
let precoProduto = []
let addNome, addPreco
let quantidadeMenor50 = 0
let nomes50e100 = []
let soma = 0, quantidadeMaior100 = 0, media

    // Cria loop de 5 vezes
    for(i=0; i < 5; i++){

	// Recebe o nome do produto e armazena na variável
        addNome = prompt(`Nome do produto ${i+1}: ` )

	// Adiciona produto no vetor
        nomeProduto.push(addNome)
        
	// Recebe o preço do produto e armazena na variável
        addPreco = Number(prompt(`Preco do produto ${i+1}: ` ))

	// Adiciona preço no vetor
        precoProduto.push(addPreco)

	// Verifica preço abaixo de 50
        if(addPreco < 50){

	    // Soma na variável de contagem
            quantidadeMenor50++

        }

	// Verifica preço entre valores
        if(addPreco >= 50 && addPreco <=100){

	    // Adiciona nome no vetor de preços entre 50 e 100
            nomes50e100.push(addNome)

        }

	// Veririca preço acima de 100
        if(addPreco > 100){

	    // Acumula na variável de soma
            soma += addPreco
   	    
            // Soma na variável de contagem
            quantidadeMaior100++

        }

    }

// Calcula a média
media = (soma / quantidadeMaior100).toFixed(2)

// Mostra resultados
alert(`Quantidade inferior a R$50: ${quantidadeMenor50}\nNomes entre 50 e 100: ${nomes50e100}\nMédia superiores a R$100: ${media}`)

