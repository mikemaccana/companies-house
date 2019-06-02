# Companies House

A JavaScript client for the [Companies House API](https://developer.companieshouse.gov.uk/api/docs/index.html)

## Currently supported functionality

- [x] Search all
- [x] Search companies
- [x] Search officers
- [x] Search disqualified officers
- [x] Retrieve company profile

Remaining functionality is a work-in-progress - all PRs welcome!

## Note

At the time of writing the Companies House API is still in beta; whilst flawed, it does actually work

## Usage

Get an API key from the [Companies House Developer Hub](https://developer.companieshouse.gov.uk/developer/applications)

### Initialise the API

Typescript example:
```
import {CompaniesHouseApi} from 'companies-house';

const api = new CompaniesHouseApi('YOUR_API_KEY');
```

Javascript example:
```
const CompaniesHouseApi = require('companies-house').CompaniesHouseApi;

const api = new CompaniesHouseApi('YOUR_API_KEY');
```
This library uses promises, so your code will look like
```
const results = await api.search.searchAll('COMPANY_NAME');
```
or
```
api.search.searchAll('COMPANY_NAME').then(results => ...);
```
