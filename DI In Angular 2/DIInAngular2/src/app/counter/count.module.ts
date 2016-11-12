import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountService } from './count.service';
import { CountMainComponent } from './count-main.component';
import { CountSubComponent } from './count-sub.component';

@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [CountMainComponent, CountSubComponent],
	providers: [CountService],
	exports: [CountMainComponent, CountSubComponent]
})
export class CountModule { }
