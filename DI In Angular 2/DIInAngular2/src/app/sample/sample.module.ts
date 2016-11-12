import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SampleComponent } from './sample.component';
import { DataService } from './data.service';
import { GHDataService } from './ghdata.service';
import { dataServiceFactory } from './dataservice.factory';
import { MATH, MATH_CONST } from './math.constants';

@NgModule({
	imports: [CommonModule, FormsModule, HttpModule, JsonpModule],
	declarations: [SampleComponent],
	exports: [SampleComponent],
	providers: [ {provide: DataService, useFactory: dataServiceFactory},
	{ provide: MATH, useValue: MATH_CONST }]
})
export class SampleModule { }
