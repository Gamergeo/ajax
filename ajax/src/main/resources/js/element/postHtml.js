$.fn.postHtml = function(options) {
	
	return $(this).each(function() {
		options.dataType = 'html';
	
		let refreshHtml = (html) => {
			$(this).html(html);
		}
		
		options.success = $.mergeFunction(refreshHtml, options.success);
		
		return $.post(options);
	});
}