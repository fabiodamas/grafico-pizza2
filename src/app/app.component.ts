import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  chart: any;

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'pie',

      data: {
        labels: ['Pendente Aprovação UO', 'Pendentes GEF', 'Pendentes recebedor', 'NF reprovadas', 'Pendentes Tesouraria'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [51, 24, 8, 5, 4],
            backgroundColor: [
              'rgb(167, 207, 139)',
              'rgb(251, 189, 0)',
              'rgb(233, 124, 48)',
              'rgb(66, 112, 193)',
              'rgb(163, 163,163)',
            ],
            hoverOffset: 4,
            
          },
        ],
      },

      options: {
        borderRadius: 10,
      },
    });
  }
}
