/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CalendarModalOptions } from 'projects/ion-calendar/src/lib';
import { CalendarModalComponent } from 'projects/ion-calendar/src/lib/components/calendar-modal.component';

@Component({
  selector: 'demo-modal-range',
  template: `
    <ion-button (click)="openCalendar()">
      range
    </ion-button>
  `,
})
export class DemoModalRangeComponent {
  dateRange: {
    from: Date;
    to: Date;
  } = {
    from: new Date(),
    to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 5),
  };

  constructor(public modalCtrl: ModalController) {}

  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'RANGE',
      defaultDateRange: this.dateRange,
      clearLabel: 'CLEAR',
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModalComponent,
      componentProps: { options },
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const { data: date, role } = event;

    if (role === 'done') {
      this.dateRange = Object.assign(
        {},
        {
          from: date.from.dateObj,
          to: date.to.dateObj,
        }
      );
    }
    console.log(date);
    console.log('role', role);
  }
}
