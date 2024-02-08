import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent {
  @Input() placeholder: string = ''
  @Input() options: any;
  @Output() changeEvent = new EventEmitter<any>()
  
  selectClientId(event:any) {
    this.changeEvent.emit(event)
  }
}
