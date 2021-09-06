$.getJson = function(options) {

	options.dataType = 'json';
	options.error = $.handleError;
	
	return $.get(options);
}