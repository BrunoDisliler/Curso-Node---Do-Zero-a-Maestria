// Módulo Externo
const minimist = require('minimist')


// Módulo interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b);
