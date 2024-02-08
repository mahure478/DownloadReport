import { Component } from '@angular/core';
import { SharedserviceService } from 'src/shared/sharedservice.service';
export interface IdInterface {
  id: number;
  name: string;
  userId: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'download-report';
  reportData: any = []
  selectedClientId: string = ''
  selectedProcessId: string = ''
  clientIdArray: IdInterface[] = [];
  showProcessId: boolean = false
  processIdArray: IdInterface[] = [];
  userArr: IdInterface[] = [];
  selectedDate: any = [];
  payload :any = []


  constructor(private ss: SharedserviceService) {
    this.reportData = [
      {
        "id": null,
        "clientId": "1",
        "processId": "1",
        "userId": "user1"
      },
      {
        "id": null,
        "clientId": "1",
        "processId": "1",
        "userId": "user3"
      },
      {
        "id": null,
        "clientId": "1",
        "processId": "1",
        "userId": "user4"
      },
      {
        "id": null,
        "clientId": "2",
        "processId": "2",
        "userId": "user5"
      },
      {
        "id": null,
        "clientId": "2",
        "processId": "2",
        "userId": "user6"
      },
      {
        "id": null,
        "clientId": "3",
        "processId": "3",
        "userId": "user7"
      },
      {
        "id": null,
        "clientId": "4",
        "processId": "4",
        "userId": "user8"
      },
      {
        "id": null,
        "clientId": "5",
        "processId": "5",
        "userId": "user9"
      },
      {
        "id": null,
        "clientId": "5",
        "processId": "5",
        "userId": "user10"
      },
      {
        "id": null,
        "clientId": "5",
        "processId": "6",
        "userId": "user11"
      },
      {
        "id": null,
        "clientId": "5",
        "processId": "6",
        "userId": "user12"
      },
      {
        "id": null,
        "clientId": "6",
        "processId": "6",
        "userId": "user12"
      },
      {
        "id": null,
        "clientId": "7",
        "processId": "8",
        "userId": "user13"
      },
      {
        "id": null,
        "clientId": "7",
        "processId": "9",
        "userId": "user14"
      }
    ]

    this.fetchClientId()
  }
  fetchClientId() {
    this.ss.getUserDetail().subscribe((data:any)=>{
      console.log(data)

      this.reportData=data
      this.reportData.filter((singlevalue: any) =>
          this.clientIdArray.push({
            id: singlevalue.id,
            name: singlevalue.clientId,
            userId: singlevalue.userId
          })
        );

    } )
  }
  getClientId(e: any) {
    this.selectedClientId = e.value['name'];
    this.processIdArray = [];
    this.reportData.filter((data: any) => {
      if (this.selectedClientId === data.clientId) {
        this.processIdArray.push({
          id: data.id,
          name: data.processId,
          userId: data.userId
        })
      }
    })

  }

  getProcessId(e: any) {
    this.selectedProcessId = e.value['name']
    this.userArr = []
    this.reportData.filter((data: any) => {
      if (this.selectedClientId === data.clientId && this.selectedProcessId === data.processId) {
        this.userArr.push(data)
      }
    })
  }

  getUserId(e: any) {
   this.payload = e.value;
  }

  getDate(e:any) {
    this.selectedDate = e
  }

  clickOnApply() {
    this.payload.push(this.selectedDate)
  }
}
