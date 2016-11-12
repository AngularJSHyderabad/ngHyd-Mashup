import { Component } from '@angular/core';
import { CountService } from './count.service';

@Component({
	selector: 'count-sub',
	template: `<div>The count in the sub component is: {{count}}</div>`,
	providers: [CountService]
})
export class CountSubComponent {
	count: number;

	constructor(private countSvc: CountService) {
		this.count = this.countSvc.increment();
	}
}
