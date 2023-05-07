import {Component} from '@angular/core';
import {TableConfig} from "ngx-aur-mat-table";
import {CustomerGenerator} from "../shared/generator/CustomerGenerator";
import {Customer} from "../shared/model/customer";

@Component({
  selector: 'app-table-with-icons',
  templateUrl: './table-with-icons.component.html',
  styleUrls: ['./table-with-icons.component.scss']
})
export class TableWithIconsComponent {
  tableConfig: TableConfig<Customer>[] = [
    {
      name: 'customers name',
      key: 'name',
      valueConverter: v => v.name,
      headerColumn: {
        icon: {
          name: 'person',
          color: 'salmon'
        }
      },
    },
    {
      name: 'customers age',
      key: 'age',
      valueConverter: v => v.age,
      valueColumn: {
        icon: {
          tooltip: () => 'подсказка для иконки',
          name: (v) => {
            if (v['age'] <= 25) {
              return "sentiment_very_satisfied"
            } else if (v['age'] > 25 && v['age'] <= 35) {
              return 'coronavirus'
            } else {
              return 'whatshot';
            }
          },
          color: (v) => {
            if (v.age <= 25) {
              return "green"
            } else if (v.age > 25 && v.age <= 35) {
              return 'blue'
            } else {
              return 'orange';
            }
          },
        },
        text: {
          tooltip: () => "подсказка для текста",
          color: (v) => {
            if (v.age <= 25) {
              return "orange"
            } else if (v.age > 25 && v.age <= 35) {
              return 'green'
            } else {
              return 'blue';
            }
          }
        }
      }
    },
    {
      name: 'иконка',
      key: 'ext',
      valueConverter: v => '',
      headerColumn: {
        icon: {
          name: 'fiber_manual_record',
          color: 'gray',
        },
        text: {
          show: false,
        }
      },
      valueColumn: {
        icon: {
          name: () => 'fiber_manual_record',
          color: () => this.randomColor(),
        },
        text: {
          show: false
        }
      }
    }
  ];

  tableData = CustomerGenerator.generate(10);

  randomColor(): string {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Combine the values into a CSS-style color string
    return `rgb(${red}, ${green}, ${blue})`;
  }

  constructor() {
  }
}
