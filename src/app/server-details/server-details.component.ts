import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { first } from 'rxjs/operators';
import { ServersService } from '../_services';
import { Server } from '../_models';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

 
  orgId: string; 
  serverId: string; 
  serverTodisplay: Server;
  sub:any;

  constructor(
    private route: ActivatedRoute,
    private serverService: ServersService,
  ) {
    
   }

  ngOnInit() {
   
    this.sub = this.route.params.subscribe(params => {
      // console.log(params);
      this.orgId = params['oid'];
      this.serverId = params['sid'];
      // console.log('oid', this.orgId);
      // console.log('sid', this.serverId);

    });
    this.loadServer();
    }

  private loadServer() {
    this.serverService.getServerById(this.orgId, this.serverId).pipe(first()).subscribe(
      server=>{
      this.serverTodisplay= server;

      });
 }

}
