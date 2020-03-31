import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public dias: Array<any>;
  public domingo: Array<any>;
  public sabado: Array<any>;
  public util: Array<any>;

  constructor() {

  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  ngOnInit() {

    this.domingo= [
      {hora: '07:00'},
      {hora: '08:00'},
      {hora: '09:00'},
      {hora: '10:00'},
      {hora: '11:00'},
      {hora: '12:00'},
      {hora: '14:00'},
      {hora: '15:00'},
      {hora: '16:00'},
      {hora: '17:00'},
      {hora: '18:00'},
      {hora: '19:00'},
      {hora: '20:00'},
    ],
    this.sabado= [
      {hora: '06:20'},
      {hora: '06:50'},
      {hora: '07:30'},
      {hora: '07:50'},
      {hora: '08:30'},
      {hora: '09:00'},
      {hora: '10:00'},
      {hora: '11:00'},
      {hora: '11:35'},
      {hora: '12:00'},
      {hora: '12:30'},
      {hora: '12:45'},
      {hora: '13:30'},
      {hora: '14:00'},
      {hora: '15:00'},
      {hora: '16:00'},
      {hora: '17:00'},
      {hora: '18:00'},
      {hora: '19:00'},
      {hora: '20:00'},
    ],
    this.util= [
      {hora: '05:20'},
      {hora: '06:20'},
      {hora: '07:30'},
      {hora: '07:50'},
      {hora: '08:30'},
      {hora: '09:00'},
      {hora: '09:30'},
      {hora: '10:00'},
      {hora: '11:00'},
      {hora: '11:35'},
      {hora: '12:00'},
      {hora: '12:30'},
      {hora: '12:45'},
      {hora: '13:30'},
      {hora: '14:00'},
      {hora: '14:30'},
      {hora: '15:00'},
      {hora: '15:30'},
      {hora: '16:00'},
      {hora: '16:30'},
      {hora: '17:00'},
      {hora: '17:35'},
      {hora: '18:00'},
      {hora: '18:35'},
      {hora: '19:00'},
      {hora: '19:40'},
      {hora: '20:40'},
    ],

    this.dias= [
      {uteis: 'Dias úteis', sab: 'Sábado', dom: 'Domingo'},
    ]
  }
}
