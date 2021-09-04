$.getJson = function(options) {

	options.dataType = 'json';
	
	return $.get(options);
}