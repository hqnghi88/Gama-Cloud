var addTreeWidth;
var addMonitorsWidth;
var inspectorHeight;
var monitorHeight;
var monitorIsClosed = false;
var inspectorIsClosed = false;

// Define the behavior of the class resize-right
interact('.resize-right')
  .resizable({
    preserveAspectRatio: false,
    edges: { left: false, right: true, bottom: false, top: false },
	onend  : function (event) {
		resizeScene();
	}
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0);
	var delta = target.offsetWidth - event.rect.width;
	//resizeNeighboor(target,delta);
	var style = window.getComputedStyle(target),
	min = style.getPropertyValue('min-width'),
    max = style.getPropertyValue('max-width');
	min = parseInt(min.substring(0,min.length-2));
	if (max.search("px") > -1) {
		max = parseInt(max.substring(0,max.length-2));
	} else {
		if (document.body) {
			var larg = (document.body.clientWidth);
		} else {
			var larg = (window.innerWidth);
		}
		max = parseInt(max.substring(0,max.length-1));
		max = Math.round((max/100)*larg);
	}
	if ((event.rect.width < max-12)&&(event.rect.width > min)) {
		target.style.width  = event.rect.width + 'px';
		var dispDiv = document.getElementById("display-inside");
		//document.getElementById('container').offsetHeight = document.getElementById('display').offsetWidth;
		switch (target.getAttribute('id')) {
			case "nav":
				document.getElementById("nav-inside").style.width = event.rect.width-10+'px';
				dispDiv.style.width = dispDiv.offsetWidth+delta+"px";
				break;
			case "parameters":
				document.getElementById("parameters-inside").style.width = event.rect.width-10+'px';
				dispDiv.style.width = dispDiv.offsetWidth+delta+"px";
				break;
			default:
				break;
		}
		target.style.webkitTransform = target.style.transform =
			'translate(' + x + 'px,' + 0 + 'px)';
		target.setAttribute('data-x', x);
	}
  });

// Define the behavior of the class resize-left
interact('.resize-left')
  .resizable({
    preserveAspectRatio: false,
    edges: { left: true, right: false, bottom: false, top: false },
	onend  : function (event) {
		resizeScene();
	}
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
		delta = target.offsetWidth - event.rect.width;
	var dispDiv = document.getElementById("display-inside");
	var style = window.getComputedStyle(target),
    min = style.getPropertyValue('min-width');
	min = parseInt(min.substring(0,min.length-2));
	max = style.getPropertyValue('max-width');
	if (max.search("px") > -1) {
		max = parseInt(max.substring(0,max.length-2));
	} else {
		if (document.body) {
			var larg = (document.body.clientWidth);
		} else {
			var larg = (window.innerWidth);
		}
		max = parseInt(max.substring(0,max.length-1));
		max = (max/100)*larg;
	}
	if ((min < event.rect.width)&&(max-12 > event.rect.width)) {
		// update the element's style
		target.style.width  = event.rect.width + 'px';
		document.getElementById("monitors").style.width = event.rect.width+'px';
		document.getElementById("monitors-inside").style.width = event.rect.width-10+'px';
		dispDiv.style.width = dispDiv.offsetWidth+delta+"px";
		target.setAttribute('data-x', x);
	}
  });
  
// Define the behavior of the element monitor  
interact('#monitor')
  .resizable({
    preserveAspectRatio: false,
    edges: { left: false, right: false, bottom: true, top: false }
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
		delta = target.offsetHeight - event.rect.height;
	var style = window.getComputedStyle(target),
    min = style.getPropertyValue('min-height');
	max = style.getPropertyValue('max-height');
	if (max.search("px") > -1) {
		max = parseInt(max.substring(0,max.length-2));
	} else {
		max = parseInt(max.substring(0,max.length-1));
		max = (max/100)*document.getElementById('monitors-inside').offsetHeight;
	}
	if (min.search("px") > -1) {
		min = parseInt(min.substring(0,min.length-2));
	} else {
		min = parseInt(min.substring(0,min.length-1));
		min = (min/100)*document.getElementById('monitors-inside').offsetHeight;
	}
	if ((min < event.rect.height)&&(max > event.rect.height)&&(!inspectorIsClosed)) {
		// update the element's style
		target.style.height  = event.rect.height + 'px';
		var target = document.getElementById('inspector');
			inspectorHeight = (target.parentNode.offsetHeight-event.rect.height)/target.parentNode.offsetHeight; 
		target.style.webkitTransform = target.style.transform =
			'translate(' + x + 'px,' + 0 + 'px)';
		target.setAttribute('data-x', x);
	}
  });
  
// Define the behavior when the window is resized  
$(window).resize(function(){
	// Allow to the display flex of the container to resize correctly the elements contains in it
		document.getElementById('scenes').style.display = "none";
		document.getElementById('display').style.width = null;
		document.getElementById('display-inside').style.width = null;
	// We resize correctly the insides element
		[].forEach.call(document.getElementsByClassName("inside"), function (el) {
			if (el.getAttribute('id') != "display-inside") {
				el.style.width = el.parentNode.offsetWidth-10+'px';
			} 			 
			document.getElementById('scenes').style.width = document.getElementById('display-inside').offsetWidth+'px';
		});
	// We resize the WebGL canvas
	resizeScene();
	// We re-display the scenes
	document.getElementById('scenes').style.display = "inline";
});
  
// This function which is called after all the html page is loaded by the browser
function onLoad() {
	
	// Allow to the display flex of the container to resize correctly the elements contains in it
	document.getElementById('scenes').style.display = "none";
	
	// Initialize the scene / WebGL canvas
	initializeScene(null); 
    // Animate the scene 
    animateScene(); 
	
	// We resize correctly the insides element
	[].forEach.call(document.getElementsByClassName("inside"), function (el) {
		if (el.getAttribute('id') != "display-inside") {
			el.style.width = el.parentNode.offsetWidth-10+'px';
			el.parentNode.style.width = el.parentNode.offsetWidth-0+'px';
		} else {
			el.parentNode.style.width = el.parentNode.offsetWidth+'px';
		}
		el.style.height = el.parentNode.offsetHeight-10+'px';
	});
	
	// We re-display the scenes
	document.getElementById('scenes').style.display = "inline";
	
	// We resize the WebGL canvas
	resizeScene();
	
	// We set the height of the element paramStore ~where the parameters are
	document.getElementById('paramStore').style.height = document.getElementById('parameters-inside').offsetHeight-33+'px';
	
	// We construct the ExploringTreeModel ~what's inside the navigation container
	XMLmodel();
	
	// We signal to the server the client is ready
	socket.emit('lancement');
	
	// We store the percent of height of the inspector in its parentNode
	inspectorHeight = ((document.getElementById('inspector').parentNode.offsetHeight - document.getElementById('monitor').offsetHeight)/document.getElementById('inspector').parentNode.offsetHeight);
	
	// Storing the Navigation Adder width
		var style = window.getComputedStyle(document.getElementById('addTreeView')),
			w = style.getPropertyValue('width');
		addTreeWidth = parseInt(w.substring(0,w.length-2));
	
	// Storing the Monitors Adder width
		var style2 = window.getComputedStyle(document.getElementById('addMonitorsView')),
			w = style.getPropertyValue('width');
		addMonitorsWidth = parseInt(w.substring(0,w.length-2));
	
	
	// #########################################       CLOSE NAVIGATION       ############################################# \\ 

		// Client click on the close button
		document.getElementById("close-nav").onclick = function () {
		$('#dispSizeLaunch').add("#dispSize").click();
	};
		
		// Take off the Navigation element, add the Navigation Adder with animation
		document.getElementById('dispSizeLaunch').onclick =function () {
		document.getElementById("nav").style.minWidth = "0px";
		jQuery('#nav').animate({width : -2},700,"easeInQuart",function(){
			document.getElementById('addTreeView').style.width = "0px";
			$('#addTreeView').show();
			document.getElementById('addTreeView').style.display = "flex";
			$('#addTreeView').animate({width : addTreeWidth+10},400,"swing",function() {
				resizeScene();
			});			
		});
	};
		
		// Resize the Display element correctly with animation
		document.getElementById('dispSize').onclick = function () {
		var dispWidth = document.getElementById("nav").offsetWidth + document.getElementById("display").offsetWidth;
		$('#display-inside').animate({width : dispWidth},700,"easeInQuart",function(){
			$('#display-inside').animate({width : dispWidth-addTreeWidth-17},400,"swing");
		});	
	};
	
	
	// #########################################        CLOSE MONITORS        ############################################# \\
		
		
		// The client click on the close button of the monitor
		document.getElementById("close-monitor").onclick = function () {
		if (inspectorIsClosed) {
			$('#dispSize3').add("#dispSizeLaunch2").click();
		} else {
			monitorIsClosed = true;
			var target = document.getElementById('monitor');
			monitorHeight = target.offsetHeight/target.parentNode.offsetHeight;
			document.getElementById('monitor').style.minHeight = "0px";
			$('#monitor-reductor').add('#inspSize').click();
		}
	};
		
		// The client click on the close button of the inspector
		document.getElementById("close-inspector").onclick = function () {
		if (monitorIsClosed) {
			$('#dispSize3').add("#dispSizeLaunch2").click();
		} else {
			inspectorIsClosed= true;
			var target = document.getElementById('inspector');
			$('#inspector-reductor').add('#moniSize').click();
		}
	};
		
		
	// ######################################### CLOSE BOTH ### \\
		
		
		// Resize the Display element correctly with animation
		document.getElementById('dispSize3').onclick = function () {
		var dispWidth = document.getElementById("monitors").offsetWidth + document.getElementById("display").offsetWidth;
		$('#display-inside').animate({width : dispWidth-10},700,"easeInQuart",function(){
			$('#display-inside').animate({width : dispWidth-addMonitorsWidth-17},400,"swing");
		});	
	};
		
		// Take off the Monitors element (inspector+monitor), add the Monitors Adder with animation
		document.getElementById('dispSizeLaunch2').onclick =function () {
		document.getElementById("monitors").style.minWidth = "0px";
		jQuery('#monitors').animate({width : -2},700,"easeInQuart",function(){
			$('#monitors').hide();
			document.getElementById('addMonitorsView').style.width = "0px";
			$('#addMonitorsView').show();
			document.getElementById('addMonitorsView').style.display = "flex";
			$('#addMonitorsView').animate({width : addMonitorsWidth+5},400,"swing",function() {
				resizeScene();
			});			
		});
	};
		
		
	// ######################################### CLOSE MONITOR ### \\
		
		
		// Take off the monitor element, add the Monitor Adder with animation
		document.getElementById('monitor-reductor').onclick = function() {
		document.getElementById('addMonitor').style.height = null;
		jQuery('#monitor').animate({height : -20},900,"easeInQuart",function(){
			$('#monitor').hide();
			var style = window.getComputedStyle(document.getElementById('addMonitor')),
			heightAdd = style.getPropertyValue('height');
			heightAdd = parseInt(heightAdd.substring(0,heightAdd.length-2));
			document.getElementById('addMonitor').style.height = "0px";
			$('#addMonitor').show();
			jQuery('#addMonitor').animate({height : heightAdd},400,"swing");
		});
	};
		
		// Resize the Inspector element correctly with animation
		document.getElementById('inspSize').onclick = function() {
		var style = window.getComputedStyle(document.getElementById('addMonitor')),
			heightAdd = style.getPropertyValue('height');
		heightAdd = parseInt(heightAdd.substring(0,heightAdd.length-2));
		var h = document.getElementById('monitors-inside').offsetHeight - heightAdd -10;
		jQuery('#inspector').animate({height : "100%"},900,"easeInQuart",function(){
			//document.getElementById('inspector').style.display = "flex";
			jQuery('#inspector').animate({height : h},400,"swing");
		});
	};
		
		
	// ######################################### CLOSE INSPECTOR ### \\
		
		// Take off the Inspector element, add the Inspector Adder with animation
		document.getElementById('inspector-reductor').onclick = function() {
		var style = window.getComputedStyle(document.getElementById('addInspector')),
			heightAdd = style.getPropertyValue('height');
		heightAdd = parseInt(heightAdd.substring(0,heightAdd.length-2));
		var moniH = document.getElementById('monitors-inside').offsetHeight - heightAdd - 10;
		document.getElementById('monitor').style.maxHeight = "100%";
		console.log(inspectorHeight*document.getElementById('monitors-inside').offsetHeight);
		document.getElementById('inspector').style.height = inspectorHeight*document.getElementById('monitors-inside').offsetHeight;
		document.getElementById('addInspector').style.height = null;
		jQuery('#inspector').animate({height : -2},900,"easeInQuart",function(){
			$('#inspector').hide();
			
			document.getElementById('addInspector').style.height = "0px";
			$('#addInspector').show();
			jQuery('#addInspector').animate({height : heightAdd},400,"swing",function() {
				document.getElementById('monitor').style.maxHeight = moniH+"px";
			});
		});
	};
		
		// Resize the Monitor element correctly with animation
		document.getElementById('moniSize').onclick = function() {
		document.getElementById('addInspector').style.height = null;
		var style = window.getComputedStyle(document.getElementById('addInspector')),
			heightAdd = style.getPropertyValue('height');
		heightAdd = parseInt(heightAdd.substring(0,heightAdd.length-2));
		var h = document.getElementById('monitors-inside').offsetHeight - heightAdd -10;
		jQuery('#monitor').animate({height : h+heightAdd+10},900,"easeInQuart",function(){
			jQuery('#monitor').animate({height : h},400,"swing");
		});
	};
		
		
	// #########################################       OPEN  NAVIGATION       ############################################# \\
		
		
		// The client click on the Navigation Adder
		document.getElementById("addTreeContainer").onclick = function () {
			$('#dispSize2').add("#treeButton").click();
		};
		
		// Resize the Display element correctly with animation
		document.getElementById('dispSize2').onclick = function () {
			if (document.body) {
				var larg = (document.body.clientWidth) - 30;
			} else {
				var larg = (window.innerWidth) - 30;
			}
			larg = larg*0.2;
			var dispWidth = document.getElementById("display").offsetWidth + document.getElementById('addTreeView').offsetWidth;
			$('#display-inside').animate({width :dispWidth},400,"swing",function(){
				$('#display-inside').animate({width : dispWidth-larg+5},700,"easeInQuart");
			});	
		};
		
		// Take off the Navigation Adder, add the Navigation element with animation
		document.getElementById('treeButton').onclick = function() {
			if (document.body) {
				var larg = (document.body.clientWidth) - 30;
			} else {
				var larg = (window.innerWidth) - 30;
			}
			document.getElementById('nav-inside').style.width = (larg*0.2)-10+'px';
			jQuery('#addTreeView').animate({width : -2},400,"swing",function(){
				$('#addTreeView').hide();			
				jQuery('#nav').animate({width : "20%"},700,"easeInQuart",function(){
					document.getElementById('nav').style.minWidth = null;	
					resizeScene();
				});
			});
		};
		
		
	// #########################################        OPEN  MONITORS        ############################################# \\
	
	
	// ######################################### OPEN BOTH ### \\
		
		
		// The client click on the Monitors Adder
		document.getElementById("addMonitorsContainer").onclick = function () {
			$('#dispSize4').add("#monitorButton").click();
		};
		
		// Resize the Display element correctly with animation
		document.getElementById('dispSize4').onclick = function () {
			if (document.body) {
				var larg = (document.body.clientWidth) - 30;
			} else {
				var larg = (window.innerWidth) - 30;
			}
			larg = larg*0.2;
			var dispWidth = document.getElementById("display").offsetWidth + document.getElementById('addMonitorsView').offsetWidth;
			$('#display-inside').animate({width :dispWidth},400,"swing",function(){
				$('#display-inside').animate({width : dispWidth-larg+5},700,"easeInQuart");
			});	
		};
		
		// Take off the Monitors Adder, add the Monitors element with animation
		document.getElementById('monitorButton').onclick = function() {
			if (document.body) {
				var larg = (document.body.clientWidth) - 30;
			} else {
				var larg = (window.innerWidth) - 30;
			}
			document.getElementById('monitors-inside').style.width = (larg*0.2)-15+'px';
			jQuery('#addMonitorsView').animate({width : -4},400,"swing",function(){
				$('#addMonitorsView').hide();		
				document.getElementById('monitors').style.width = 0+"px";
				document.getElementById('monitors').style.display = "inline";
				jQuery('#monitors').animate({display:"inline",width : "20%"},700,"easeInQuart",function(){
					document.getElementById('monitors').style.minWidth = null;	
					resizeScene();
				});
			});
		};
		
		
	// ######################################### OPEN MONITOR ### \\
		
		
		// The client click on the Monitor Adder
		document.getElementById("addMonitorContainer").onclick = function () {
			monitorIsClosed = false;
			$('#sizeInsp').add('#addMonitorBtn').click();
		};
		
		// Resize the Inspector element correctly with animation
		document.getElementById('sizeInsp').onclick = function () {
			var h = document.getElementById("monitors-inside").offsetHeight;
			$('#inspector').animate({height : h},400,"swing",function(){
				$('#inspector').animate({height: h-(h*monitorHeight)},700,"easeInQuart",function() {
					document.getElementById('inspector').style.height = null;
				});
			});
		};
		
		// Take off the Monitor Adder, add the Monitor element with animation
		document.getElementById('addMonitorBtn').onclick = function() {
			jQuery('#addMonitor').animate({height : -2},400,"swing",function(){
				$('#addMonitor').hide();
				$('#monitor').show();
				document.getElementById('monitor').style.display = null;			
				jQuery('#monitor').animate({height : monitorHeight*100+"%"},700,"easeInQuart",function(){
					document.getElementById('monitor').style.minHeight = null;	
				});
			});
		};
		
		
	// ######################################### CLOSE INSPECTOR ### \\
	
		
		// The client click on the Monitor Adder
		document.getElementById("addInspectorContainer").onclick = function () {
			inspectorIsClosed = false;
			$('#sizeMoni').add('#addInspectorBtn').click();
		};
		
		// Resize the Monitor element correctly with animation
		document.getElementById('sizeMoni').onclick = function () {
			var h = document.getElementById("monitors-inside").offsetHeight;
			$('#monitor').animate({height : h},400,"swing",function(){
				$('#monitor').animate({height: h-(h*inspectorHeight)},700,"easeInQuart");
			});
		};
		
		// Take off the Inspector Adder, add the Inspector element with animation
		document.getElementById('addInspectorBtn').onclick = function() {
			document.getElementById('monitor').style.maxHeight = "100%";
			jQuery('#addInspector').animate({height : -2},400,"swing",function(){
				$('#addInspector').hide();
				$('#inspector').show();
				document.getElementById('inspector').style.display = null;			
				jQuery('#inspector').animate({height : inspectorHeight*100+"%"},700,"easeInQuart",function(){
					document.getElementById('monitor').style.height = 100-(inspectorHeight*100)+"%";
					console.log(100-(inspectorHeight*100)+"%");
					document.getElementById('inspector').style.height = null;
					document.getElementById('inspector').style.minHeight = null;	
					document.getElementById('monitor').style.maxHeight = null;	
				});
			});
		};
		
}