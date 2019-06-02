import { SearchResult, SearchResultItem } from "./common";

export interface AllSearchResult
	extends SearchResult<AllSearchResultItem, "search#all"> {}

export interface AllSearchResultItem
	extends SearchResultItem<
		| "searchresult#company"
		| "searchresults#officer"
		| "searchresults#disqualified-officer"
	> {
	description?: string;
	description_identifier?: number[];
}
