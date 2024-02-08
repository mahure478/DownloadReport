import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  rangeDates: Date[] | undefined;

  @Output() selectedDate = new EventEmitter<any>()

  getDate() {
    this.selectedDate.emit(this.rangeDates)
  }
}
