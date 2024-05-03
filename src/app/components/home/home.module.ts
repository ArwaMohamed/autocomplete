import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HighlightFirstElementDirective } from 'src/app/directives/highlight-first-element.directive';



@NgModule({
  declarations: [HomeComponent,AutocompleteComponent,HighlightFirstElementDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
