$.postJson = function(options) {

	options.data = JSON.stringify(options.data)
	options.contentType = "application/json";
	
	return $.post(options);
}