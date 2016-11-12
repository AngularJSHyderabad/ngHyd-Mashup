import { Injectable } from '@angular/core';
import { Response, Jsonp, URLSearchParams } from "@angular/http";
import { Repo } from './repo.model';
import { Observable } from 'rxjs/rx';

@Injectable()
export class GHDataService {
	constructor(private jsonp: Jsonp) { }

	getRepos() {
		var params = new URLSearchParams();
		params.set("q", "angular+language:javascript");
		params.set("sort", "stars");
		params.set("order", "desc");
		params.set("callback", "JSONP_CALLBACK");

		return this.jsonp.get("https://api.github.com/search/repositories", { search: params })
			.map(res => {
				let data = res.json().data.items, repos: Repo[] = [];
				
				data.forEach(item => {
					repos.push({
						name: item.name,
						numberOfStars: item.stargazers_count,
						link: item.html_url
					});
				});
				return repos;
			});
	}
}
