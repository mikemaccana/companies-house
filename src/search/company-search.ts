import { CompanyStatus } from "../common";
import { SearchResult, SearchResultItem } from "./common";

export interface CompanySearchResult
	extends SearchResult<CompanySearchResultItem, "search#company"> {}

export interface CompanySearchResultItem
	extends SearchResultItem<"searchresult#company"> {
	company_number: string;
	company_status: CompanyStatus;
	company_type;
	date_of_cessation;
	date_of_creation;
	description?: string;
	description_identifier?: number[];
	external_registration_number;
}
