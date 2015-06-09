var io = require('socket.io')({
	transports: ['websocket'],
});

io.attach(4567);

io.on('connection', function(socket){
    
    socket.emit('connect');
    
    console.log("Connection...");
    
	socket.on('beep', function(data){
        console.log("Received beep");
        console.log("data : "+data);
       
        var cloth = data.Clothes;
         console.log(cloth);
        
        if(cloth=="Chemise"){
            console.log("Trouvé une chemise");
            
        }
        //socket.emit('foundCloth', { client:'webinterface', color: 'rouge',brand: 'cff' }); 
		socket.emit('updateCloth', { client:'unity', color: 'rouge',brand: 'cff' });
        io.sockets.emit('foundCloth', { client:'webinterface', cloth: cloth });
        
        
	});
    
    socket.on('setColor', function(data){
        
        console.log("colorReceived"+data.color);
        io.sockets.emit('updateCloth', { client:'unity', color: data.color });
    });
})
