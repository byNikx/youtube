import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { WatchComponent } from './components/video/watch/watch.component';

const APP_ROUTES: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},{
		path: 'watch',
		component: WatchComponent
	}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);