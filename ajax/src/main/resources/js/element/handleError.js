/**
 * Classic error handling, must be overriden
 */

$.fn.handleError = function(errorMessage) {
	throw 'handle Error must be overriden' + errorMessage.responseText;
}