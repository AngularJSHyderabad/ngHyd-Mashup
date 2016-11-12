import { Routes, RouterModule } from '@angular/router';
import { CountMainComponent } from './counter/count-main.component';
import { SampleComponent } from './sample/sample.component';

export const App_Routes: Routes = [
	{ path: '', component: CountMainComponent },
	{ path: 'second', component: SampleComponent },
	{ path: '**', redirectTo: '' }
];

export const App_Routing = RouterModule.forRoot(App_Routes);
