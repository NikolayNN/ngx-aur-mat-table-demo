import { Component, OnInit } from '@angular/core';
import {TableConfig, TableRow} from "ngx-aur-mat-table";
import {Customer} from "../shared/model/customer";
import {CustomerGenerator} from "../shared/generator/CustomerGenerator";
import {CustomerTableRow} from "../shared/model/customer-table-row";

@Component({
  selector: 'app-table-with-pagination',
  templateUrl: './table-with-pagination.component.html',
  styleUrls: ['./table-with-pagination.component.scss']
})
export class TableWithPaginationComponent {

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
  tableData: TableRow<Customer>[] = CustomerGenerator.generate(100).map(c => new CustomerTableRow(c, c.name, c.age));
}
