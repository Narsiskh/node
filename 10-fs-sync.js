const {readFileSync, writeFileSync} = require('fs');
console.log('start')
// Or
// const fs = require('fs');
// fs.readFileSync()
const first = readFileSync('./content/first', 'utf8');
const second = readFileSync('./content/second', 'utf8');

// console.log(first, second) // Hello this is the first text file Hello this is the second text file

// If the file is not there, Node will create one.
writeFileSync('./content/result-sync',
        `Here is the result : ${first}, ${second}`,
        { flag: 'a' }
);
console.log('done with this task')
console.log('starting the next one')
// start
// done with this task
// starting the next one

