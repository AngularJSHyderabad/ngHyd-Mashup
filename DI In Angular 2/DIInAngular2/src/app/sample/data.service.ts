import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { Repo } from './repo.model';

@Injectable()
export class DataService {
	repos: Repo[];
	
	constructor() {
		this.repos = [
			{ name: 'bootstrap', numberOfStars: 103358, link: 'https://github.com/twbs/bootstrap' },
			{ name: 'react', numberOfStars: 53742, link: 'https://github.com/facebook/react' },
			{ name: 'You-Dont-Know-JS', numberOfStars: 44857, link: 'https://github.com/getify/You-Dont-Know-JS' },
			{ name: 'jquery', numberOfStars: 42184, link: 'https://github.com/jquery/jquery' },
			{ name: 'electron', numberOfStars: 34832, link: 'https://github.com/electron/electron' }
		];
	}

	getRepos() {
		return Observable.from([this.repos]);
	}
}
