const path = require("path");

console.log(path.sep) // /

const filePath = path.join('/content', 'subfolder', 'test')
console.log(filePath); // /content/subfolder/test

const base = path.basename(filePath)
console.log(base); // //content/subfolder/test
                      // test

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test')
console.log(absolute);
// /content/subfolder/test
// test
// /home/narsis/Project/node/content/subfolder/test
