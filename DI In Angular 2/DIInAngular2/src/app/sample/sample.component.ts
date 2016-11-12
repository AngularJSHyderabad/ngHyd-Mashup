import { Component, Inject } from '@angular/core';
import { DataService } from './data.service';
import { Repo } from './repo.model';
import { MATH, MATH_CONST } from './math.constants';

@Component({
	selector: 'sample',
  templateUrl: './sample.component.html'
})
export class SampleComponent {
	repos: Repo[];
	area: number;
	
	constructor(private dataSvc: DataService,
	@Inject(MATH) private constant){
		dataSvc.getRepos().subscribe(repos => {
			this.repos = repos;
		});

		console.log(constant);
	}

	calculateArea(){
		let radius = 10;
		this.area = this.constant.PI * radius * radius;
	}
}
