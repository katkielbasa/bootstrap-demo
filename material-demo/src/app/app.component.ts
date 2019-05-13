import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Server, Organisation } from './_models';
import { ServersService, AlertService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  organisationForm: FormGroup;
  organisations: Organisation [];
  @Output()
  selectedOrg_id: string;

  constructor(private fb: FormBuilder,
    private serverService: ServersService,
    private alertService: AlertService
  ) {

  }

  private loadAllOrganisations() {
     this.serverService.getAllOrganisations().pipe(first()).subscribe(organisations => {
       this.organisations = organisations['organizations'];
       console.log("organisation", this.organisations);
       this.selectedOrg_id = this.organisations[0].id;
       console.log("load selected org", this.selectedOrg_id);

    });
  }
  


  ngOnInit() {
    this.loadAllOrganisations();
  }
  

  selectChangeHandler (event: any): void {
    this.selectedOrg_id = event.target.value;
    console.log("I selected: ", this.selectedOrg_id )
  }

}

