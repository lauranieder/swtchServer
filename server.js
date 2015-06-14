/* 
Server
Socket.io
Node.js 

fragment.in
*/

var io = require('socket.io')({
	transports: ['websocket'],
});

var port = 4567;
io.attach(port);
console.log("-----------------------------------------");
console.log("Server running at port : "+port);
console.log("-----------------------------------------");

io.on('connection', function(socket){
    
    //Debug send to every client on first connection 
    socket.emit('connect');
    console.log("Connection...");
    
    //Debug received back to check if unity + webinterface are connected
    socket.on('connected', function(data){
        console.log("Client "+data.client+" is connected");
    });
    
    //Start receiving messages
    socket.on('message', function(data){
        console.log("----------------Message------------------");
        console.log(data);
        console.log("-----------------------------------------");
        io.sockets.emit('message', data);
        
    
    });
    
    
//	socket.on('beep', function(data){
//        console.log("Received beep");
//        console.log("data : "+data);
//       
//        var cloth = data.Clothes;
//         console.log(cloth);
//        
//        if(cloth=="Chemise"){
//            console.log("Trouvé une chemise");
//            
//        }
//        //socket.emit('foundCloth', { client:'webinterface', color: 'rouge',brand: 'cff' }); 
//		socket.emit('updateCloth', { client:'unity', action:"", color: 'rouge',brand: 'cff' });
//        io.sockets.emit('foundCloth', { client:'webinterface', cloth: cloth });
//        
//        
//	});
    
//    socket.on('setColor', function(data){
//        
//        console.log("colorReceived"+data.color);
//        io.sockets.emit('updateCloth', { client:'unity', color: data.color });
//    });
})
