export interface CompanyProfile {
	accounts?: Accounts
	annual_return?: AnnualReturn
	branch_company_details?: BranchCompanyDetails
	can_file: boolean;
	company_name: string;
	company_number: string;
	company_status?:
		| "active"
		| "dissolved"
		| "liquidation"
		| "receivership"
		| "administration"
		| "voluntary-arrangement"
		| "converted-closed"
		| "insolvency-proceedings";
	company_status_detail?:
		| "transferred-from-uk"
		| "active-proposal-to-strike-off"
		| "petition-to-restore-dissolved"
		| "transformed-to-se"
		| "converted-to-plc";
	confirmation_statement: ConfirmationStatement
	date_of_cessation?: string
	date_of_creation?: string
	etag?: string
	external_registration_number?: string
	foreign_company_details?: ForeignCompanyDetails
	has_been_liquidated?: boolean
	/**
	 * @deprecated
	 * @this {links.charges} should be used instead
	 */
	has_charges?: boolean
	/**
	 * @deprecated
	 * @this {links.insolvency} should be used instead
	 */
	has_insolvency_history?: boolean
	/**
	 * @deprecated
	 * @this {subtype} should be used instead
	 */
	is_community_interest_company?: boolean
	jurisdiction:
		| "england-wales"
		| "wales"
		| "scotland"
		| "northern-ireland"
		| "european-union"
		| "united-kingdom"
		| "england"
		| "noneu"
	last_full_members_list_date?: string
	links: Links;
	partial_data_available?:
		| "full-data-available-from-financial-conduct-authority"
		| "full-data-available-from-department-of-the-economy"
		| "full-data-available-from-the-company";
	previous_company_names?: PreviousCompanyName[];
	registered_office_address?: RegisteredOfficeAddress;
	sic_codes?: String[];
	subtype?:
		| "community-interest-company"
		| "private-fund-limited-partnership"
	type:
		| "private-unlimited"
		| "ltd"
		| "protected-cell-company"
		| "plc"
		| "old-public-company"
		| "private-limited-guarant-nsc-limited-exemption"
		| "limited-partnership"
		| "private-limited-guarant-nsc"
		| "converted-or-closed"
		| "private-unlimited-nsc"
		| "private-limited-shares-section-30-exemption"
		| "assurance-company"
		| "oversea-company"
		| "eeig"
		| "icvc-securities"
		| "icvc-warrant"
		| "icvc-umbrella"
		| "industrial-and-provident-society"
		| "northern-ireland"
		| "northern-ireland-other"
		| "llp"
		| "royal-charter"
		| "investment-company-with-variable-capital"
		| "unregistered-company"
		| "llp"
		| "other"
		| "european-public-limited-liability-company-se"
		| "scottish-partnership"
		| "charitable-incorporated-organisation"
		| "scottish-charitable-incorporated-organisation"
		| "further-education-or-sixth-form-college-corporation"
	undeliverable_registered_office_address?: boolean;
}

export interface Accounts {
	accounting_reference_date: AccountingReferenceDate;
	last_accounts?: LastAccounts
	next_accounts?: NextAccounts
	/**
	 * @deprecated
	 * @this {next_accounts.due_on} should be used instead
	 */
	next_due?: string
	/**
	 * @deprecated
	 * @this {next_accounts.period_end_on} should be used instead
	 */
	next_made_up_to: string;
	/**
	 * @deprecated
	 * @this {next_accounts.overdue} should be used instead
	 */
	overdue: boolean;
}

export interface AccountingReferenceDate {
	day: number;
	month: number;
}

export interface LastAccounts {
	/**
	 * @deprecated
	 * @this {period_end_on} should be used instead
	 */
	made_up_to: string;
	period_end_on?: string
	period_start_on?: string
	type:
		| "null"
		| "full"
		| "small"
		| "medium"
		| "group"
		| "dormant"
		| "interim"
		| "initial"
		| "total-exemption-full"
		| "total-exemption-small"
		| "partial-exemption"
		| "audit-exemption-subsidiary"
		| "filing-exemption-subsidiary"
		| "micro-entity";
}

export interface NextAccounts {
	due_on?: string
	overdue?: boolean
	period_end_on?: string
	period_start_on?: string
}

export interface AnnualReturn {
	last_made_up_to?: string
	next_due?: string
	next_made_up_to?: string
	overdue?: boolean
}

export interface BranchCompanyDetails {
	business_activity?: string
	parent_company_name: string;
	parent_company_number: string;
}

export interface ConfirmationStatement {
	last_made_up_to?: string
	next_due: string;
	next_made_up_to: string;
	overdue?: boolean
}

export interface ForeignCompanyDetails {
	accounting_requirement?: AccountingRequirement
	accounts?: ForeignCompanyDetailsAccounts
	business_activity?: string
	company_type?: string
	governed_by?: string
	is_a_credit_finance_institution?: boolean
	originating_registry?: OriginatingRegistry
	registration_number?: string
}

export interface AccountingRequirement {
	foreign_account_type?:
		| "accounting-requirements-of-originating-country-apply"
		| "accounting-requirements-of-originating-country-do-not-apply";
	terms_of_account_publication?:
		| "accounts-publication-date-supplied-by-company"
		| "accounting-publication-date-does-not-need-to-be-supplied-by-company"
		| "accounting-reference-date-allocated-by-companies-house";
}

export interface ForeignCompanyDetailsAccounts {
	account_period_from?: AccountPeriodFrom
	account_period_to?: AccountPeriodTo
	must_file_within?: MustFileWithin
}

export interface AccountPeriodFrom {
	day: number
	month: number
}

export interface AccountPeriodTo {
	day?: number
	month?: number
}

export interface MustFileWithin {
	months?: number
}

export interface OriginatingRegistry {
	country?: string
	name?: string
}

export interface Links {
	charges: string
	filing_history: string
	insolvency: string
	officers: string
	persons_with_significant_control: string
	persons_with_significant_control_statements: string
	registers: string
	self: string;
}

export interface PreviousCompanyName {
	ceased_on?: string;
	effective_from?: string;
	name?: string;
}

export interface RegisteredOfficeAddress {
	address_line_1?: string;
	address_line_2?: string;
	care_of?: string;
	country?:
		| "Wales"
		| "England"
		| "Scotland"
		| "Great Britain"
		| "Not specified"
		| "United Kingdom"
		| "Northern Ireland"
	locality?: string;
	po_box?: string;
	postal_code?: string;
	premises?: string;
	region?: string;
}
