import { DataService } from './data.service';

export function dataServiceFactory() {
	let dataSvc = new DataService();
	dataSvc.repos = [{ name: 'node-v0.x-archive', numberOfStars: 36000, link: 'https://github.com/nodejs/node-v0.x-archive' },
	{ name: 'awesome-nodejs', numberOfStars: 14312, link: 'https://github.com/sindresorhus/awesome-nodejs' },
	{ name: 'stylus', numberOfStars: 5612, link: 'https://github.com/stylus' }];

	return dataSvc;
}
