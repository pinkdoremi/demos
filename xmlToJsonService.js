/**
 * Created by hx09848 on 2014/11/25.
 */
app.factory("xmlToJsonService", [function () {
	function xmlToJson(xml) {

	    // Create the return object
	    var obj = {};
	    if (xml.nodeType == 1) { // element
	        // do attributes
	        if (xml.attributes.length > 0) {
	        obj["@attributes"] = {};
	            for (var j = 0; j < xml.attributes.length; j++) {
	                var attribute = xml.attributes.item(j);
	                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
	            }
	        }
	    } else if (xml.nodeType == 3) { // text
	        obj = xml.nodeValue;
	    }
	 
	    // do children
	    if (xml.hasChildNodes()) {
	        for(var i = 0; i < xml.childNodes.length; i++) {
	            var item = xml.childNodes.item(i);
	            var nodeName = item.nodeName;
	            if (typeof(obj[nodeName]) == "undefined") {
	            	if(nodeName == "#text"){
	            		obj = xmlToJson(item);
	            	}else{
	            		obj[nodeName] = xmlToJson(item);
	            	}
	            } else {
	                if (typeof(obj[nodeName].length) == "undefined") {
	                    var old = obj[nodeName];
	                    obj[nodeName] = [];
	                    obj[nodeName].push(old);
	                }
	                obj[nodeName].push(xmlToJson(item));
	            }
	        }
	    }
	    return obj;
	}
    return xmlToJson;
}]);