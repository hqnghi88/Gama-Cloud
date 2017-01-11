//##############################################################################################\\ DECLARATION SERVERS
// used to 
var spawn = require('child_process').spawn;

// Manage the local port to link client and the instance of the Java programs he runs
var portscanner = require('portscanner');
// portMax <= 65535
var portMax = 65535;
var portMin = 6000;

// net is used to link Java and node.js
var net = require('net');

// io is used to link client(s) and node.js
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// CurrentScene
var CurrentScene = "";
var CurrentParameters = "";

//##############################################################################################\\ LOCATION

// if client want to go on the page '/' : root, we display the display.html file
app.get('/', function(req, res){ res.sendFile(__dirname + '/display.html'); });

// set of the folder root ~where the display.html is, here.
app.use(express.static(__dirname));

// if client go to a page that doesn't exist, we inform him
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.send(404, '<p>Error 404 : Page introuvable !</p>');
});

//##############################################################################################\\ CONNECTION

// a client connect
io.on('connection', function(socket){
	//##############################################################################\\ EMISSION

	//#####################################################################\\ SCENE
	// it's the function that send serialized scene to client(s)
	var emitter = function (data) {
		CurrentScene = CurrentScene + data;
		if (CurrentScene.endsWith("@end")) {
			CurrentScene = CurrentScene.slice(0,-4);
			var tabScene = CurrentScene.split("@end");
			tabScene.forEach(function(scene) {
				// we send the scene
				socket.emit('scene',scene);
			});
			CurrentScene = "";
		}
	};
	
	//#####################################################################\\ PARAMETERS
	// it's the function that send serialized parameters to client(s)
	var ParameterEmitter = function (data) {
		CurrentParameters = CurrentParameters+ data;
		if (CurrentParameters.endsWith("@end")) {
			CurrentParameters = CurrentParameters.slice(0,-4);
			var tabParameters = CurrentParameters.split("@end");
			tabParameters.forEach(function(parameters) {
				//we send parameters
				socket.emit('parameters',parameters);
			});
			CurrentParameters = "";
		}
	};
	
	
	//#####################################################################\\ LAUNCHING
	// When a client connects, he send to the server a "lancement" event
	socket.on('lancement', function(){
		// the server prevent the client that the "lancement" event is ok
		socket.emit('launched');
		
			/*
				// we compile the java program
				var javac = spawn('javac', ['./test/src/Main.java']);
		
				// the compilation (javac) finished
				javac.on('close', function (code) {
			
					// if the compilation has finished without error then
					if (code === 0) {
						// we launch the java program
					
			*/
			
			// we allocate two ports for the communication
				// this one for communication between GAMA and the server
				portscanner.findAPortNotInUse(portMin, portMax, '127.0.0.1', function(error, port) {
					// this one for communication between the server and the client
					portscanner.findAPortNotInUse(port+1,portMax,'127.0.0.1', function(error2, port2) {
						
						// Communication between GAMA and the server			
						var server = net.createServer(function (JavaReceiver) {
					
							// Setting the encoding utf8 to correctly use the data received
							JavaReceiver.setEncoding('utf8');
							
							// We receive a scene
							JavaReceiver.on('data', emitter);
							
							// When Java program ends or an error occured --> close the connection
							JavaReceiver.on('error',function(error) { server.close(); });
							
						});
						
						// Communication between the server and GAMA
						var server2 = net.createServer(function (JavaEmitter) {
							
							
							JavaEmitter.setEncoding('utf8');
							
							// Data is sent to Java from the client
							socket.on('testCoucou', function(data) { JavaEmitter.write(data); });
							
							// A control request (parameters, play, pause, ...) is sent to Java from the client
							socket.on('control', function(data) { JavaEmitter.write(data); });		
							
							// The client asks to change a value of a parameter
							socket.on('paramEmitter', function(data) { JavaEmitter.write(data); });
								
							//	the server receive the parameters --> we send them to the client							
							JavaEmitter.on('data', ParameterEmitter);
							
							// When Java program ends or an error occured --> close the connection
							JavaEmitter.on('error',function(error2) { server2.close(); });
							
						});
		
						//#############################################\\ DECLARATION PORTS
		
						// We associate each port to their server
						server.listen(port, function () { console.log('nodeServer listening port:'+port); });
						
						server2.listen(port2, function () { console.log('nodeServer listening port:'+port2); });
						
						
							// Once the comilation is done, we execute the java program
					//var gama  = spawn('cmd.exe', ['/C', 'gama']);
						
						// If the client disconnects we close the servers
						socket.on('disconnect', function(){
							console.log('user disconnected');
							server.close();
							server2.close();
						});
						
					});
				});
			//}
		//});
		
	});

/* USELESS ? */
	// If the client disconnects we close the servers
	socket.on('disconnect', function(){
		console.log('user disconnected');
		
	});
/* ????????? */
});

//##############################################################################\\ RECEPTION

// Communication between node.js and the client(s) is based on the 3000 port
http.listen(3000, function(){ console.log('client listening on *:3000'); });