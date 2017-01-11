//################################################################################\\ Variables	
			
	// The array which will store the scenes received from GAMA
	var TabScenes = [];
	// type of Display
	var typeDisplay;
	// inactive counter
	var inactive = 0;
	// interval of time we print the scene
	var interval;
	
//################################################################################\\ Functions

	// return the type of display the client wants
	function returnTypeDisplay(){
		if(document.getElementById('trace').checked){
			var valeur = document.getElementById('trace').value;
		} else { // si ce n'est pas l'un, c'est l'autre
			var valeur = document.getElementById('refresh').value;
		}
		return valeur;
	}
	
	// print the msg on the page
	function afficher(msg){
		console.log(msg);
		initializeScene(msg);
		animateScene();
	};
	
	// receiver store the scene received in the array TabScenes
	function receiver(msg){
		TabScenes.push(msg);
	};
			
	// delete the first n elements in the array Tab
	function delFirstElements(Tab,n) {
		for (var iter = 0; iter < n-1; iter++) {
			var element = Tab.shift();
		}
	}
	
	// function which will print the scene as the type of Display and the speed chosen
	function printer(type){
		if (TabScenes.length > 0) {
			inactive = 0;
			// we print the last scene received each time
			if (type == 'refresh') {
				delFirstElements(TabScenes,TabScenes.length)
				console.log(TabScenes);
				var currentScene = TabScenes.shift();
				afficher(currentScene);
			}
			// we print all the scenes in order at the speed choosen
			else if (type == 'trace') {
				var currentScene = TabScenes.shift();
				afficher(currentScene);
			}
		} else { 
			inactive += 1;
		} 
		// inactive for too long --> experiment seems to be stop --> we stop too (for performance of the server)
		if (inactive > 6000) {
			clearTimeout(interval);
		} else {
			// not inactive --> we continue
			typeDisplay = returnTypeDisplay();
			if (document.getElementById("speed") != null) {
				interval = setTimeout('printer(typeDisplay)',document.getElementById("speed").value*1000);
			} else {
				interval = setTimeout('printer(typeDisplay)',500);
			}
		}
	}

//################################################################################\\ Socket part - Event part
				
	// connection to the WebSocket
	var socket = io.connect('http://localhost:3000');
		
	// the event : we receive a scene --> we apply the function receiver
	socket.on('scene',function(msg) {
		receiver(msg);
	});
	
	// the server send us parameters
	socket.on('parameters',function(parameters) {
		// we add them to the html page
		ParameterReader(JSON.parse(parameters));
		// we had the 2 parameters common to all of the simulations
		$("#zone").append('<div class="spaceParam"><span class="parameters">Vitesse de rafraichissement</span><input id="speed" class="params" type="range" min="0.1" max="1" step="0.1"/></div>'
						+ '<div class="spaceParam"><span class="parameters">Mode d\'affichage<br><br></span><form id="lance"><input id="trace" type="radio" name="typeAffichage" value="trace" checked> <span>Mode Trace</span><br><input id="refresh" type="radio" name="typeAffichage" value="refresh"> Mode Refresh<br></form></div>');
		// for each parameters we set an update event listener
		$('.params').each(function() {
			var elem = $(this);
			console.log($(this));
			elem.data('oldVal', elem.val());
			$(this).on("propertychange change click keyup paste", function(event) {
				// If value has changed...
				if (elem.data('oldVal') != elem.val()) {
					// Updated stored value
					elem.data('oldVal', elem.val());
					if (elem.context.tagName == "SELECT") {
						// we prevent GAMA about this changement of value
						socket.emit('paramEmitter',"{\"id\":\""+elem.context.id+"\",\"data\":\""+elem.val()+"\"}\n");
						return false;
					} else {
						// we prevent GAMA about this changement of value
						socket.emit('paramEmitter',"{\"id\":\""+elem.context.id+"\",\"data\":"+elem.val()+"}\n");
						return false;
					}
				}
			});
		});
	});
	
	// the demand of launching the java program is taken into account
	socket.on('launched',function() {
		
		// the client ask to play the experiment
		$('#controlPlay').submit(function() {
			socket.emit('control',"1\n");
			return false;
		});
		// the client ask to pause the experiment
		$('#controlPause').submit(function() {
			socket.emit('control',"3\n");
			return false;
		});
		// the client ask to go to the next step of the experiment
		$('#controlStep').submit(function() {
			socket.emit('control',"2\n");
			return false;
		});
		// the client ask to stop the experiment
		$('#controlStop').submit(function() {
			socket.emit('control',"4\n");
			return false;
		});
		// the client ask to reload the experiment
		$('#controlReload').submit(function() {
			socket.emit('control',"6\n");
			return false;
		});
		// the client ask to launch the experiment clicked and referenced in the data-path
		$('body').on('click', 'a.treeModel', function(event) {
			socket.emit('control',$(this).data('path')+'\n');
			return false;
		});
		
		// we store the type of display choosen
		typeDisplay = returnTypeDisplay();
		// we print the scene as the type of display
		printer(typeDisplay);
		
	});
	
	/*
	socket.on('JavaClosed', function() {
		$('#envoiInfo').attr("disabled", "disabled");;
	});
	*/