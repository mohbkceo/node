const path = require('path')

console.log(path.sep)


const Pahfile = path.join('content' , 'file','text.txt' )
console.log(Pahfile)


const absolute = path.resolve(__dirname, Pahfile)
console.log(absolute)