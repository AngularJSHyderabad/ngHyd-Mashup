import { Component } from '@angular/core';
import { CountService } from './count.service';

@Component({
	selector: 'count-main',
	template: `<div>The count in the main component is: {{count}}</div>
						<count-sub></count-sub>`
})
export class CountMainComponent {
	count: number;

	constructor(private countSvc: CountService) {
		this.count =  countSvc.increment();
	}
}
