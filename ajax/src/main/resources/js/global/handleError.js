/**
 * Classic error handling, must be overriden
 */

$.handleError = function(errorMessage) {
	throw 'handle Error must be overriden' + errorMessage.responseText;
}