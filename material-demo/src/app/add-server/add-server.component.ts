import { Component, OnInit, Input } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, ServersService } from '../_services';
import { Server } from '../_models';
import { AppComponent } from '../app.component';
import {HomeComponent} from '../home'
@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  
    orgId: string; 
    @Input()
    serverId: string; 
    loading = false;
    submitted = false;
    payload: string;
    server: Server;
  

     constructor(
      private router: Router,
      private ServerService: ServersService,
      private alertService: AlertService,
      private app: AppComponent
    ) {
    }
    receiveMessage($event) {
      this.orgId = $event
      console.log("Selected Org: ", this.orgId )
    }
  
    ngOnInit() {
    }
  
  
    onSubmit(event: any):void {
      // if(this.orgId == undefined){
  
      // this.orgId = this.app.selectedOrg_id;
      // }
      this.submitted = true;
      this.server = event;
      this.payload = JSON.stringify(this.server);
     // console.log("payload: ", JSON.stringify(this.submitServerForm.value));
      // console.log("Form is valid: ", this.submitServerForm.value);
      // console.log("Create date: ", this.submitServerForm.value.createDate);
  
      this.loading = true;
      this.ServerService.addServer(this.orgId, this.server)
        .pipe(first())
        .subscribe(
          data => {
            console.log("this.submitServerForm ", this.server)
            this.alertService.success('Server added', true);
            this.router.navigate(['/servers']);
          },
          error => {
            this.alertService.error(error.message);
            this.loading = false;
          });
    }
  }
  
  