import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from 'src/app/app.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { LoginComponent } from '../login';

const routes: Routes = [
    { path: 'table', component: DataTableComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: AppComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }