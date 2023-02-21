const os = require('os')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(__filename)
console.log(__dirname)

const path = require('path')

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))


const math = require('./math')
//destructuring
//const {add, mul} = require('./math')
console.log(math.add(5,5))