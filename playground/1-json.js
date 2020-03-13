const fs = require('fs')

const bufferDati = fs.readFileSync('1-json.json')
const datiJSON = JSON.parse(bufferDati.toString())

datiJSON.name = 'Fabio'
datiJSON.age = 36

dati = JSON.stringify(datiJSON)
fs.writeFileSync('1-json.json', dati)
