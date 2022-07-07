import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '',   redirectTo: 'AppCompenet', pathMatch: 'full' },
  { path: 'App', component: AppComponent},
  { path: 'transactions', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
