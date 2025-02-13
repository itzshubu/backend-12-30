import http from "http"
import url from 'url'

let server = http.createServer((req , res)=>{
    console.log(req.method , req.url)
    let productpath = url.parse(req.url, true).path.split('?')[0]
    var q = {...url.parse(req.url, true).query};
    console.log(typeof q ,"hello" ,q)
    if(productpath == "/products"){
        let a = [{product : 2 , type : "electronics"},{product : 3 , type : "cloths"}]
        if(q.type = "electronics"){
             a = a.filter((item)=>{
             return item.type == q.type
             })
        }
        res.writeHead(200 ,{'Content-Type' : 'text/json'})
        res.write(JSON.stringify(a))
     res.end(); //end the response
    }else{
        // console.log(req.url)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>hello iam  h1</h1>'); //write a response to the client
        res.end(); //end the response
    }
})

server.listen("3000",()=>{
    console.log('server listen on port 3000')
})