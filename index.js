const http=require('http');
const app=require('./app');









const Server=http.createServer(app);


Server.on('listening',()=>{
    console.log('listening on '+ '3000')
})
Server.listen(3000)