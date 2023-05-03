import {Component} from '@angular/core';
import {TableConfig} from "ngx-aur-mat-table";
import {TableRow} from 'ngx-aur-mat-table';
import {Customer} from "../shared/model/customer";
import {CustomerGenerator} from "../shared/generator/CustomerGenerator";
import {CustomerTableRow} from "../shared/model/customer-table-row";

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {

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
