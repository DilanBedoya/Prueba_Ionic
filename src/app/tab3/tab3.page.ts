import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  startDate?: string; 
  endDate?: string; 
  daysDifference: number | null = null;

  constructor() {}

  calculateDays() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      this.daysDifference = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    } else {
      this.daysDifference = null; 
    }
  }
}
