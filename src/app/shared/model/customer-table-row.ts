import {TableRow} from "ngx-aur-mat-table";
import {Customer} from "./customer";

export class CustomerTableRow extends TableRow<Customer> {

  constructor(customer: Customer,
              public name: string,
              public age: number) {
    super(customer);
  }

}
