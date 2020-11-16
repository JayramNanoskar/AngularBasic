import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCompComponent } from './view-comp/view-comp.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewCompComponent],
  imports: [
    CommonModule,
    FormsModule // to support ngModel directive in view
  ],
  exports: [
    ViewCompComponent // need to export component created inside module, so that another module can use exported component using this module
  ]
})
export class ViewModule { }
