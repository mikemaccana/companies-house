import * as request from "superagent";
import { Profile } from "./profile";
import { Search } from "./search";

export class CompaniesHouseApi {
	readonly profile = new Profile(this);
	readonly search = new Search(this);

	constructor(private readonly apiKey: string) {}

	async get<T>(path: string, query: object = {}): Promise<T> {
		const response = await request
			.get(`https://api.companieshouse.gov.uk${path}`)
			.query(query)
			.set({ Authorization: `Basic ${this.apiKey}` });
		return response.body as T;
	}
}
