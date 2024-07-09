// Modules
// CommonJS => Every file in Node is a module. (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
/* console.log(names) // { john: 'john', peter: 'peter' } */
const data = require('./6-alternative')
// console.log(data)

require('./7-mind-grenade') //the sum is 15

// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)
//Hello there Susan
// Hello there john
// Hello there peter
