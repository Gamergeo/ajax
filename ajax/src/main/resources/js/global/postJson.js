$.postJson = function(options) {

	options.data = JSON.stringify(options.data)
	options.contentType = "application/json";
	options.error = $.handleError;
	
	return $.post(options);
}