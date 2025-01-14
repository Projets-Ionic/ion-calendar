/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CalendarComponentOptions } from 'projects/ion-calendar/src/lib';

@Component({
  selector: 'demo-events',
  template: `
    <hr>
    <h3 style="text-align: center;">events</h3>
    <ion-calendar [(ngModel)]="date"
                  (change)="onChange($event)"
                  (select)="onSelect($event)"
                  (selectStart)="onSelectStart($event)"
                  (selectEnd)="onSelectEnd($event)"
                  (monthChange)="monthChange($event)"
                  [options]="options"
                  type="string"
                  format="YYYY-MM-DD">
    </ion-calendar>
  `,
})
export class DemoEventsComponent {
  date: {
    from: string;
    to: string;
  } = {
    from: '2018-01-15',
    to: '2018-01-25',
  };
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
    pickMode: 'range',
  };

  constructor(private toastCtrl: ToastController) {}

  async _toastWrap(event: string, payload: {}) {
    const toast = await this.toastCtrl.create({
      message: `${event}: ${JSON.stringify(payload, null, 2)}`,
      duration: 2000,
    });
    toast.present();
  }

  onChange($event: any) {
    console.log('onChange', $event);
    this._toastWrap('onChange', $event);
  }

  onSelect($event: any) {
    console.log('onSelect', $event);
    this._toastWrap('onSelect', $event);
  }

  onSelectStart($event: any) {
    console.log('onSelectStart', $event);
    this._toastWrap('onSelectStart', $event);
  }

  onSelectEnd($event: any) {
    console.log('onSelectEnd', $event);
    this._toastWrap('onSelectEnd', $event);
  }

  monthChange($event: any) {
    console.log('monthChange', $event);
    this._toastWrap('monthChange', $event);
  }
}
