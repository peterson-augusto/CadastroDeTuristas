const nome = prompt('Olá, qual o seu nome?')
let cidades = ""
let contagem = 0

let cidadesVisitadas = prompt('Você visitou alguma cidade? (Sim/Não)')

while (cidadesVisitadas === 'sim') {
    let cidade = prompt('Qual cidade você visitou?')
    cidades += ' - ' + cidade + '\n'
    contagem++

    cidadesVisitadas = prompt('Você visitou outra cidade? (Sim/Não)')
}

alert(
    'Turista: ' + nome +
    '\nCidades visitadas:\n ' + cidades +
    '\nQuantidade de cidades: \n' + contagem
)
