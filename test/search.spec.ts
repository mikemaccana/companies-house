import { expect } from "chai";
import { CompaniesHouseApi } from "../src";

suite("Search", () => {
	let api: CompaniesHouseApi;

	setup(() => {
		api = new CompaniesHouseApi(process.env.COMPANIES_HOUSE_API_KEY as string);
	});

	suite("Options", async () => {
		test("should affect number of returned items", async () => {
			const numItems = 5;
			const results = await api.search.searchAll("test", {
				items_per_page: numItems
			});
			expect(results.items!.length).equals(numItems);
		});
	});

	suite("Search all", () => {
		test("should return results", async () => {
			const results = await api.search.searchAll("test");
			expect(results.items!.length).greaterThan(0);
		});
	});

	suite("Search companies", () => {
		test("should return results", async () => {
			const results = await api.search.searchCompanies("test");
			expect(results.items!.length).greaterThan(0);
		});
	});

	suite("Search officers", () => {
		test("should return results", async () => {
			const results = await api.search.searchOfficers("test");
			expect(results.items!.length).greaterThan(0);
		});
	});

	suite("Search disqualified officers", () => {
		test("should return results", async () => {
			const results = await api.search.searchDisqualifiedOfficers("test");
			expect(results.items!.length).greaterThan(0);
		});
	});
});
