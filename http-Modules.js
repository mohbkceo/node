const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.end('Hello From HomePage')
    } 
    if(req.url == '/about'){
        res.end('Im Moh')
    }
    res.end(`<h1>Ooops</h1> <p>u lose ur way </p> <a href='/'> Back to </a>`)
})

server.listen(5000)