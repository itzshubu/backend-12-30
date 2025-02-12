import http from "http"

let server = http.createServer((req , res)=>{
    console.log(req.method , req.url)
    if(req.url == "/products"){
        res.writeHead(200 ,{'Content-Type' : 'text/json'})
        let a = [{product : 2},{product : 3}]
        res.write(JSON.stringify(a))
     res.end(); //end the response

    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>hello iam  h1</h1>'); //write a response to the client
        res.end(); //end the response
    }
})
server.listen("3000",()=>{
    console.log('server listen on port 3000')
})