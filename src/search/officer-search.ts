import { SearchResult, SearchResultItem } from "./common";

export interface OfficerSearchResult
	extends SearchResult<OfficerSearchResultItem, "search#officers"> {}

export interface OfficerSearchResultItem
	extends SearchResultItem<"searchresults#officer"> {
	appointment_count;
	date_of_birth;
	description: string;
	description_identifiers?: number[];
}
