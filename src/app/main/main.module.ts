import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent, FooterComponent, SidebarComponent, TopbarComponent } from '../core/layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MainComponent
    }]),
    BreadcrumbComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent
  ],
  declarations: [MainComponent]
})
export class MainModule { }
