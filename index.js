var superagent = require('superagent');

var log = console.log.bind(console)

// https://developer.companieshouse.gov.uk/developer/applications
// http://forum.aws.chdev.org/t/confusing-documentation-for-beta-api/49/2
module.exports = function(apiKey){

	var API_KEY = apiKey

	var getHelper = function(endPoint, query, cb){
		superagent
		.get('https://api.companieshouse.gov.uk/'+endPoint)
		.query(query)
		// From https://developer.companieshouse.gov.uk/api/docs/index/gettingStarted/apikey_authorisation.html
		// the Companies House API takes the username as the API key and ignores the password;
		.auth(API_KEY, '')
		.end(cb)
	}

	var search = function(item, cb){
		getHelper('search/companies', {
			q: item
		}, cb)
	}

  var profile = function(number, cb) {
    getHelper('company/' + number, {}, cb);
  }

	return {
    search: search,
    profile: profile
	}
}
