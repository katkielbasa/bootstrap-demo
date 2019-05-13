import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { routing } from './app.routing';
import { AlertService, ServersService } from './_services';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// //clarity
// import { ClarityModule } from '@clr/angular';
//material
// import { MatMenuModule } from '@angular/material/menu';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatButtonModule } from '@angular/material/button';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatListModule } from '@angular/material/list';
// //primeng
// import { MenuModule } from 'primeng/menu';
// import { ProgressSpinnerModule } from 'primeng/progressspinner';
// import { MessagesModule } from 'primeng/messages';
// import { MessageModule } from 'primeng/message';
// import { TooltipModule } from 'primeng/tooltip';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { CaptchaModule } from 'primeng/captcha';
// import { ToastModule } from 'primeng/toast';
// import { TableModule } from 'primeng/table';
// import { SliderModule } from 'primeng/slider';
// import { MultiSelectModule } from 'primeng/multiselect';
// import { ContextMenuModule } from 'primeng/contextmenu';
// import { InputMaskModule } from 'primeng/inputmask';
// import { ButtonModule } from 'primeng/button';
// import { DialogModule } from 'primeng/dialog';
// import { DropdownModule } from 'primeng/dropdown';
// import { InputTextModule } from 'primeng/inputtext';
// import { TabViewModule } from 'primeng/tabview';
// import { CheckboxModule } from 'primeng/checkbox';
// import {CalendarModule} from 'primeng/calendar';

// //nebular
// import { NbThemeModule, NbLayoutModule, NbMenuModule, NbButtonModule, NbCardModule } from '@nebular/theme';
//ngbootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//ngx-bootstrao
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//ngzorro
//import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

//ng-lightening
//import { NglModule, NGL_ICON_CONFIG, NglIconConfig } from 'ng-lightning';
//KENDO
//import { ButtonsModule } from '@progress/kendo-angular-buttons';
//import { LayoutModule } from '@progress/kendo-angular-layout';
//import { MenusModule } from '@progress/kendo-angular-menu';
import { AddServerComponent } from './add-server/add-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServersTableComponent } from './servers-table/servers-table.component';
import { AlertComponent } from 'src/app/_directives';
//schemaGenerator
import { Bootstrap4FrameworkModule } from 'angular7-json-schema-form';
import { NoFrameworkModule } from 'angular7-json-schema-form';
import { OrgSelectorComponent } from './org-selector/org-selector.component';
import { ServerDetailsComponent } from './server-details/server-details.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    AddServerComponent,
    EditServerComponent,
    ServersTableComponent,
    OrgSelectorComponent,
    ServerDetailsComponent
    ],
  imports: [
    NoFrameworkModule,
    Bootstrap4FrameworkModule,
    // TableModule,
    // SliderModule,
    // MultiSelectModule,
    // ContextMenuModule,
    // InputMaskModule,
    // DialogModule,
    // DropdownModule,
    // InputTextModule,
    // TabViewModule,
    // CheckboxModule,
    // BrowserModule,
    // ClarityModule,
    // CalendarModule,
    // MatGridListModule,
    // MatIconModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    //NglModule,
    // MatBadgeModule,
    // ProgressSpinnerModule,
    // MessagesModule,
    // MessageModule,
    // TooltipModule,
    // ProgressBarModule,
    // CaptchaModule,
    // ToastModule,
    // MatListModule,
    // routing,
   // MenuModule,
    //MenusModule,
    // MatMenuModule,
    // MatDividerModule,
    // MatSidenavModule,
    // MatButtonModule,
    // ButtonModule,
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbButtonModule,
    // NbMenuModule.forRoot(),
   // BsDropdownModule.forRoot(),
    //NbCardModule,
    AppRoutingModule,
    //NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
   // ButtonsModule,
    //LayoutModule
  ],
  providers: [
    ServersService,
    AlertService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
