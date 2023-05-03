import {Component, OnInit} from '@angular/core';
import {SelectionConfig, TableConfig, TableRow} from "ngx-aur-mat-table";
import {Customer} from "../shared/model/customer";
import {CustomerGenerator} from "../shared/generator/CustomerGenerator";
import {CustomerTableRow} from "../shared/model/customer-table-row";

@Component({
  selector: 'app-table-with-selection',
  templateUrl: './table-with-selection.component.html',
  styleUrls: ['./table-with-selection.component.scss']
})
export class TableWithSelectionComponent {

  selected: Customer[] = [];
  lastSelected: Customer[] = [];
  lastDeselected: Customer[] = [];

  tableConfig: TableConfig<Customer>[] = [
    {
      name: 'customers name',
      key: 'name'
    },
    {
      name: 'customers age',
      key: 'age',
    }
  ];
  tableData: TableRow<Customer>[] = CustomerGenerator.generate(10).map(c => new CustomerTableRow(c, c.name, c.age));

  selectionConfig: SelectionConfig = {
    multiple: true
  }
}
