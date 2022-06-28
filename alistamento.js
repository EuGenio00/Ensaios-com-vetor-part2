/* Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos” */

// Cria vetor e variáveis
let alistamento = []
let anoAlistamento
let houve

    // Cria loop de 10 vezes
    for(i=0; i < 10; i++){

	// Recebe resposta de alistamento do ano e armazena na variável
        anoAlistamento = prompt(`Houve alistamento no ano 200${i}(S/N): `).toUpperCase()

	// Adiciona resposta no vetor
        alistamento.push(anoAlistamento)

    }

    // Mostra lista de alistamento
    alert(alistamento)

    // Recebe o último índice que houve alistamento
    houve = alistamento.lastIndexOf('S')   

    // Caso retorne -1
    if(houve == -1){

	// Mostra mensagem sem alistamentos
        alert(`Sem alistamentos!`)

    // Senão
    }else{

	// Mostra mensagem com o último ano que houve alistamento
        alert(`Ultimo ano que houve alistamento foi em 200${houve}`)

    }


