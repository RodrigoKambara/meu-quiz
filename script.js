const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-question");
const scoreSpan = document.getElementById("score");
const progress = document.getElementById("progress");
const answersContainer = document.querySelector(".answers-container");
const resultScreen = document.getElementById("result-screen");
const resultScoreSpan = document.getElementById("result-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const categoryScreen = document.getElementById("category-screen");

const questoesDeQuimica = [
    {
        questao: "Qual é o elemento mais abundante na natureza?",
        respostas: [
            { texto: "Oxigênio", correct: true },
            { texto: "Ferro", correct: false },
            { texto: "Hidrogênio", correct: false },
            { texto: "Cobre", correct: false }
        ],
    },
    {
        questao: "Qual é o símbolo químico do ouro?",
        respostas: [
            { texto: "Au", correct: true },
            { texto: "Ag", correct: false },
            { texto: "O", correct: false },
            { texto: "Fe", correct: false }
        ],
    },
    {
        questao: "Qual é o pH de uma solução neutra?",
        respostas: [
            { texto: "7", correct: true },
            { texto: "1", correct: false },
            { texto: "14", correct: false },
            { texto: "5", correct: false }
        ],
    },
    {
        questao: "Qual gás é essencial para a respiração humana?",
        respostas: [
            { texto: "Oxigênio", correct: true },
            { texto: "Nitrogênio", correct: false },
            { texto: "Hélio", correct: false },
            { texto: "Gás carbônico", correct: false }
        ],
    },
    {
        questao: "Qual é a fórmula química da água?",
        respostas: [
            { texto: "H₂O", correct: true },
            { texto: "CO₂", correct: false },
            { texto: "O₂", correct: false },
            { texto: "NaCl", correct: false }
        ],
    },
    {
        questao: "Qual é o elemento químico representado pela letra 'Fe'?",
        respostas: [
            { texto: "Ferro", correct: true },
            { texto: "Flúor", correct: false },
            { texto: "Fósforo", correct: false },
            { texto: "Frâncio", correct: false }
        ],
    },
    {
        questao: "Qual é a unidade básica da matéria?",
        respostas: [
            { texto: "Átomo", correct: true },
            { texto: "Molécula", correct: false },
            { texto: "Célula", correct: false },
            { texto: "Elétron", correct: false }
        ],
    },
    {
    questao: "Qual tipo de ligação química ocorre principalmente entre um metal e um não-metal?",
    respostas: [
        { texto: "Iônica", correct: true },
        { texto: "Covalente", correct: false },
        { texto: "Metálica", correct: false },
        { texto: "Hidrogênio", correct: false }
    ],
    },
    {
    questao: "Qual partícula subatômica possui carga negativa?",
    respostas: [
        { texto: "Elétron", correct: true },
        { texto: "Próton", correct: false },
        { texto: "Nêutron", correct: false },
        { texto: "Íon", correct: false }
    ],
    },
    {
        questao: "Qual destes compostos é um ácido?",
        respostas: [
            { texto: "HCl", correct: true },
            { texto: "NaOH", correct: false },
            { texto: "NaCl", correct: false },
            { texto: "CaCO₃", correct: false }
        ],
    },
    {
        questao: "O que caracteriza uma reação de neutralização?",
        respostas: [
            { texto: "Ácido + base formando sal e água", correct: true },
            { texto: "Queima de combustível", correct: false },
            { texto: "Liberação de oxigênio", correct: false },
            { texto: "Formação de gás carbônico", correct: false }
        ],
    },
    {
        questao: "Qual propriedade periódica aumenta da esquerda para a direita na tabela periódica?",
        respostas: [
            { texto: "Eletronegatividade", correct: true },
            { texto: "Raio atômico", correct: false },
            { texto: "Caráter metálico", correct: false },
            { texto: "Eletropositividade", correct: false }
        ],
    },
    {
        questao: "Qual destes é um exemplo de mistura homogênea?",
        respostas: [
            { texto: "Água com sal dissolvido", correct: true },
            { texto: "Água com areia", correct: false },
            { texto: "Granito", correct: false },
            { texto: "Leite", correct: false }
        ],
    },
    {
        questao: "Qual é a principal função dos catalisadores em uma reação química?",
        respostas: [
            { texto: "Aumentar a velocidade da reação", correct: true },
            { texto: "Diminuir a temperatura", correct: false },
            { texto: "Mudar os reagentes", correct: false },
            { texto: "Criar novos produtos", correct: false }
        ],
    },
    {
        questao: "Qual lei afirma que 'na natureza nada se cria, nada se perde, tudo se transforma'?",
        respostas: [
            { texto: "Lei de Lavoisier", correct: true },
            { texto: "Lei de Dalton", correct: false },
            { texto: "Lei de Avogadro", correct: false },
            { texto: "Lei de Gay-Lussac", correct: false }
        ],
    },
    {
        questao: "Qual destes elementos pertence à família dos gases nobres?",
        respostas: [
            { texto: "Hélio", correct: true },
            { texto: "Oxigênio", correct: false },
            { texto: "Nitrogênio", correct: false },
            { texto: "Cloro", correct: false }
        ],
    },
    {
        questao: "O que representa o número atômico de um elemento?",
        respostas: [
            { texto: "Número de prótons", correct: true },
            { texto: "Número de nêutrons", correct: false },
            { texto: "Número de elétrons na última camada", correct: false },
            { texto: "Massa total do átomo", correct: false }
        ],
    },
];

const questoesDeGeografia = [
    {
        questao: "Qual é o maior país do mundo em extensão territorial?",
        respostas: [
            { texto: "Rússia", correct: true },
            { texto: "Canadá", correct: false },
            { texto: "China", correct: false },
            { texto: "Estados Unidos", correct: false }
        ],
    },
    {
        questao: "Em qual continente fica o Brasil?",
        respostas: [
            { texto: "América do Sul", correct: true },
            { texto: "América do Norte", correct: false },
            { texto: "África", correct: false },
            { texto: "Europa", correct: false }
        ],
    },
    {
        questao: "Qual é o oceano que banha a costa leste do Brasil?",
        respostas: [
            { texto: "Oceano Atlântico", correct: true },
            { texto: "Oceano Pacífico", correct: false },
            { texto: "Oceano Índico", correct: false },
            { texto: "Oceano Ártico", correct: false }
        ],
    },
    {
        questao: "Qual é a capital do Brasil?",
        respostas: [
            { texto: "Brasília", correct: true },
            { texto: "São Paulo", correct: false },
            { texto: "Rio de Janeiro", correct: false },
            { texto: "Belo Horizonte", correct: false }
        ],
    },
    {
        questao: "Qual é o maior oceano do mundo?",
        respostas: [
            { texto: "Oceano Pacífico", correct: true },
            { texto: "Oceano Atlântico", correct: false },
            { texto: "Oceano Índico", correct: false },
            { texto: "Oceano Ártico", correct: false }
        ],
    },
    {
        questao: "Qual é o rio mais extenso do mundo?",
        respostas: [
            { texto: "Rio Nilo", correct: true },
            { texto: "Rio Amazonas", correct: false },
            { texto: "Rio Yangtzé", correct: false },
            { texto: "Rio Mississipi", correct: false }
        ],
    },
    {
        questao: "Qual é o continente com maior população?",
        respostas: [
            { texto: "Ásia", correct: true },
            { texto: "África", correct: false },
            { texto: "Europa", correct: false },
            { texto: "América", correct: false }
        ],
    },
    {
        questao: "Qual país tem o formato de uma bota?",
        respostas: [
            { texto: "Itália", correct: true },
            { texto: "Espanha", correct: false },
            { texto: "França", correct: false },
            { texto: "Grécia", correct: false }
        ],
    },
    {
        questao: "Qual é o deserto mais quente do mundo?",
        respostas: [
            { texto: "Deserto do Saara", correct: true },
            { texto: "Deserto do Atacama", correct: false },
            { texto: "Deserto da Arábia", correct: false },
            { texto: "Deserto de Gobi", correct: false }
        ],
    },
    {
        questao: "Qual é o país mais populoso do mundo?",
        respostas: [
            { texto: "China", correct: false },
            { texto: "Índia", correct: true },
            { texto: "Estados Unidos", correct: false },
            { texto: "Brasil", correct: false }
        ],
    },
    {
        questao: "Qual é a maior floresta tropical do mundo?",
        respostas: [
            { texto: "Floresta Amazônica", correct: true },
            { texto: "Floresta do Congo", correct: false },
            { texto: "Floresta da Indonésia", correct: false },
            { texto: "Floresta Atlântica", correct: false }
        ],
    },
    {
        questao: "Qual é o maior lago do mundo?",
        respostas: [
            { texto: "Mar Cáspio", correct: true },
            { texto: "Lago Superior", correct: false },
            { texto: "Lago Vitória", correct: false },
            { texto: "Lago Titicaca", correct: false }
        ],
    },
    {
        questao: "Qual país está localizado em dois continentes?",
        respostas: [
            { texto: "Turquia", correct: true },
            { texto: "Egito", correct: false },
            { texto: "Cazaquistão", correct: false },
            { texto: "Grécia", correct: false }
        ],
    },
    {
        questao: "Qual é a linha imaginária que divide a Terra em Norte e Sul?",
        respostas: [
            { texto: "Linha do Equador", correct: true },
            { texto: "Trópico de Capricórnio", correct: false },
            { texto: "Meridiano de Greenwich", correct: false },
            { texto: "Círculo Polar Ártico", correct: false }
        ],
    },
    {
        questao: "Qual é o tipo de clima predominante na Amazônia?",
        respostas: [
            { texto: "Equatorial", correct: true },
            { texto: "Tropical", correct: false },
            { texto: "Desértico", correct: false },
            { texto: "Temperado", correct: false }
        ],
    },
    {
        questao: "Qual dessas placas tectônicas o Brasil está localizado?",
        respostas: [
            { texto: "Placa Sul-Americana", correct: true },
            { texto: "Placa Africana", correct: false },
            { texto: "Placa do Pacífico", correct: false },
            { texto: "Placa Indo-Australiana", correct: false }
        ],
    },
    {
        questao: "Qual é o principal motivo da ocorrência de fuso horário?",
        respostas: [
            { texto: "Rotação da Terra", correct: true },
            { texto: "Translação da Terra", correct: false },
            { texto: "Inclinação do eixo terrestre", correct: false },
            { texto: "Movimento das placas tectônicas", correct: false }
        ],
    }
];

const questoesDeHistoria = [
    {
        questao: "Quem descobriu o Brasil em 1500?",
        respostas: [
            { texto: "Pedro Álvares Cabral", correct: true },
            { texto: "Cristóvão Colombo", correct: false },
            { texto: "Vasco da Gama", correct: false },
            { texto: "Fernão de Magalhães", correct: false }
        ],
    },
    {
        questao: "Em que ano ocorreu a Independência do Brasil?",
        respostas: [
            { texto: "1822", correct: true },
            { texto: "1808", correct: false },
            { texto: "1889", correct: false },
            { texto: "1500", correct: false }
        ],
    },
    {
        questao: "Quem proclamou a Independência do Brasil?",
        respostas: [
            { texto: "Dom Pedro I", correct: true },
            { texto: "Dom João VI", correct: false },
            { texto: "Tiradentes", correct: false },
            { texto: "Getúlio Vargas", correct: false }
        ],
    },
    {
        questao: "Qual foi o primeiro presidente do Brasil?",
        respostas: [
            { texto: "Deodoro da Fonseca", correct: true },
            { texto: "Floriano Peixoto", correct: false },
            { texto: "Getúlio Vargas", correct: false },
            { texto: "Dom Pedro II", correct: false }
        ],
    },
    {
        questao: "Em que ano terminou a escravidão no Brasil?",
        respostas: [
            { texto: "1888", correct: true },
            { texto: "1822", correct: false },
            { texto: "1850", correct: false },
            { texto: "1900", correct: false }
        ],
    },
    {
        questao: "Quem assinou a Lei Áurea?",
        respostas: [
            { texto: "Princesa Isabel", correct: true },
            { texto: "Dom Pedro I", correct: false },
            { texto: "Dom Pedro II", correct: false },
            { texto: "Getúlio Vargas", correct: false }
        ],
    },
    {
        questao: "Qual evento marcou o início da Idade Média?",
        respostas: [
            { texto: "Queda do Império Romano do Ocidente", correct: true },
            { texto: "Descoberta da América", correct: false },
            { texto: "Revolução Francesa", correct: false },
            { texto: "Renascimento", correct: false }
        ],
    },
    {
        questao: "Qual evento iniciou a Primeira Guerra Mundial?",
        respostas: [
            { texto: "Assassinato do arquiduque Franz Ferdinand", correct: true },
            { texto: "Invasão da Polônia", correct: false },
            { texto: "Revolução Russa", correct: false },
            { texto: "Ataque a Pearl Harbor", correct: false }
        ],
    },
    {
        questao: "Em que ano começou a Segunda Guerra Mundial?",
        respostas: [
            { texto: "1939", correct: true },
            { texto: "1914", correct: false },
            { texto: "1945", correct: false },
            { texto: "1929", correct: false }
        ],
    },
    {
        questao: "Qual país foi liderado por Adolf Hitler?",
        respostas: [
            { texto: "Alemanha", correct: true },
            { texto: "Itália", correct: false },
            { texto: "Japão", correct: false },
            { texto: "França", correct: false }
        ],
    },
    {
        questao: "Qual foi o sistema econômico durante a Idade Média?",
        respostas: [
            { texto: "Feudalismo", correct: true },
            { texto: "Capitalismo", correct: false },
            { texto: "Socialismo", correct: false },
            { texto: "Mercantilismo", correct: false }
        ],
    },
    {
        questao: "Qual foi o período conhecido como Renascimento?",
        respostas: [
            { texto: "Idade Moderna", correct: true },
            { texto: "Idade Média", correct: false },
            { texto: "Idade Antiga", correct: false },
            { texto: "Idade Contemporânea", correct: false }
        ],
    },
    {
        questao: "Quem foi o líder da Revolução Russa de 1917?",
        respostas: [
            { texto: "Vladimir Lênin", correct: true },
            { texto: "Stálin", correct: false },
            { texto: "Trotsky", correct: false },
            { texto: "Nicolau II", correct: false }
        ],
    },
    {
        questao: "Qual civilização construiu as pirâmides?",
        respostas: [
            { texto: "Egípcios", correct: true },
            { texto: "Romanos", correct: false },
            { texto: "Gregos", correct: false },
            { texto: "Maias", correct: false }
        ],
    },
    {
        questao: "O que foi o Iluminismo?",
        respostas: [
            { texto: "Movimento intelectual que valorizava a razão", correct: true },
            { texto: "Movimento artístico medieval", correct: false },
            { texto: "Revolta popular no Brasil", correct: false },
            { texto: "Sistema político absolutista", correct: false }
        ],
    },
    {
        questao: "Qual foi a principal consequência da Revolução Industrial?",
        respostas: [
            { texto: "Crescimento das cidades e fábricas", correct: true },
            { texto: "Fim do feudalismo", correct: false },
            { texto: "Descoberta da América", correct: false },
            { texto: "Início da Idade Média", correct: false }
        ],
    },
    {
        questao: "Qual foi o período da Ditadura Militar no Brasil?",
        respostas: [
            { texto: "1964 a 1985", correct: true },
            { texto: "1930 a 1945", correct: false },
            { texto: "1889 a 1930", correct: false },
            { texto: "1822 a 1889", correct: false }
        ],
    }
];

const questoesDeMatematica = [
    {
        questao: "Qual é o valor de x na equação 3x + 6 = 21?",
        respostas: [
            { texto: "5", correct: true },
            { texto: "7", correct: false },
            { texto: "4", correct: false },
            { texto: "6", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de x na equação 2x - 8 = 10?",
        respostas: [
            { texto: "9", correct: true },
            { texto: "8", correct: false },
            { texto: "7", correct: false },
            { texto: "6", correct: false }
        ],
    },
    {
        questao: "Quanto é 2³ + 3²?",
        respostas: [
            { texto: "17", correct: true },
            { texto: "14", correct: false },
            { texto: "11", correct: false },
            { texto: "13", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de x na equação x/4 = 7?",
        respostas: [
            { texto: "28", correct: true },
            { texto: "21", correct: false },
            { texto: "14", correct: false },
            { texto: "32", correct: false }
        ],
    },
    {
        questao: "Qual é a área de um triângulo com base 10 e altura 6?",
        respostas: [
            { texto: "30", correct: true },
            { texto: "60", correct: false },
            { texto: "20", correct: false },
            { texto: "40", correct: false }
        ],
    },
    {
        questao: "Qual é a soma dos ângulos internos de um pentágono?",
        respostas: [
            { texto: "540°", correct: true },
            { texto: "360°", correct: false },
            { texto: "450°", correct: false },
            { texto: "600°", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de √81?",
        respostas: [
            { texto: "9", correct: true },
            { texto: "8", correct: false },
            { texto: "7", correct: false },
            { texto: "6", correct: false }
        ],
    },
    {
        questao: "Se um círculo tem raio 7, qual é aproximadamente sua área? (Use π ≈ 3,14)",
        respostas: [
            { texto: "153,86", correct: true },
            { texto: "120,50", correct: false },
            { texto: "98,00", correct: false },
            { texto: "175,00", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de x na equação 5x - 15 = 0?",
        respostas: [
            { texto: "3", correct: true },
            { texto: "5", correct: false },
            { texto: "2", correct: false },
            { texto: "4", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de x na equação x² = 49?",
        respostas: [
            { texto: "7 ou -7", correct: true },
            { texto: "7", correct: false },
            { texto: "-7", correct: false },
            { texto: "14", correct: false }
        ],
    },
    {
        questao: "Qual é o próximo termo da sequência: 1, 4, 9, 16, ...?",
        respostas: [
            { texto: "25", correct: true },
            { texto: "20", correct: false },
            { texto: "24", correct: false },
            { texto: "30", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de x na equação 2x + 3 = x + 9?",
        respostas: [
            { texto: "6", correct: true },
            { texto: "5", correct: false },
            { texto: "3", correct: false },
            { texto: "9", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de 25% de 240?",
        respostas: [
            { texto: "60", correct: true },
            { texto: "50", correct: false },
            { texto: "70", correct: false },
            { texto: "80", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de 3! (3 fatorial)?",
        respostas: [
            { texto: "6", correct: true },
            { texto: "3", correct: false },
            { texto: "9", correct: false },
            { texto: "12", correct: false }
        ],
    },
    {
        questao: "Qual é a inclinação (coeficiente angular) da reta y = 2x + 5?",
        respostas: [
            { texto: "2", correct: true },
            { texto: "5", correct: false },
            { texto: "1", correct: false },
            { texto: "-2", correct: false }
        ],
    },
    {
        questao: "Qual é o valor de x na equação 3x² = 27?",
        respostas: [
            { texto: "3 ou -3", correct: true },
            { texto: "3", correct: false },
            { texto: "-3", correct: false },
            { texto: "9", correct: false }
        ],
    },
    {
        questao: "Qual é o determinante da matriz [[1,2],[3,4]]?",
        respostas: [
            { texto: "-2", correct: true },
            { texto: "2", correct: false },
            { texto: "10", correct: false },
            { texto: "12", correct: false }
        ],
    }
];

const questoesDeCulturaGeral = [
    {
        questao: "Quem pintou a Mona Lisa?",
        respostas: [
            { texto: "Leonardo da Vinci", correct: true },
            { texto: "Vincent van Gogh", correct: false },
            { texto: "Pablo Picasso", correct: false },
            { texto: "Michelangelo", correct: false }
        ],
    },
    {
        questao: "Qual é o maior animal do mundo?",
        respostas: [
            { texto: "Baleia-azul", correct: true },
            { texto: "Elefante africano", correct: false },
            { texto: "Tubarão-baleia", correct: false },
            { texto: "Girafa", correct: false }
        ],
    },
    {
        questao: "Qual é o país conhecido como 'Terra do Sol Nascente'?",
        respostas: [
            { texto: "Japão", correct: true },
            { texto: "China", correct: false },
            { texto: "Coreia do Sul", correct: false },
            { texto: "Tailândia", correct: false }
        ],
    },
    {
        questao: "Qual é o monumento mais famoso de Paris?",
        respostas: [
            { texto: "Torre Eiffel", correct: true },
            { texto: "Arco do Triunfo", correct: false },
            { texto: "Museu do Louvre", correct: false },
            { texto: "Catedral de Notre-Dame", correct: false }
        ],
    },
    {
        questao: "Qual é o livro mais vendido do mundo?",
        respostas: [
            { texto: "A Bíblia", correct: true },
            { texto: "Dom Quixote", correct: false },
            { texto: "Harry Potter", correct: false },
            { texto: "O Pequeno Príncipe", correct: false }
        ],
    },
    {
        questao: "Qual é o instrumento musical mais antigo conhecido?",
        respostas: [
            { texto: "Flauta", correct: true },
            { texto: "Violino", correct: false },
            { texto: "Piano", correct: false },
            { texto: "Guitarra", correct: false }
        ],
    },
    {
        questao: "Qual é o esporte mais praticado no mundo?",
        respostas: [
            { texto: "Futebol", correct: true },
            { texto: "Basquete", correct: false },
            { texto: "Vôlei", correct: false },
            { texto: "Tênis", correct: false }
        ],
    },
    {
        questao: "Qual é a língua mais falada no mundo?",
        respostas: [
            { texto: "Mandarim", correct: true },
            { texto: "Inglês", correct: false },
            { texto: "Espanhol", correct: false },
            { texto: "Português", correct: false }
        ],
    },
    {
        questao: "Qual é o filme mais premiado da história do Oscar?",
        respostas: [
            { texto: "O Senhor dos Anéis: O Retorno do Rei", correct: true },
            { texto: "Titanic", correct: false },
            { texto: "Ben-Hur", correct: false },
            { texto: "Avatar", correct: false }
        ],
    },
    {
        questao: "Qual é o planeta mais próximo do Sol?",
        respostas: [
            { texto: "Mercúrio", correct: true },
            { texto: "Vênus", correct: false },
            { texto: "Terra", correct: false },
            { texto: "Marte", correct: false }
        ],
    },
    {
        questao: "Qual é o maior deserto do mundo?",
        respostas: [
            { texto: "Antártida", correct: true },
            { texto: "Saara", correct: false },
            { texto: "Atacama", correct: false },
            { texto: "Gobi", correct: false }
        ],
    },
    {
        questao: "Qual é o maior mamífero terrestre?",
        respostas: [
            { texto: "Elefante africano", correct: true },
            { texto: "Rinoceronte", correct: false },
            { texto: "Hipopótamo", correct: false },
            { texto: "Girafa", correct: false }
        ],
    },
    {
        questao: "Qual é o nome da moeda do Japão?",
        respostas: [
            { texto: "Iene", correct: true },
            { texto: "Won", correct: false },
            { texto: "Yuan", correct: false },
            { texto: "Dólar", correct: false }
        ],
    },
    {
        questao: "Qual é o maior oceano do mundo?",
        respostas: [
            { texto: "Pacífico", correct: true },
            { texto: "Atlântico", correct: false },
            { texto: "Índico", correct: false },
            { texto: "Ártico", correct: false }
        ],
    },
    {
        questao: "Qual é a montanha mais alta do mundo?",
        respostas: [
            { texto: "Monte Everest", correct: true },
            { texto: "K2", correct: false },
            { texto: "Monte Kilimanjaro", correct: false },
            { texto: "Mont Blanc", correct: false }
        ],
    }
];

const questoesDeTecnologia = [
    {
        questao: "O que significa HTML?",
        respostas: [
            { texto: "HyperText Markup Language", correct: true },
            { texto: "High Tech Machine Language", correct: false },
            { texto: "Hyper Tool Markup Language", correct: false },
            { texto: "Hyper Transfer Machine Language", correct: false }
        ],
    },
    {
        questao: "Para que serve o CSS?",
        respostas: [
            { texto: "Estilizar páginas web", correct: true },
            { texto: "Criar banco de dados", correct: false },
            { texto: "Programar lógica", correct: false },
            { texto: "Gerenciar servidores", correct: false }
        ],
    },
    {
        questao: "O que é JavaScript?",
        respostas: [
            { texto: "Uma linguagem de programação", correct: true },
            { texto: "Um sistema operacional", correct: false },
            { texto: "Um navegador", correct: false },
            { texto: "Um banco de dados", correct: false }
        ],
    },
    {
        questao: "O que é uma variável?",
        respostas: [
            { texto: "Um espaço para armazenar valores", correct: true },
            { texto: "Um tipo de botão", correct: false },
            { texto: "Um erro de código", correct: false },
            { texto: "Um arquivo", correct: false }
        ],
    },
    {
        questao: "Qual linguagem é usada para estruturar páginas web?",
        respostas: [
            { texto: "HTML", correct: true },
            { texto: "Python", correct: false },
            { texto: "C++", correct: false },
            { texto: "Java", correct: false }
        ],
    },
    {
        questao: "O que é um navegador?",
        respostas: [
            { texto: "Um programa para acessar a internet", correct: true },
            { texto: "Um tipo de vírus", correct: false },
            { texto: "Um sistema operacional", correct: false },
            { texto: "Um editor de código", correct: false }
        ],
    },
    {
        questao: "Qual desses é um navegador?",
        respostas: [
            { texto: "Google Chrome", correct: true },
            { texto: "Windows", correct: false },
            { texto: "Linux", correct: false },
            { texto: "Android", correct: false }
        ],
    },
    {
        questao: "O que é um algoritmo?",
        respostas: [
            { texto: "Uma sequência de passos para resolver um problema", correct: true },
            { texto: "Um tipo de computador", correct: false },
            { texto: "Um vírus", correct: false },
            { texto: "Um software de edição", correct: false }
        ],
    },
    {
        questao: "O que significa CPU?",
        respostas: [
            { texto: "Central Processing Unit", correct: true },
            { texto: "Computer Personal Unit", correct: false },
            { texto: "Central Power Unit", correct: false },
            { texto: "Control Processing Unit", correct: false }
        ],
    },
    {
        questao: "O que é um sistema operacional?",
        respostas: [
            { texto: "Software que gerencia o computador", correct: true },
            { texto: "Um tipo de vírus", correct: false },
            { texto: "Um aplicativo", correct: false },
            { texto: "Um navegador", correct: false }
        ],
    },
    {
        questao: "Qual desses é um sistema operacional?",
        respostas: [
            { texto: "Windows", correct: true },
            { texto: "Google", correct: false },
            { texto: "Instagram", correct: false },
            { texto: "YouTube", correct: false }
        ],
    },
    {
        questao: "O que é um banco de dados?",
        respostas: [
            { texto: "Um lugar para armazenar informações", correct: true },
            { texto: "Um tipo de linguagem", correct: false },
            { texto: "Um vírus", correct: false },
            { texto: "Um editor de texto", correct: false }
        ],
    },
    {
        questao: "Qual dessas é uma linguagem de programação?",
        respostas: [
            { texto: "Python", correct: true },
            { texto: "Google", correct: false },
            { texto: "Word", correct: false },
            { texto: "Photoshop", correct: false }
        ],
    },
    {
        questao: "O que é um bug?",
        respostas: [
            { texto: "Um erro no código", correct: true },
            { texto: "Um vírus", correct: false },
            { texto: "Um arquivo", correct: false },
            { texto: "Um tipo de computador", correct: false }
        ],
    },
    {
        questao: "O que é internet?",
        respostas: [
            { texto: "Uma rede mundial de computadores", correct: true },
            { texto: "Um aplicativo", correct: false },
            { texto: "Um sistema operacional", correct: false },
            { texto: "Um navegador", correct: false }
        ],
    }
];

const todasAsQuestoes = [
  // ================= QUÍMICA =================
  {
    questao: "Em uma reação hipotética A ⇌ B, observa-se que aumentar a pressão desloca o equilíbrio para a direita. Isso implica necessariamente que:",
    respostas: [
      {texto: "O número de mols de B é menor que o de A", correct: true},
      {texto: "A reação direta é exotérmica", correct: false},
      {texto: "A constante de equilíbrio aumenta", correct: false},
      {texto: "A entropia do sistema aumenta", correct: false}
    ]
  },
  {
    questao: "Qual das seguintes espécies possui maior caráter nucleofílico em solvente aprótico polar?",
    respostas: [
      {texto: "F⁻", correct: false},
      {texto: "Cl⁻", correct: false},
      {texto: "Br⁻", correct: true},
      {texto: "I⁻", correct: false}
    ]
  },
  {
    questao: "Em uma pilha galvânica, se o potencial padrão da reação é positivo, isso indica que:",
    respostas: [
      {texto: "A reação é espontânea nas condições padrão", correct: true},
      {texto: "A reação sempre ocorre rapidamente", correct: false},
      {texto: "A energia livre de Gibbs é positiva", correct: false},
      {texto: "O cátodo perde elétrons", correct: false}
    ]
  },
  {
    questao: "Qual dos seguintes fatores estabiliza mais um carbocátion terciário?",
    respostas: [
      {texto: "Efeito indutivo doador de elétrons", correct: true},
      {texto: "Hibridização sp", correct: false},
      {texto: "Solvente apolar", correct: false},
      {texto: "Ligação covalente dupla", correct: false}
    ]
  },
  {
    questao: "A equação de Arrhenius relaciona a constante de velocidade com:",
    respostas: [
      {texto: "Energia de ativação e temperatura", correct: true},
      {texto: "Entalpia e entropia", correct: false},
      {texto: "Concentração dos reagentes", correct: false},
      {texto: "Pressão do sistema", correct: false}
    ]
  },
  {
    questao: "Em um tampão formado por ácido fraco HA e sua base conjugada A⁻, o pH será mais estável quando:",
    respostas: [
      {texto: "As concentrações de HA e A⁻ forem semelhantes", correct: true},
      {texto: "HA estiver em excesso", correct: false},
      {texto: "A⁻ estiver em excesso", correct: false},
      {texto: "O meio for altamente básico", correct: false}
    ]
  },

  // ================= FÍSICA =================
  {
    questao: "Em um sistema isolado, a energia mecânica pode não ser conservada porque:",
    respostas: [
      {texto: "Parte da energia pode se transformar em calor", correct: true},
      {texto: "A força gravitacional desaparece", correct: false},
      {texto: "A velocidade média é sempre constante", correct: false},
      {texto: "A entropia diminui", correct: false}
    ]
  },
  {
    questao: "No movimento harmônico simples, a aceleração é:",
    respostas: [
      {texto: "Proporcional e oposta ao deslocamento", correct: true},
      {texto: "Constante", correct: false},
      {texto: "Sempre zero no ponto de equilíbrio", correct: false},
      {texto: "Proporcional à velocidade", correct: false}
    ]
  },
  {
    questao: "Segundo a relatividade especial, a dilatação temporal ocorre porque:",
    respostas: [
      {texto: "A velocidade da luz é constante para todos os observadores", correct: true},
      {texto: "O tempo é absoluto", correct: false},
      {texto: "A massa diminui com a velocidade", correct: false},
      {texto: "A energia não se conserva", correct: false}
    ]
  },
  {
    questao: "Em um circuito RLC em ressonância, ocorre que:",
    respostas: [
      {texto: "A impedância é mínima", correct: true},
      {texto: "A corrente é zero", correct: false},
      {texto: "A tensão é infinita", correct: false},
      {texto: "A resistência é desprezível", correct: false}
    ]
  },
  {
    questao: "Na mecânica quântica, o princípio da incerteza de Heisenberg afirma que:",
    respostas: [
      {texto: "Não é possível conhecer simultaneamente posição e momento com precisão arbitrária", correct: true},
      {texto: "A posição do elétron é fixa", correct: false},
      {texto: "A energia não é quantizada", correct: false},
      {texto: "A velocidade da luz pode ser ultrapassada", correct: false}
    ]
  },
  {
    questao: "Em um referencial inercial, a primeira lei de Newton afirma que:",
    respostas: [
      {texto: "Um corpo permanece em repouso ou em movimento retilíneo uniforme se nenhuma força atuar sobre ele", correct: true},
      {texto: "Toda ação tem uma reação maior", correct: false},
      {texto: "A força é sempre proporcional à velocidade", correct: false},
      {texto: "A energia cinética é constante", correct: false}
    ]
  },

  // ================= HISTÓRIA =================
  {
    questao: "O conceito de 'mais-valia', central no pensamento de Karl Marx, refere-se a:",
    respostas: [
      {texto: "A diferença entre o valor produzido pelo trabalhador e o salário recebido", correct: true},
      {texto: "O lucro obtido exclusivamente pelo comércio", correct: false},
      {texto: "O imposto pago ao Estado", correct: false},
      {texto: "A renda proveniente da terra", correct: false}
    ]
  },
  {
    questao: "A Paz de Westfália (1648) é considerada um marco porque:",
    respostas: [
      {texto: "Estabeleceu o princípio da soberania dos Estados modernos", correct: true},
      {texto: "Criou a ONU", correct: false},
      {texto: "Iniciou a Revolução Industrial", correct: false},
      {texto: "Acabou com o feudalismo", correct: false}
    ]
  },
  {
    questao: "O imperialismo europeu do século XIX foi motivado principalmente por:",
    respostas: [
      {texto: "Busca por matérias-primas e novos mercados consumidores", correct: true},
      {texto: "Interesse exclusivo em religião", correct: false},
      {texto: "Altruísmo humanitário", correct: false},
      {texto: "Fim do capitalismo", correct: false}
    ]
  },
  {
    questao: "A Guerra Fria foi caracterizada principalmente por:",
    respostas: [
      {texto: "Conflitos indiretos entre EUA e URSS", correct: true},
      {texto: "Guerra nuclear direta", correct: false},
      {texto: "Colapso imediato do capitalismo", correct: false},
      {texto: "Fim dos Estados nacionais", correct: false}
    ]
  },
  {
    questao: "O Iluminismo defendia principalmente:",
    respostas: [
      {texto: "Razão, ciência e liberdade individual", correct: true},
      {texto: "Poder absoluto do rei", correct: false},
      {texto: "Domínio total da Igreja", correct: false},
      {texto: "Isolamento das nações", correct: false}
    ]
  },
  {
    questao: "A Revolução Francesa foi impulsionada por:",
    respostas: [
      {texto: "Crise econômica e desigualdade social", correct: true},
      {texto: "Excesso de prosperidade", correct: false},
      {texto: "Harmonia entre classes sociais", correct: false},
      {texto: "Expansão colonial pacífica", correct: false}
    ]
  },

  // ================= GEOGRAFIA =================
  {
    questao: "O fenômeno El Niño é causado principalmente por:",
    respostas: [
      {texto: "Aquecimento anômalo das águas do Pacífico Equatorial", correct: true},
      {texto: "Resfriamento global dos oceanos", correct: false},
      {texto: "Derretimento das calotas polares", correct: false},
      {texto: "Aumento da camada de ozônio", correct: false}
    ]
  },
  {
    questao: "A formação da Cordilheira dos Andes está relacionada a:",
    respostas: [
      {texto: "Colisão entre placas tectônicas", correct: true},
      {texto: "Atividade vulcânica isolada", correct: false},
      {texto: "Impacto de meteoros", correct: false},
      {texto: "Derretimento de geleiras", correct: false}
    ]
  },
  {
    questao: "O Aquífero Guarani é fundamental principalmente por ser:",
    respostas: [
      {texto: "Uma grande reserva de água doce subterrânea", correct: true},
      {texto: "Uma fonte de energia elétrica", correct: false},
      {texto: "Uma área de extração de petróleo", correct: false},
      {texto: "Uma zona de turismo espacial", correct: false}
    ]
  },
  {
    questao: "A urbanização acelerada nos países em desenvolvimento tende a gerar:",
    respostas: [
      {texto: "Favelização e problemas de infraestrutura", correct: true},
      {texto: "Redução automática da desigualdade", correct: false},
      {texto: "Eliminação do desemprego", correct: false},
      {texto: "Desaparecimento das áreas rurais", correct: false}
    ]
  },
  {
    questao: "O desmatamento da Amazônia está fortemente ligado a:",
    respostas: [
      {texto: "Expansão agrícola e pecuária", correct: true},
      {texto: "Turismo excessivo", correct: false},
      {texto: "Mineração espacial", correct: false},
      {texto: "Urbanização total", correct: false}
    ]
  },
  {
    questao: "O conceito de globalização refere-se principalmente a:",
    respostas: [
      {texto: "Integração econômica, cultural e tecnológica entre países", correct: true},
      {texto: "Isolamento das nações", correct: false},
      {texto: "Fim do comércio internacional", correct: false},
      {texto: "Retorno ao feudalismo", correct: false}
    ]
  },

  // ================= MATEMÁTICA =================
  {
    questao: "Qual é a derivada de f(x) = x³ + 2x² - 5x?",
    respostas: [
      {texto: "3x² + 4x - 5", correct: true},
      {texto: "x² + 2x - 5", correct: false},
      {texto: "3x + 4", correct: false},
      {texto: "x³ + 2x²", correct: false}
    ]
  },
  {
    questao: "O valor de ∫₀² x dx é:",
    respostas: [
      {texto: "2", correct: true},
      {texto: "1", correct: false},
      {texto: "4", correct: false},
      {texto: "0", correct: false}
    ]
  },
  {
    questao: "O limite lim (x→0) (sen x)/x é:",
    respostas: [
      {texto: "1", correct: true},
      {texto: "0", correct: false},
      {texto: "∞", correct: false},
      {texto: "-1", correct: false}
    ]
  },
  {
    questao: "A soma dos ângulos internos de um polígono de n lados é:",
    respostas: [
      {texto: "(n - 2) × 180°", correct: true},
      {texto: "n × 180°", correct: false},
      {texto: "n × 90°", correct: false},
      {texto: "360°", correct: false}
    ]
  },
  {
    questao: "Qual é a solução da equação x² - 9 = 0?",
    respostas: [
      {texto: "x = ±3", correct: true},
      {texto: "x = 3", correct: false},
      {texto: "x = 0", correct: false},
      {texto: "x = ±9", correct: false}
    ]
  },
  {
    questao: "A probabilidade de sair cara ao lançar uma moeda honesta é:",
    respostas: [
      {texto: "0,5", correct: true},
      {texto: "1", correct: false},
      {texto: "0", correct: false},
      {texto: "0,25", correct: false}
    ]
  },

  // ================= TECNOLOGIA =================
  {
    questao: "O que é um algoritmo?",
    respostas: [
      {texto: "Uma sequência finita de passos para resolver um problema", correct: true},
      {texto: "Um tipo de hardware", correct: false},
      {texto: "Um antivírus", correct: false},
      {texto: "Uma linguagem de programação", correct: false}
    ]
  },
  {
    questao: "Qual estrutura de dados é mais eficiente para buscas ordenadas?",
    respostas: [
      {texto: "Árvore binária balanceada", correct: true},
      {texto: "Lista encadeada simples", correct: false},
      {texto: "Pilha", correct: false},
      {texto: "Fila", correct: false}
    ]
  },
  {
    questao: "O protocolo HTTPS é mais seguro que HTTP porque:",
    respostas: [
      {texto: "Utiliza criptografia TLS", correct: true},
      {texto: "É mais rápido", correct: false},
      {texto: "Não usa servidores", correct: false},
      {texto: "Não usa internet", correct: false}
    ]
  },
  {
    questao: "O que caracteriza machine learning?",
    respostas: [
      {texto: "Aprendizado a partir de dados", correct: true},
      {texto: "Programação manual sem dados", correct: false},
      {texto: "Apenas robótica", correct: false},
      {texto: "Somente hardware especializado", correct: false}
    ]
  },
  {
    questao: "O que é um banco de dados relacional?",
    respostas: [
      {texto: "Um sistema que organiza dados em tabelas relacionadas", correct: true},
      {texto: "Um tipo de memória RAM", correct: false},
      {texto: "Um processador gráfico", correct: false},
      {texto: "Um antivírus", correct: false}
    ]
  },
  {
    questao: "O que significa API?",
    respostas: [
      {texto: "Interface de Programação de Aplicações", correct: true},
      {texto: "Sistema operacional", correct: false},
      {texto: "Linguagem de programação", correct: false},
      {texto: "Banco de dados", correct: false}
    ]
  }
];


const categorias = {
    quimica: questoesDeQuimica,
    geografia: questoesDeGeografia,
    matematica: questoesDeMatematica,
    tecnologia: questoesDeTecnologia,
    historia: questoesDeHistoria,
    cultura: questoesDeCulturaGeral,
    geral: todasAsQuestoes
}



// Variáveis de estado do Quiz
let indexAtualDaQuestao = 0;
let score = 0;
let answerDisabled = false;
let categoriaAtual;


function selecionadorDeCategoria () {

    const botoes = document.querySelectorAll('.category-btn');

    botoes.forEach(botao => {
        botao.addEventListener("click", (event) => {
            const categoriaEscolhida = event.target.dataset.categoria;
            categoriaAtual = categorias[categoriaEscolhida];
            categoriaAtual = embaralharArray(categoriaAtual);
            totalQuestionSpan.textContent = categoriaAtual.length;
            maxScoreSpan.textContent = categoriaAtual.length;
            categoryScreen.classList.remove("active");
            quizScreen.classList.add("active");
            mostrarQuestao();
        })
    })
}


function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event listeners
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", reiniciarQuiz);
selecionadorDeCategoria();

function startQuiz() {
    //Resetar as variáveis
    indexAtualDaQuestao = 0;
    score = 0;
    scoreSpan.textContent = score;

    startScreen.classList.remove("active"); 
    categoryScreen.classList.add("active");
}

function mostrarQuestao() {
    answerDisabled = false;
    
    const currentQuestion = categoriaAtual[indexAtualDaQuestao];
    currentQuestionSpan.textContent = indexAtualDaQuestao + 1;

    const progressPercent = (indexAtualDaQuestao / categoriaAtual.length * 100);
    progress.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.questao;

    // Reseta a página
    answersContainer.innerHTML = "";

    const respostasEmbaralhadas = embaralharArray([...currentQuestion.respostas]);
    respostasEmbaralhadas.forEach(resposta => {
        const button = document.createElement("button");
        button.textContent = resposta.texto;
        button.classList.add("answers-btn");

        button.dataset.correct = resposta.correct;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    })
}

function selectAnswer() {
    if (answerDisabled) return;

    answerDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (selectedButton === button){
            button.classList.add("incorrect");
        }
    });

    if(isCorrect) {
        score++
        scoreSpan.textContent = score;
    };

    setTimeout(() => {
        indexAtualDaQuestao++

        if (indexAtualDaQuestao < categoriaAtual.length) {
            mostrarQuestao();
        } else {
            mostrarResultado();
        }
    }, 1000);
}

function mostrarResultado() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    resultScoreSpan.textContent = score;

    const porcentagem = score / categoriaAtual.length * 100;

    if (porcentagem === 100) {
        resultMessage.textContent = "Perfeito! Incrível! Gênio!!";
    } else if (porcentagem >= 80) {
        resultMessage.textContent = "Uau! Você mandou muito!!";
    } else if (porcentagem >= 60) {
        resultMessage.textContent = "Bom trabalho, jovem";
    } else if (porcentagem >= 40) {
        resultMessage.textContent = "Continue tentando!";
    } else {
        resultMessage.textContent = "Precisa estudar muito ainda.";
    }
}

function reiniciarQuiz() {
    resultScreen.classList.remove("active");
    startQuiz();
}

