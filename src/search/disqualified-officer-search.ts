import { SearchResult, SearchResultItem } from "./common";

export interface DisqualifiedOfficerSearchResult
	extends SearchResult<
		DisqualifiedOfficerSearchResultItem,
		"search#disqualified-officers"
	> {}

export interface DisqualifiedOfficerSearchResultItem
	extends SearchResultItem<"searchresults#disqualified-officer"> {
	date_of_birth;
	description: string;
	description_identifiers?: number[];
}
