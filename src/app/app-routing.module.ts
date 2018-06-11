import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElementryComponent } from './elementry/elementry.component';
import { Home0Component } from './home0/home0.component';



// const routes: Routes = [
//   { path: '', redirectTo: '/#', pathMatch: 'full' }
//
//
//
// ];


@NgModule({

    exports: [ RouterModule ]
})
export class AppRoutingModule { }
