const http=require("http")
const fs=require("fs")

// const PORT=4000;
const PORT=process.env.PORT;
// const localhost="localhost"

const home=fs.readFileSync("./index.html","utf-8")

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end(home)
    }
   else if(req.url==="/about"){
        return res.end('<h1>About Page</h1>')
    }
    else{
        return res.end('<h1>404,Page not found</h1>')
    }

    

})

server.listen(PORT,()=>{
    console.log(`port is running`);
})