/* Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). Criar um programa que simule esse sistema.

1- Adicionar sabor
2- Remover sabor
3- Visualizar sorvete
4- Finalizar pedido

======== MENSAGENS e VALIDAÇÕES ========
Opção 1-> “Sabor adicionado!” OU “Limite de sabores atingido, remova um sabor!”
Opção 2-> “Sabor removido!” OU “Não existem sabores adicionados!”
Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.” OU “Seu sorvete não possui sabores!”
Opção 4-> “Pedido realizado!” OU “Adicione pelo menos um sabor!” */

// Cria variáveis e vetor
let sorvetes = []
let op
let addSabor
let podeSair = false

    // Inicia o menu
    do{

	// Recebe a opção e armazena na variável
        op = Number(prompt(`1 - Adicionar sabor\n2 - Remover o último sabor\n3 - Visualizar\n4 - Finalizar pedido\n\nEscolha a opção: `))

	// Realiza switch com a opção
        switch(op){

	    // Caso opção selecionada seja 1
            case 1: 

		// Verifica se o sorvete já está com o máximo de sabores
                if(sorvetes.length >= 4){

		    // Mostra mensagem
                    alert("Impossíveeeeel, remova um sabor!")

		// Senão
                }else{

		    // Recebe o sabor e armazena na variável
                    addSabor = prompt("Digite o sabor a ser adicionado: ")

		    // Adiciona o sabor no vetor
                    sorvetes.push(addSabor)

		    // Mostra mensagem
                    alert("Sabor adicionado! =]~")

                }

		// Para o switch
                break

	    // Caso opção selecionada seja 2
            case 2: 

		// Verifica se o sorvete está sem sabores
                if(sorvetes.length == 0){

                    alert("Imposíveeeeel, só tem a caxquinha! =~~")

		// Senão
                }else{

		    // Remove o último sabor
                    sorvetes.pop()

		    // Mostra mensagem
                    alert("Último sabor removido! =[~")

                }

		// Para o switch
                break

	    // Caso opção selecionada seja 3
            case 3: 

		// Verifica se o sorvete está sem sabores
                if(sorvetes.length == 0){

		    // Mostrar mensagem
                    alert("Sabor caxquinha! =~~")
                    
		// Senão
                }else{

		    // Mostra mensagem
                    alert(`Sabores: ${sorvetes}.`)

                }
                
		// Para o switch
                break

	    // Caso opção selecionada seja 4
            case 4: 

		// Verifica se o sorvete tem pelo menos um sabor
                if(sorvetes.length > 0){

		    // Mostra mensagem
                    alert("Pedido finalizado! :DDDDDD")

		    // Atualiza variável booleana para pode sair
                    podeSair = true
	
		// Senão
                }else{

		    // Mostra mensagem
                    alert("Adicione ao menos um sabor! :)")

                }

		// Para o switch
                break

	    // Caso opção selecionada não seja nenhuma das listadas
            default:

                // Mostra mensagem
                alert("Opcão inválida!")

        }

    // Condição para repetir
    }while(!podeSair)

