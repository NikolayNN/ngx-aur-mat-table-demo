import {Component, OnInit} from '@angular/core';
import {IndexConfig, TableConfig, TableRow} from "ngx-aur-mat-table";
import {Customer} from "../shared/model/customer";
import {CustomerGenerator} from "../shared/generator/CustomerGenerator";
import {CustomerTableRow} from "../shared/model/customer-table-row";

@Component({
  selector: 'app-table-with-index',
  templateUrl: './table-with-index.component.html',
  styleUrls: ['./table-with-index.component.scss']
})
export class TableWithIndexComponent {

  indexable: IndexConfig = {
    enable: true,
    offset: 1
  }

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
}
