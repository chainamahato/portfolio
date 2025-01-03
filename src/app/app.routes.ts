import { Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/home2/home2.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
