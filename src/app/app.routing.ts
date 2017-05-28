import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { WatchComponent } from './components/video/watch/watch.component';
import { UploadComponent } from './components/upload/upload.component';
const APP_ROUTES: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},{
		path: 'watch',
		component: WatchComponent
	},{
		path: 'upload',
		component: UploadComponent
	}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);