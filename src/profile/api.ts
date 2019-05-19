import { CompaniesHouseApi } from "../api";
import { CompanyProfile } from "./company-profile";

export class Profile {
	constructor(private api: CompaniesHouseApi) {
	}

	getByCompanyNumber(companyNumber: string): Promise<CompanyProfile> {
		return this.api.get<CompanyProfile>(`/company/${companyNumber}`);
	}
}
