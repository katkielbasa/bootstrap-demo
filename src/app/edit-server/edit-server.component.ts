import { Component, OnInit, Input } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, ServersService } from '../_services';
import { Server } from '../_models';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  orgId: string; 
  @Input()
  serverId: string; 
  loading = false;
  submitted = false;
  serverToEdit: Server;
  editedServer: Server;
  sub:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serverService: ServersService,
    private alertService: AlertService,
  ) {
    
   }

  ngOnInit() {
   
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.orgId = params['oid'];
      this.serverId = params['sid'];
      console.log('oid', this.orgId);
      console.log('sid', this.serverId);

    });
    this.loadServer();
    }

  private loadServer() {
    this.serverService.getServerById(this.orgId, this.serverId).pipe(first()).subscribe(
      server=>{
      this.serverToEdit = server;
      console.log("server to edit", this.serverToEdit);

      });
 }

  onSubmit(event: any): void {
    this.submitted = true;
    this.editedServer = event;
    // console.log("this.editedServer ", JSON.stringify(this.editedServer));
    // console.log("this.editedServer ", this.editedServer);

    this.loading = true;
    this.submitted = true;

    this.loading = true;

    this.serverService.updateServer(this.orgId, this.serverId, this.editedServer)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Server updated', true);
          this.router.navigate(['/servers']);
        },
        error => {
          this.alertService.error(error.message);
          this.loading = false;
        });
  }
}
