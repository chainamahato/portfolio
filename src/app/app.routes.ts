import { Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home1',
        pathMatch: 'full'
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'home1',
        component: Home1Component
    },
    {
        path: 'home2',
        component: Home2Component
    }
];
