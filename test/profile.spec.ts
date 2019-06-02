import { expect } from "chai";
import { CompaniesHouseApi } from "../src";

suite("Profile", () => {
	let api: CompaniesHouseApi;

	setup(() => {
		api = new CompaniesHouseApi(process.env.COMPANIES_HOUSE_API_KEY as string);
	});

	suite("getByCompanyNumber", () => {
		test("should return correct company", async () => {
			const companyNumber = "01624297";
			const result = await api.profile.getByCompanyNumber(companyNumber);
			expect(result.company_number).equals(companyNumber);
		});
	});
});
