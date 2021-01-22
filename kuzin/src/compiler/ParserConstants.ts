export const ParserConstants = {
  START_SYMBOL: 40,

  FIRST_NON_TERMINAL: 40,
  FIRST_SEMANTIC_ACTION: 74,

  PARSER_TABLE: [
    [-1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, 4, -1, -1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 17, 17, 17, 17, -1, -1, -1, -1, -1, 17, -1, -1, -1, -1, -1, 17, 17, -1, -1, 17, -1, -1, -1, -1, -1, -1, -1, 17, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 19, 19, 19, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 23, 23, 23, 23, -1, -1, -1, -1, -1, 23, -1, -1, -1, -1, -1, 23, 23, -1, -1, 23, -1, -1, -1, -1, -1, -1, -1, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 30, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 31, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 32, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 35, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 38, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 39, 39, 39, 39, -1, -1, -1, -1, -1, 39, -1, -1, -1, -1, -1, 39, 39, -1, -1, 39, -1, -1, -1, -1, -1, -1, -1, 39, 39, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [42, 42, -1, -1, -1, -1, -1, -1, 40, 41, -1, 42, 42, 42, 42, 42, -1, -1, -1, 42, -1, 42, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 42, 42, -1, -1, -1],
    [-1, 43, 43, 43, 43, -1, -1, -1, -1, -1, 46, -1, -1, -1, -1, -1, 45, 44, -1, -1, 43, -1, -1, -1, -1, -1, -1, -1, 43, 43, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 47, 47, 47, 47, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 47, -1, -1, -1, -1, -1, -1, -1, 47, 47, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 50, 51, 52, 53, 54, 55, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 56, 56, 56, 56, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 56, -1, -1, -1, -1, -1, -1, -1, 56, 56, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [59, 59, -1, -1, -1, -1, -1, -1, 59, 59, -1, 59, 59, 59, 59, 59, -1, -1, -1, 59, -1, 59, 59, 59, 59, 59, 59, 59, 57, 58, -1, -1, -1, -1, 59, 59, -1, -1, -1],
    [-1, 60, 60, 60, 60, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 60, -1, -1, -1, -1, -1, -1, -1, 60, 60, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [65, 65, -1, -1, -1, -1, -1, -1, 65, 65, -1, 65, 65, 65, 65, 65, -1, -1, -1, 65, -1, 65, 65, 65, 65, 65, 65, 65, 65, 65, 61, 62, 63, 64, 65, 65, -1, -1, -1],
    [-1, 66, 67, 68, 69, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 70, -1, -1, -1, -1, -1, -1, -1, 71, 72, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 5, 5, 6, 5, -1, -1, -1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 15, 15, 15, 15, 16, 16, 16, -1, -1, 15, -1, -1, -1, -1, -1, 15, 15, 16, -1, 15, -1, -1, -1, -1, -1, -1, -1, 15, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 24, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 25, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 29, 28, -1, 27, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 34, -1, 33, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 37, 36, -1, 36, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [49, 49, -1, -1, -1, -1, -1, -1, 49, 49, -1, 49, 49, 49, 49, 49, -1, -1, -1, 49, -1, 49, 48, 48, 48, 48, 48, 48, -1, -1, -1, -1, -1, -1, 49, 49, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12, 13, 14]
  ],

  PRODUCTIONS: [
    [89, 41, 90],
    [44, 65],
    [47, 65],
    [49, 65],
    [54, 65],
    [0],
    [41],
    [43],
    [6],
    [7],
    [8],
    [2, 96, 73],
    [37, 66],
    [38, 97, 55, 110],
    [39, 97, 55, 110],
    [45],
    [46],
    [55, 98],
    [99, 19, 21, 67, 22, 100],
    [42, 99, 21, 19, 21, 67, 22, 22, 100],
    [5, 95, 88],
    [0],
    [20, 21, 48, 22],
    [55, 88, 68],
    [0],
    [35, 48],
    [12, 55, 101, 36, 41, 69],
    [50],
    [51],
    [52],
    [16, 102],
    [105, 14, 36, 41, 16, 102],
    [53, 70],
    [16, 102],
    [51],
    [103, 13, 55, 104, 36, 41, 71],
    [0],
    [53],
    [106, 15, 55, 107, 36, 41, 16, 108],
    [57, 56],
    [9, 57, 91, 56],
    [10, 57, 92, 56],
    [0],
    [58],
    [18, 85],
    [17, 86],
    [11, 57, 87],
    [60, 72],
    [59, 83, 60, 84],
    [0],
    [23],
    [24],
    [25],
    [26],
    [27],
    [28],
    [62, 61],
    [29, 62, 75, 61],
    [30, 62, 76, 61],
    [0],
    [64, 63],
    [31, 64, 77, 63],
    [32, 64, 78, 63],
    [33, 64, 93, 63],
    [34, 64, 94, 63],
    [0],
    [2, 109],
    [3, 79],
    [4, 80],
    [5, 95],
    [21, 55, 22],
    [29, 64, 81],
    [30, 64, 82]
  ],

  PARSER_ERROR: [
    '',
    'esperado EOF',
    'esperado id',
    'esperado constante int',
    'esperado constante float',
    'esperado constante str',
    'esperado int',
    'esperado float',
    'esperado str',
    'esperado and',
    'esperado or',
    'esperado not',
    'esperado if',
    'esperado elif',
    'esperado else',
    'esperado while',
    'esperado end',
    'esperado false',
    'esperado true',
    'esperado input',
    'esperado print',
    'esperado (',
    'esperado )',
    'esperado ==',
    'esperado !=',
    'esperado <',
    'esperado <=',
    'esperado >',
    'esperado >=',
    'esperado +',
    'esperado -',
    'esperado *',
    'esperado /',
    'esperado //',
    'esperado %',
    'esperado ,',
    'esperado :',
    'esperado =',
    'esperado +=',
    'esperado -=',
    'esperado id, if, for, while, print', // "<lista_de_comandos> inválido",
    'esperado tipo', // "<tipo> inválido",
    'esperado tipo', // "<simples> inválido",
    'esperado id', // "<operacao> inválido",
    'esperado id, constante, not, (, +, -', // "<atribuicao> inválido",
    'esperado tipo, input', // "<entrada_de_dados> inválido",
    'esperado print', // "<saida_de_dados> inválido",
    'esperada expressão', // "<lista_de_expressoes> inválido",
    'esperada expressão', // "<selecao> inválido",
    'esperada expressão', // "<selecao_simples> inválido",
    'esperada expressão', // "<selecao_senao> inválido",
    'esperada expressão', // "<selecao_composta> inválido",
    'esperada expressão', // "<selecao_alternativa> inválido",
    'esperada expressão', // "<repeticao> inválido",
    'esperada expressão', // "<repeticao_while> inválido",
    'esperada expressão', // "<repeticao_for_range> inválido",
    'esperada expressão', // "<repeticao_for_each> inválido",
    'esperada expressão', // "<expressao> inválido",
    'esperada expressão', // "<expressao_> inválido",
    'esperada expressão', // "<elemento> inválido",
    'esperada expressão', // "<relacional> inválido",
    'esperada expressão', // "<operador_relacional> inválido",
    'esperada expressão', // "<aritmetica> inválido",
    'esperada expressão', // "<aritmetica_> inválido",
    'esperada expressão', // "<termo> inválido",
    'esperada expressão', // "<termo_> inválido",
    'esperada expressão', // "<fator> inválido",
    'esperado EOF, id, if, elif, else, for, print', // "<lista_de_comandos_A> inválido",
    'esperado id, constante, tipo, not, input, (, +, -', // "<operacao_A> inválido",
    'esperado constante str, )', // "<entrada_de_dados_A> inválido",
    '<lista_de_expressoes_A> inválido',
    'esperada expressão', // "<selecao_A> inválido",
    'esperada expressão', // "<selecao_composta_A> inválido",
    'esperada expressão', // "<selecao_alternativa_A> inválido",
    'esperada expressão', // "<repeticao_A> inválido",
    'esperado EOF, id, and, or, if, elif, else, while, end, print, ), ==, !=, <, <=, >, >=, ,, :', // "<relacional_A> inválido",
    'esperado =, +=, -=', // "<operacao_B> inválido"
  ],
}