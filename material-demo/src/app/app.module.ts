import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgSelectorComponent } from './org-selector/org-selector.component';
import { AddServerComponent } from './add-server/add-server.component';
import { HomeComponent } from './home';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { ServersTableComponent } from './servers-table/servers-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//material
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MaterialDesignFrameworkModule } from 'angular7-json-schema-form';
import { AlertService, ServersService } from './_services';
import { DatePipe } from '@angular/common';
import { AlertComponent } from './_directives';


@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    OrgSelectorComponent,
    AddServerComponent,
    EditServerComponent,
    ServerDetailsComponent,
    ServersTableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MaterialDesignFrameworkModule,
    HttpClientModule
  ],
  providers: [
    ServersService,
    AlertService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
