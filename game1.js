const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)  
        }
    })
}



function showOption(option){
    return option.requiredState == null || option.requiredState(state)
    
}

function selectOption(option){
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
    if (nextTextNodeId <= 0) {
        return window.history.back(-1);
    }
}

const textNodes = [
    {
        id: 1,
        text: 'O ordeiro e generoso povo do Vale dos Salgueiros vive há oito anos sob o terror e medo do feiticeiro Balthus Dire. Terror - porque o poder dele é realmente aterrorizante - e medo causados pela notícia que acabou chegando aos ouvidos desse povo, vinda dos domínios do feiticeiro, de que seus ambiciosos planos de conquista começariam pelo próprio Vale. Um fiel Semi-Elfo enviado em uma missão de espionagem à Torre Negra voltou galopando para o Vale há três dias com uma mensagem desesperada. Do interior das cavernas de Rocha Escarpada, Balthus Dire tinha recurato um exército de Caóticos e se preparava para atacar com eles o Vale dentro de uma semama.',
        options: [
            {
                text: 'Continuar',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'O bom Rei Salamon era um homem de ação. Foram enviados mensageiros por todo o Vale no mesmo dia para preparar as fedas e convocar os homens para a guerra. Foram enviados também cavaleiros à Grande Floresta de Yore para avisar aos Semi-Elfos que moravam lá e fazer um apelo para que se aliassem às forças. O Rei Salamon era também um homem sábio. Ele sabia muito bem que as notícias inevitavelmente chegariam aos ouvidos do Grande Mago de Yore, um mestre da magia branca de grandes poderes, que vivia nas profundezas da floresta. O mago era velho e não resistiria a uma batalha destas proporções. Mas ele havia ensinado suas artes a vários jovens magos, e talvez um de seus discípulos de magia ajudasse o rei e seus súditos com coragem e ambição.',
        options: [
            {
                text: 'Continuar',
                nextText: 3
            }
        ]
        
    },
    {
        id: 3,
        text: 'Você é o aluno brilhante do Grande Mago de Yore. Ele tem sido um Mestre duro, e sua própria impaciência muitas vezes foi mais forte do que você. Talvez um pouco precipitadamente, você partiu de imediato para a corte de Salamon. O rei recebeu-o entusiasticamente e explicou seu plano. A batalha poderia ser evitada sem derramamento de sangue de Balthus fosse assassinado antes que seu exército pudesse ser reunido.',
        options: [
            {
                text: 'Continuar',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'A missão que você tem pela frente é extremamente perigosa. Balthus Dire está cercado, em sua Cidadela, por uma multidão de criaturas assombrosas. O Rei Salamon expôs a você como seria a sua missão e o advertiu dos perigos que estavam à sua frente. Você deixa o Vale dos Salgueiros na longa caminhada para a Torre Negra. No sopé da colina de Rocha Escarpada, você pode ver sua silhueta contra o céu escuro...',
        options: [
            {
                text: 'Começar aventura!',
                nextText: 5
            }
        ]
    },

    {
        id: 5,
        text: 'O sol se põe. Enquanto o crepúsculo se transforma em escuridão, você começa a subir a colina na direção da ameaçadora forma que se desenha contra o céu noturno. A cidadela fica a menos de uma hora de escalada. A uma certa distância de seus muros, você pára para descansar - um erro, uma vez que dessa posição, ela parece um espectro medonho do qual não se pode escapar. Os cabelos no seu pescoço se arrepiam enquanto você observa.',
        options: [
            {
                text: 'Continuar',
                nextText: 6
            }
        ]
    },

    {
        id: 6,
        text: 'Mas você se envergonha de seus medos. Com inflexível decisão, você marcha adiante da direção do portão principal, onde você sabe que encontrará guardas à sua espera. Você considera suas opções. Já pensou em se apresentar como um especialista em plantas medicinais que veio tratar de um guarda com febre. Poderia também se dizer um comerciante ou artesão - talvez um carpinteiro. Poderia até mesmo ser um nômade que buscasse abrigo para a noite. Enquanto você pondera as possibilidades, e as histórias que terá que contar aos guardas, acaba chegando à trilha principal que conduz aos portões. Duas lanternas brilham em cada um dos lados da porta levadiça.',
        options: [
            {
                text: 'Continuar',
                nextText: 7
            }
        ]
    },

    {
        id: 7,
        text: 'Você ouve grunhidos abafados ao se aproimar, e vê duas criaturas de aparência absurda. Do lado esquero está uma criatura horrível, com a cabeça de um cachorro e o corpo de um grande macaco, flexionando seus braços fortíssimos. Do outro lado, encontra-se de fato o seu oposto, com a cabeça de um macaco no corpo de um cachorro grande. Este último guarda se aproxima nas suas quatro patas. Pára alguns metros de distância diante de você, ergue-se sobre as patas traseiras e dirige a palavra para você. O que você faz?',
        options: [
            {
                text: 'Você se apresenta como um especialista em plantas medicinais',
                nextText: 8
            },

            {
                text: 'Você diz que é um comerciante',
                nextText: 9
            },

            {
                text: 'Você procura abrigo para pernoitar',
                nextText: 10
            }
        ]
    },

    {
        id: 8,
        text: 'O Macaco-Cachorro pede para ver as suas ervas. Por sorte, você tinha apanhado alguns punhados de ervas no caminho, e você mostra isso a eles. Inclinando a cabeça para um lado, a criatura olha para você com desconfiança. Pergunta a você então o nome do guarda que você veio tratar - uma coisa que não estava nos seus planos! Você pensa rapidamente em um nome para enganar a criatura:',
        options: [
            {
                text: 'Kylltrog',
                nextText: 11
            },

            {
                text: 'Pincus',
                nextText: 12
            },

            {
                text: 'Blag',
                nextText: 13
            }
        ]
    },

    {
        id: 11,
        text: 'O Macaco-Cachorro ri e diz a você que Kylltrog é um preguiçoso que não serve para nada, e não vale a pena salvá-lo. Você solta um suspiro de alívio quando ele caminha de volta e grita para chamar o porteiro. Alguns momentos depois, o porteiro aparece e abre uma pequena porta para deixar você entrar. Você caminha em frente, entrando em pátio aberto e espaçoso, circundado por grandes muros. Há várias tochas queimando, e grupos de figuras se movimentam na escuridão. Há um monumento de algum tipo no centro do pático - talvez uma fonte. Olhando para o outro lado do pátio, você consegue ver o que parece ser a entrada principal da torre. O que você faz?',
        options: [
            {
                text: 'Esgueira-se pela parede na direção da torre, contornando o pátio',
                nextText: 14
            },

            {
                text: 'Caminha decididamente, atravessando o pátio',
                nextText: 15
            },

            {
                text: 'Vai na ponta dos pés pelas sombras, na direção de um dos grupos',
                nextText: 16
            }
        ]
    },

    {
        id: 14,
        text: 'Ao se esgueirar pela muralha, você ouve um gemido baixo uns poucos metros adiante. Quando se aproxima, você consegue distinguir a forma de um homem no chão, obviamente sentindo dores. Ele pede socorro. O que você faz?',
        options: [
            {
                text: 'Ajudar o homem',
                nextText: 17
            },

            {
                text: 'Ignorar o homem',
                nextText: 18
            }
        ]
    },
    
    {
        id: 17,
        text: 'O homem é velho e foi atingido na cabeça por algum tipo de porrete. Ele pede remédio, mas você não tem nenhum. Você poderia usar uma magia para recuperá-lo, mas isso deixará você fraco. Se você o ajudar, ele se ofecere para lhe acompanhar. O que você faz?',
        options: [
            {
                text: 'Usar a magia e ajudar o homem',
                nextText: 19
            },

            {
                text: 'Deixá-lo e seguir viagem',
                nextText: 20
            }
        ]
    },

    {
        id: 19,
        text: 'A força do velho começa a retornar à medida em que sua magia começa a fazer efeito, isso drena sua energia e você sente-se um pouco fraco. Ele conta para você que foi espancado na cabeça por cruéis Ganjees, criaturas que tem prazer em fazer maldades. Você conduz a conversa no sentido da Cidadela propriamente dita. De repente, sem nenhuma razão visível, uma pontada de dor o atinge por dentro. Seus olhos ficam estreitos e ele se atira para frente, cravando seus dentes - dentes afiados, diga-se de passagem - no seu braço. Você começa a sangrar. Ele continua mordendo. O que você faz?',
        options: [
            {
                text: 'Tentar afastá-lo usando força',
                nextText: 21
            },

            {
                text: 'Tentar afastá-lo usando magia',
                nextText: 22
            }
        ]
    },

    {
        id: 21,
        text: 'Com alguns socos você consegue fazer ele se afastar. Ao olhar em seus olhos, nota-se que ele não está no controle de suas ações. Ele se joga novamente em cima de você, mas você retira uma pedra de sua bolsa e começa a golpeá-lo na cabeça, até que seu corpo cai. A criatura agora está no chão, agonizando. Você está ferido, mas mesmo assim tenta seguir adiante.',
        options: [
            {
                text: 'Continuar',
                nextText: 23
            }
        ]
    },

    {
        id: 23,
        text: 'A sombra do muro dificulta muito a visão. Uma pedra solta desliza e você perde o equilibrio. Fraco e ferido, não consegue se segurar por muito tempo. Você cai em um profundo poço.',
        options: [
            {
                text: 'Continuar',
                nextText: 24
            }
        ]
    },

    {
        id: 24,
        text: 'Você cai no fundo de um poço profundo - possivelmente um manancial de água tapado. Você se recompõe e parece estar inteiro. Mas como você vai sair? Cavar apoios para os pés nas paredes levaria um tempo enorme. Outra opção seria gritar pedindo ajuda. O que você faz?',
        options: [
            {
                text: 'Cavar apoio para tentar escalar',
                nextText: 25
            },

            {
                text: 'Gritar por ajuda',
                nextText: 26
            }
        ]
    },

    {
        id: 25,
        text: 'Você começa a cavar os apoios e escalar o poço. Ao chegar na metade, sente sua força se esvair. Seus cortes começam a sangrar mais ainda. É sua vida que está em jogo. Você pode respirar fundo e tentar continuar cavando, ou gritar por ajuda. O que você faz?',
        options: [
            {
                text: 'Continuar cavando',
                nextText: 27
            },

            {
                text: 'Gritar por ajuda',
                nextText: 28
            }
        ]
    },

    {
        id: 27,
        text: 'Você chega ao seu limite tentando continuar cavando e escalando. Sua energia está fraca devido ao esforço, você tentar lançar uma magia, mas não consegue. Está pálido, perdeu muito sangue. Em um último esforço desesperado de tentar sair, você sente sua energia se esvair. Ainda faltavam vários metros para você chegar a saída. Seu corpo cai novamente e bate no fundo do poço. Você dá seu último suspiro.',
        options: [
            {
                text: 'Retornar ao início da aventura',
                nextText: 1
            },

            {
                text: 'Sair do jogo',
                nextText: -1
                
            },
        ]
    },

    {
        id: 9,
        text: '"Veio ganhar algum dinheiro, né?" diz o Macaco-Cachorro. "Bem, você pode dividir um pouco dos seus lucros conosco!" Como você não tem nada para oferecer a eles, pode tirar uma pedra de sua bolsa e lança um encantamento sobre ela, fazendo-a parecer uma pepita de ouro. Ou, se tiver coragem, pode tentar combate-los. O que você faz?',
        options: [
            {
                text: 'Usar magia',
                nextText: 29
            },

            {
                text: 'Preparar-se para o combate',
                nextText: 30
                
            },
        ]
    },

    {
        id: 29,
        text: 'Você faz secretamente uma magia com uma pedra retirada da bolsa, transformando-a temporariamente em um objeto semelhante a uma pepita de ouro. Você entrega ela aos guardas. Eles aceitam a sua oferta e convocam o porteiro, que abre uma pequena porta dentro da porta levadiça para deixar você entrar. Você os deixa discutindo por causa da pepita de ouro.',
        options: [
            {
                text: 'Continuar aventura',
                nextText: 31
            }
        ]
    },

    {
        id: 31,
        text: 'Você caminha em frente, entrando em pátio aberto e espaçoso, circundado por grandes muros. Há várias tochas queimando, e grupos de figuras se movimentam na escuridão. Há um monumento de algum tipo no centro do pátio - talvez uma fonte. Olhando para o outro lado do pátio, você consegue ver o que parece ser a entrada principal da torre. O que você faz?',
        options: [
            {
                text: 'Esgueira-se pela parede na direção da torre, contornando o pátio',
                nextText: 14
            },

            {
                text: 'Caminha decididamente, atravessando o pátio',
                nextText: 15
            },

            {
                text: 'Vai na ponta dos pés pelas sombras, na direção de um dos grupos',
                nextText: 16
            }
        ]
    },

    {
        id: 18,
        text: 'Você ignora o homem e segue adiante, ainda esgueirando-se pela muralha. A sombra do muro dificulta muito a visão. Uma pedra solta desliza e você perde o equilibrio, oscilando à beira do que você tem consciência de que deve ser um poço profundo. Você se segura firme e segue caminho.',
        options: [
            {
                text: 'Continuar',
                nextText: 32
            }
        ]
    },

    {
        id: 32,
        text: 'No canto mais distante do pátio, você encontra um arbusto diferente, com galhos contorcidos a partir da haste central, como se estivesse em agonia. As folhas têm a forma de diamantes, com pequenas amoras por baixo, chatas e com forma de pastilhas. Você pode levar algumas amoras com você na sua aventura e avançar um pouco mais ao longo do muro para a entrada principal da Cidadela.',
        options: [
            {
                text: 'Pegar amoras',
                nextText: 33
            }
        ]
    },

    {
        id: 33,
        text: 'Há uma grande porta de madeira à sua frente, firmemente trancada. Você pode bater três vezes para chamar o guarda ou usar uma magia para tentar abri-la.',
        options: [
            {
                text: 'Chamar o guarda',
                nextText: 34
            },

            {
                text: 'Usar magia',
                nextText: 35
            }
        ]
    },

    {
        id: 34,
        text: 'A porta abre e uma criatura grande e abrutalhada sai. Possui um chifre pontudo no meio da testa, e sua pele parece ser recoberta de armadura. Rosna para saber o que você quer e exige a senha antes de deixar que você entre. Você sabe a senha? Se não souber, vai ter que forçar sua entrada!',
        options: [
            {
                text: 'Eu sei a senha',
                nextText: 36
            },

            {
                text: 'Forçar entrada',
                nextText: 37
            }
        ]
    },

    {
        id: 36,
        text: 'Sabe mesmo? Qual é a senha?',
        options: [
            {
                text: 'Cimitarra',
                nextText: 38
            },

            {
                text: 'Ganjees',
                nextText: 39
            },

            {
                text: 'Kraken',
                nextText: 40
            }
        ]
    },

    {
        id: 36,
        text: 'A criatura grunhe e abre a porta para deixar você entrar.',
        options: [
            {
                text: 'Continuar',
                nextText: 41
            }
        ]
    },

    
    {
        id: 41,
        text: 'A criatura grunhe e abre a porta para deixar você entrar.',
        options: [
            {
                text: 'Continuar',
                nextText: 100
            }
        ]
    },

    {
        id: 39,
        text: 'A criatura olha para você. Seus olhos se estreitam. Há uma lança longa em suas mãos, que ela rapidamente aponta em sua direção. "Essa não é a senha!", ela grita enquanto te ataca!',
        options: [
            {
                text: 'Continuar',
                nextText: 42
            }
        ]
    },

    {
        id: 42,
        text: 'O HOMEM-RINO dá um passo adiante e desfer uma estocada com sua lança na sua direção. Você pula rapidamente e se desvia. Embora ele não esteja usando uma armadura, seu couro grosso parece ser proteção suficiente. Vai tentar combate-lo corpo a corpo ou usar uma magia?',
        options: [
            {
                text: 'Lutar corpo a corpo',
                nextText: 43
            },

            {
                text: 'Lutar usando magia',
                nextText: 44
            }
        ]
    },

    {
        id: 43,
        text: 'A criatura é imensa e consegue absorver facilmente seus golpes. Após uma tentativa de esquiva mal sucedida, a lança perfura seu peito. Outras criaturas aproximam-se ao ouvir o som do combate. O HOMEM-RINO ordena que te levem e seja sacrificado. Você falhou em sua missão.',
        options: [
            {
                text: 'Voltar ao ínicio da aventura',
                nextText: 1
            },

            {
                text: 'Sair do jogo',
                nextText: -1
            }
        ]
    },

    {
        id: 44,
        text: 'Enquanto você prepara o lançamento de uma magia para deixar a criatura fraca, ela avança sobre você e fere seu braço com a lança. Por sorte a magia foi lançada a tempo! A criatura começa abufar e ofegar, você tem a chance de liquidá-la!',
        options: [
            {
                text: 'Derrotar a criatura e continuar',
                nextText: 45
            }
        ]
    },

    {
        id: 40,
        text: 'A criatura fica olhando fixamente para você com ar inquisitivo, com se estivesse insegura em relação a você.',
        options: [
            {
                text: 'Continuar',
                nextText: 39
            }
        ]
    },

    {
        id: 45,
        text: 'Agora você está em um corredor estreino. Ele continua por alguns metros e termina em uma porta. A meio caminho, descendo a passagem, pode-se ver um arco, onde alguns degraus levam para baixo. Você pode seguir em direção a porta ou descer as escadas. O que você faz?',
        options: [
            {
                text: 'Seguir em direção a porta',
                nextText: 46
            },

            {
                text: 'Descer as escadas',
                nextText: 47 /*344 */
            }
        ]
    },

    {
        id: 46,
        text: 'Você experimenta a maçaneta da porta e ela gira, abrindo para um outro corredor. Logo adiante, a passagem vira para a direita e termina pouco depois em outra porta. Nesta porta há um letreiro que diz "Por favor, toque a campainha para chamar o mordomo". Uma corda - evidentemente a campainha - pende ao lado da porta. Você pode tocar a campainha e aguardar ou tentar abrir a porta. O que você faz?',
        options: [
            {
                text: 'Tocar a campainha',
                nextText: 48
            },

            {
                text: 'Abrir a porta',
                nextText: 49 /*361*/
            }
        ]
    },
    
    {
        id: 48,
        text: 'Depois de vários minutos, a porta se abre lentamente, e uma criatura corcunda e deformada, com dentes podres, cabelos desgrenhados e roupas esfarrapadas, aparece na sua frente. "Sim, senhor, hehe, o que posso fazer pelo senhor?" rosna a criatura semi-humana.',
        options: [
            {
                text: 'Continuar',
                nextText: 50
            }
        ]
    },

    {
        id: 50,
        text: '"Estou sendo esperado", você responde e passa por ele, atravessando a porta com confiança. Ele fica um pouco surpreso com seu comportamento e gagueja, sem saber se entra em conflito com você ou não. "onde é a recepção", você pergunta. Ele olha para você de soslaio com um dos olhos e faz um gesto na direção de uma bifurcação para a esquerda, a pouca distância dali. Você acreditará nele e seguirá pela esquerda ou não confiará na criatura e seguirá pela direita?',
        options: [
            {
                text: 'Vou pela esquerda',
                nextText: 51 /*243*/
            },

            {
                text: 'Vou pela direita',
                nextText: 52 /*2*/
            }
        ]
    },
]

startGame()

/* 118 */