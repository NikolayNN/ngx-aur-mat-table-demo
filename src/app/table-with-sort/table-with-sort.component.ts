import {Component} from '@angular/core';
import {TableConfig} from "ngx-aur-mat-table";
import {Customer} from "../shared/model/customer";
import {CustomerGenerator} from "../shared/generator/CustomerGenerator";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-table-with-sort',
  templateUrl: './table-with-sort.component.html',
  styleUrls: ['./table-with-sort.component.scss']
})
export class TableWithSortComponent {

  tableConfig: TableConfig<Customer> = {
    columnsCfg: [
      {
        name: 'customers name',
        key: 'name',
        valueConverter: v => v.name,
        sort: {
          enable: true
        }
      },
      {
        name: 'customers age',
        key: 'age',
        valueConverter: v => v.age,
        sort: {
          enable: true
        }
      }
    ]
  }
  tableData = CustomerGenerator.generate(10);

  onSort($event: Sort) {
    console.log($event)
  }
}
