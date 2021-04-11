const express =require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)


app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html')
})

app.use(express.static(__dirname+'/assets'))

io.on('connection',(socket)=>{
    socket.on('chat messages',(data)=>{
        io.emit('chat messages',{
            message:data.message,
            name:data.name
        })
    })

} )

http.listen(3004,()=>{
    console.log('Server start')
})