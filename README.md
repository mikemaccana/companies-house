# Companies House

A JavaScript client for the [Companies House API](https://developer.companieshouse.gov.uk/api/docs/index.html)

## Note

This is currently limited to the search API, however you can easily add whatever other APIs you need and send me a pull request.

## Usage

Get an API key, also known as a 'Client ID' from [Companies House Developer Hub](https://developer.companieshouse.gov.uk/developer/applications)

	var companiesHouse = require('companies-house')('YOUR_API_KEY')

	companiesHouse.search('certsimple', function(err, res){
		console.log(err)
		console.log(res)
	})


