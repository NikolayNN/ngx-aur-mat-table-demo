import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableWithIconsComponent } from './table-with-icons/table-with-icons.component';
import { ComplexObjectComponent } from './complex-object/complex-object.component';
import {NgxAurMatTableModule} from "ngx-aur-mat-table";
import {SimpleTableComponent} from "./simple-table/simple-table.component";
import { TableWithActionsComponent } from './with-actions/table-with-actions/table-with-actions.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ActionsBeforeComponent } from './with-actions/actions-before/actions-before.component';
import { TableWithPaginationComponent } from './table-with-pagination/table-with-pagination.component';
import { TableWithSelectionComponent } from './table-with-selection/table-with-selection.component';
import { TableWithSortComponent } from './table-with-sort/table-with-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    TableWithIconsComponent,
    ComplexObjectComponent,
    TableWithActionsComponent,
    ActionsBeforeComponent,
    TableWithPaginationComponent,
    TableWithSelectionComponent,
    TableWithSortComponent
  ],
  imports: [
    BrowserModule,
    NgxAurMatTableModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
