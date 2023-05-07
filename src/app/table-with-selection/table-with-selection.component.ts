import {Component} from '@angular/core';
import {SelectionConfig, TableConfig} from "ngx-aur-mat-table";
import {Customer} from "../shared/model/customer";
import {CustomerGenerator} from "../shared/generator/CustomerGenerator";

@Component({
  selector: 'app-table-with-selection',
  templateUrl: './table-with-selection.component.html',
  styleUrls: ['./table-with-selection.component.scss']
})
export class TableWithSelectionComponent {

  selected: Customer[] = [];

  tableConfig: TableConfig<Customer>[] = [
    {
      name: 'customers name',
      key: 'name',
      valueConverter: v => v.name
    },
    {
      name: 'customers age',
      key: 'age',
      valueConverter: v => v.age
    }
  ];
  tableData = CustomerGenerator.generate(10);

  selectionConfig: SelectionConfig = {
    multiple: true
  }
}
