import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { EditServerComponent } from './edit-server/edit-server.component';
import { AddServerComponent } from './add-server/add-server.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { ServersTableComponent } from './servers-table/servers-table.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersTableComponent  },
  { path: 'add', component: AddServerComponent},
  { path: 'edit/:oid/:sid', component: EditServerComponent},
  { path: 'viewDetails/:oid/:sid', component: ServerDetailsComponent},
  { path: 'server', component: ServerDetailsComponent},


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
