import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent {
  @Input() placeholder: string = ''
  @Input() options: any

  ngOnInit() {

  }
}
