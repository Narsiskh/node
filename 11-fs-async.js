const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./content/first', 'utf8',(err, result) => {
    if (err) {
        console.error(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./content/second', 'utf8',(err, result) => {
        if (err) {
            console.error(err)
            return
        }
        // console.log(result)
        const second = result
        writeFile('./content/result-sync',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.error(err)
                    return
                }
                //console.log(result)
                console.log('done with this task')
            }
        )
    })
})
console.log('done with next task')
// without writing 'utf8' :
// <Buffer 48 65 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
// with writing 'utf8' :
// Hello this is the first text file