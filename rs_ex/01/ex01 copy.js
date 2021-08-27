let registro = {
    nome: 'felipe',
    idade: 29,
    curso: 'web dev'
}

for (let propriedade in registro ) {
    console.log(propriedade)
    console.log(registro[propriedade])
}