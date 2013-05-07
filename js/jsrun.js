$(function() {

	var json

	$.get('files/dataobject.xml', function(xml){
		json = $.xml2json(xml);
		printProducts();
	});

	function printProducts(){

		for (var i = 0; i < 5; i++ )
		{
			$('#main_container').append('<h2>' +json.offers.product[i].name + '</h2>')
			$('#main_container').append('<img src="' +json.offers.product[i].image + '"/>')
		}
	}


});