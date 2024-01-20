import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { AddressComponent } from './address/address.component';
import { ResultsComponent } from './results/results.component';
import { ErrorResultComponent } from './error-result/error-result.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'address',
        pathMatch: 'full'
    }, 
    {
        path: 'address',
        component: AddressComponent
    },
    {
        path: 'results',
        component: ResultsComponent
    },
    {
        path: 'error',
        component: ErrorResultComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }