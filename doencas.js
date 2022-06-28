/*  Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças. */

// Cria variáveis e vetores 
let quantidade, doenca, transmissao
let virus = []
let bacteria = []
let ambos =[]
let todos =[]

    // Rebece a quantidade de doenças e armazena
    quantidade = Number(prompt("Quantas doenças deseja cadastrar? "))

    // Cria loop com a quantidade
    for(i=0; i < quantidade; i++){

        // Recebe o nome da doença e armazena
        doenca = prompt("Nome da doença: ")

        // Recebe o tipo de transmissão e armazena
        transmissao = prompt("Modo de transmissão(vírus/bactéria/ambos): ")

        // Cria switch na variável
        switch(transmissao){

            // Compara variável
            case 'vírus':

                // Adiciona no vetor de vírus e de todos
                virus.push(doenca)
                todos.push(doenca)

                // Para o switch
                break

            // Compara variável
            case 'bactéria':

                // Adiciona no vetor de bactéria e de todos
                bacteria.push(doenca)
                todos.push(doenca)

                // Para o switch
                break

            // Compara variável
            case 'ambos':

                // Adiciona no vetor de ambos e de todos
                ambos.push(doenca)
                todos.push(doenca)

                // Para o switch
                break

        }

    }

// Mostra listas
alert(`Doenças transmitidas por vírus: ${virus}\nDoenças transmitidas por bactéria: ${bacteria}\nDoenças transmitidas por ambos: ${ambos}\nLista com todas doenças: ${todos}\n`)