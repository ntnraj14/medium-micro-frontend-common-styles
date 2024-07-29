import { Routes } from '@angular/router';
import { Component1Component } from './components/component-1/component-1.component';
import { Component2Component } from './components/component-2/component-2.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
{path: '', component: AppComponent}, 
{
    path: 'comp-1', component: Component1Component
},
{
    path: 'comp-2', component: Component2Component
}
];
