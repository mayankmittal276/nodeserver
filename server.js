var http=require("http")
var server=http.createServer((req,res)=>{
	var str=''
	if(req.url=='/'){
		res.writeHead(200,{'Content-Type':'text/html'})
		str += "<html><head><title>NodeJs App</title></head>"
		str += "<body>Welcome to Nodejs App</body>"
		str += "</html>"
		res.write(str)
		res.end()
	}else if(req.url=='/about'){
		res.writeHead(200,{'Content-Type':'text/html'})
		str += "<html><head><title>About Us</title></head>"
		str += "<body>We are the Nodejs Developer</body>"
		str += "</html>"
		res.write(str)
		res.end()
	}else if(req.url=='/contact')
})
var port=3000
server.listen(port,()=>{
	console.log(`Server is listening at Port ${port}`)
})