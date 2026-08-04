import { Routes } from '@angular/router';

import { LandingPage } from './landingPage';
import { Calculator } from './calculator/calculator';

export const routes: Routes = [
	{ path: '', component: LandingPage },
	{ path: 'calculator', component: Calculator },
];
