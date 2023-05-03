import {Component} from '@angular/core';
import {BooksGenerator} from "../shared/generator/BooksGenerator";
import {BookTableRow} from "../shared/model/book-table-row";
import {TableConfig} from "ngx-aur-mat-table";

@Component({
  selector: 'app-complex-object',
  templateUrl: './complex-object.component.html',
  styleUrls: ['./complex-object.component.scss']
})
export class ComplexObjectComponent {

  tableConfig: TableConfig<any>[] = [
    {
      name: 'book id',
      key: 'id'
    },
    {
      name: 'book name',
      key: 'name',
    },
    {
      name: 'book Author',
      key: 'author',
    }
  ];

  tableData = BooksGenerator.generateRandomBooks(10)
    .map(b => new BookTableRow(b, b.id, b.name, b.author.name));

}
