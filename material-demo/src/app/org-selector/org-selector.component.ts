import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs/operators';
import {Organisation } from '../_models';
import { ServersService } from '../_services';

@Component({
  selector: 'app-org-selector',
  templateUrl: './org-selector.component.html',
  styleUrls: ['./org-selector.component.css']
})
export class OrgSelectorComponent implements OnInit {


  organisations: Organisation [];
  selectedOrg_id: string;

  @Output() 
  messageEvent = new EventEmitter<string>();

  constructor(
    private serverService: ServersService,
  ) {

  }

  private loadAllOrganisations() {

     this.serverService.getAllOrganisations().pipe(first()).subscribe(organisations => {
       this.organisations = organisations['organizations'];
       this.selectedOrg_id = this.organisations[0].id;
    });
  }

  ngOnInit() {
    
    this.loadAllOrganisations();

  }

  selectChangeHandler (event: any): void {
    this.selectedOrg_id = event.target.value;
    console.log("I selected: ", this.selectedOrg_id )
    this.messageEvent.emit(this.selectedOrg_id)
  }

 

}
