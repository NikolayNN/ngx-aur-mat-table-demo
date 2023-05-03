import {Book} from "./book";
import {TableRow} from "ngx-aur-mat-table";

export class BookTableRow extends TableRow<Book> {
  constructor(book: Book,
              public id: number,
              public name: string,
              public author: string) {
    super(book);
  }
}
