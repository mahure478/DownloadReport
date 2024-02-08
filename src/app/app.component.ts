import { Component } from '@angular/core';
import { SharedserviceService } from 'src/shared/sharedservice.service';
export interface ClientIdInterface {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'download-report';
  reportData = []
  selectedClientId: string='' 
  selectedProcessId: string=''
  clientIdArray: ClientIdInterface[] =[];
  showProcessId: boolean =false

  constructor(private ss:SharedserviceService) {
   
  this.fetchClientId()
  }
  fetchClientId(){
    this.ss.getUserDetail().subscribe((data:any)=>{
      console.log(data)
      this.reportData=data
      this.reportData.filter((singlevalue: any) =>
          this.clientIdArray.push({
            id: singlevalue.id,
            name: singlevalue.clientId,
          })
        );
        
    } )
  }
  selectClientId(){
this.showProcessId = true

  }
}
