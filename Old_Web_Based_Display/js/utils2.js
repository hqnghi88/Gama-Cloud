// Read the ExploringTreeModel and construct the exploring tree in the html page
function XMLmodel() {
	$.ajax({
            type: "GET",
            url: "/data/xml/Experiments.xml",
            dataType: "xml",
            success: function(xml) {
						var root = xml.documentElement;
						var result = XMLrec(root);
						$("#navigation").append('<br><ol class="tree">'+result+'</ol>');
			}
    });
}

// Recursive function to explore the ExploringTreeModel reading in XMLmodel()
function XMLrec(xmlTag) {
	var result ="";
	if (xmlTag.hasChildNodes()){
		for(var i = 0; i< xmlTag.childNodes.length; i++){		
			var element = xmlTag.childNodes[i];
			if (element.nodeName == "Folder") {
				result += '<li><label for="'+element.getAttribute('id')+'">'+element.getAttribute('name')+'</label> <input type="checkbox" id="'+element.getAttribute('id')+'" /><ol>';
				result += XMLrec(element);
				result += '</ol></li>';
				} else if(element.nodeName == "GamlFile") {
					result += '<li><label for="'+element.getAttribute('id')+'">'+element.getAttribute('name')+'</label> <input type="checkbox" id="'+element.getAttribute('id')+'" /><ol>';
					var fils;
					for (var j = 0; j< element.childNodes.length; j++){	
						fils = element.childNodes[j];
						if (fils.nodeName == "Experiment") {
							if (fils.nodeValue == null) {
								if (fils.hasChildNodes()) {
									for (var k = 0; k < fils.childNodes.length; k++) {
										result += '<li class="file"><a class="treeModel" href="javascript:void(0)" data-path="'+element.getAttribute('path')+'\#'+fils.childNodes[k].nodeValue+'">'+fils.childNodes[k].nodeValue+'</a></li>';
									}
								}
							} else {
								result += '<li class="file"><a class="treeModel" href="javascript:void(0)" data-path="'+element.getAttribute('path')+'\#'+fils.childNodes[k].nodeValue+'">'+fils.childNodes[k].nodeValue+'</a></li>';
							}
						}
					}
					result += '</ol></li>';
				} else {
					result += XMLrec(element);
				}
			
		}
	}
	return result;
}

// Read and Construct the parameters received from GAMA in the html page
function ParameterReader(parameters) {
	document.getElementById("zone").innerHTML = "";
	parameters.parameters.forEach(function(param) {
		var parameter = "";
		switch(param.type) {
			case "int":
				switch(param.category) {
					case "slider":
						parameter = '<div class="spaceParam"><span class="parameters">'+param.title+'</span><output for="'+param.id+'" id="'+param.id+'1" name="'+param.id+'1">'+param.initvalue+'</output><input id="'+param.id+'" class="params" name="'+param.id+'" type="range" min="'+param.minvalue+'" max="'+param.maxvalue+'" value="'+param.initvalue+'" step="1" oninput="'+param.id+'1.value='+param.id+'.value"/></div>';
						break;
					case "input":
						parameter = '<div class="spaceParam"><span class="parameters">'+param.title+'</span><input id="'+param.id+'" class="params" type="number" value="'+param.initvalue+'" step="1" /></div>';
						break;
					default:
						parameter ="";
						break;
				}
				break;
			case "string":
				var select = '<option value="'+param.initvalue+'" selected>'+param.initvalue+'</option>';
				param.values.forEach(function (option) {
					select += '<option value="'+option+'">'+option+'</option>';
				});
				parameter = '<div class="spaceParamSelect"><span class="parameters">'+param.title+'</span><div class="selectdiv"><select id="'+param.id+'" class="params">'+select+'</select></div><br><br><br></div>';
				break;
			case "float":
				parameter = '<div class="spaceParam"><span class="parameters">'+param.title+'</span><input id="'+param.id+'" class="params" type="number" value="'+param.initvalue+'" step="any"/></div>';
				break;
			default :
				parameter="";
				break;
		}
		$("#zone").append(parameter);
	});
}