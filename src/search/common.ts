export interface SearchResult<T extends SearchResultItem<any>, U> {
	etag?: string;
	items?: T[];
	items_per_page?: number;
	kind?: U;
	start_index?: number;
	total_results?: number;
}

export interface SearchResultItem<T> {
	address: Address;
	address_snippet: string;
	kind: T;
	links?: Links;
	matches?: Match[];
	snippet?: string;
	title: string;
}

export interface Address {
	address_line_1: string;
	address_line_2?: string;
	care_of?: string;
	country?:
		| "Wales"
		| "England"
		| "Scotland"
		| "Great Britain"
		| "Not specified"
		| "United Kingdom"
		| "Northern Ireland";
	locality?: string;
	po_box?: string;
	postal_code?: string;
	region?: string;
}

export interface Links {
	self: string;
}

export interface Match {
	address_snippet?: string;
	snippet?: string;
	title?: string;
}
