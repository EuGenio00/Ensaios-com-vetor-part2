/* Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa */

// Cria variáveis e vetor
let op
let nomes = []
let addNome
let nomePesquisa
let nomeExcluir
let nomeEditar, novoNome
let posicao

    // Inicia o menu
    do{

	// Recebe a opção e armazena na variável
        op = Number(prompt(`1 - Cadastrar\n2 - Excluir\n3 - Editar\n4 - Pesquisar\n5 - Listar\n0 - Sair`))

	// Realiza switch com a opção
        switch(op){

	    // Caso opção selecionada seja 1
            case 1:

		// Recebe nome e armazena na variável
                addNome = prompt("Digite o nome: ")
		
		// Adiciona nome no vetor
                nomes.push(addNome)
                
		// Para o switch	
		break

	    // Caso opção selecionada seja 2
            case 2:

		// Recebe nome a excluir e armazena na variável
                nomeExcluir = prompt("Digite o nome a excluir: ")

		// Pesquisa posição e armazena na variável
                posicao = nomes.indexOf(nomeExcluir)

		// Verifica se retornou -1, não existe
                if(posicao == -1){

		    // Mostra mensagem
                    alert("Nome não encontrado!")

		// Senão
                }else{

		    // Remove nome da posição
                    nomes.splice(posicao, 1)

		    // Mostra mensagem
                    alert("Excluído! :/")

                }

		// Para o switch
                break

	    // Caso opção selecionada seja 3
            case 3:

		// Recebe nome a editar e armazena na variável
                nomeEditar = prompt("Digite o nome a editar: ")

		// Pesquisa posição e armazena na variável
                posicao = nomes.indexOf(nomeEditar)

		// Verifica se retornou -1, não existe
                if(posicao == -1){
		    
                    // Mostra mensagem
                    alert("Nome não encontrado!")

		// Senão
                }else{

		    // Recebe novo nome e armazena na variável
                    novoNome = prompt("Digite novo nome: ")

		    // Atribui novo nome para a posição
                    nomes[posicao] = novoNome

		    // Mostra mensagem
                    alert("Editado! :D")

                }

		// Para o switch
                break

	    // Caso opção selecionada seja 4
            case 4:

		// Recebe nome a pesquisar e armazena na variável
                nomePesquisa = prompt("Qual nome deseja pesquisar? ")

		// Pesquisa posição e armazena na variável
                posicao = nomes.indexOf(nomePesquisa)

		// Verifica se retornou -1, não existe
                if(posicao == -1){
		
                    // Mostra mensagem
                    alert("Nome não encontrado!")
		
		Senão
                }else{

		    // Mostra posição encontrada
                    alert(`Nome ${nomePesquisa} encontrado na posicao ${nomes.indexOf(nomePesquisa)}!`)

                }

		// Para o switch
                break

	    // Caso opção selecionada seja 5
            case 5:

		// Mostra lista dos nomes
                alert(nomes)
	
		// Para o switch
                break

	    // Caso opção selecionada seja 0
            case 0:

		// Mostra mensagem
                alert("Sair")

		// Para o switch
                break

	    // Caso opção selecionada não seja nenhuma das listadas
            default:

		// Mostra mensagem
                alert("Opcão inválida!")

        }

    // Condição para repetir
    }while(op != 0)
        
        