// GLOBALS - No window
// You always have access to global variables everywhere in your application.

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (commonJS)
// module     - info about current module (file)
// process    - info about env where th program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('hello world!');
}, 1000)