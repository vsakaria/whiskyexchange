
$.get('files/dataobject.xml', function(xml){
	var json = $.xml2json(xml);

	console.log("this is the JSON")
	console.log(json);
});

console.log("JS run");

