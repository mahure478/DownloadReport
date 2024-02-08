import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select-box',
  templateUrl: './multi-select-box.component.html',
  styleUrls: ['./multi-select-box.component.scss']
})
export class MultiSelectBoxComponent {
 @Input() placeholder: string =''
 @Input() options: any
 @Output() changeEvent = new EventEmitter<any>()
  
  selectUsers(event:any) {
    this.changeEvent.emit(event)
  }
}
