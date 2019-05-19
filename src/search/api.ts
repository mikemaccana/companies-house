import { CompaniesHouseApi } from "../api";
import { AllSearchResult } from "./all-search";

export interface SearchOptions {
	itemsPerPage?: number;
	startIndex?: number;
}

export class Search {
	constructor(private api: CompaniesHouseApi) {}

	searchAll(query: string, options?: SearchOptions): Promise<AllSearchResult> {
		return this.api.get<AllSearchResult>("/search", {
			q: query,
			...options
		});
	}

	searchCompanies(query: string, options?: SearchOptions): Promise<AllSearchResult> {
		return this.api.get<AllSearchResult>("/search/companies", {
			q: query,
			...options
		});
	}

	searchOfficers(query: string, options?: SearchOptions): Promise<AllSearchResult> {
		return this.api.get<AllSearchResult>("/search/disqualified-officers", {
			q: query,
			...options
		});
	}

	searchDisqualifiedOfficers(query: string, options?: SearchOptions): Promise<AllSearchResult> {
		return this.api.get<AllSearchResult>("/search/officers", {
			q: query,
			...options
		});
	}
}
