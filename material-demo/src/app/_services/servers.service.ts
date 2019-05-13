import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server, Organisation } from '../_models';
import { Constants } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient) { }

  // getServersSmall() {
  //   return this.http.get<any>('/assets/data/Servers-small.json')
  //     .toPromise()
  //     .then(res => <Server[]>res.data)
  //     .then(data => { return data; });
  // }
  getServerById(orgId: string, servId: string) {
    return this.http.get<Server>(`${Constants.API_URL}/${orgId}/server/${servId}`);
  }
  
  getServersForOrg(orgId: string) {
    return this.http.get<Server[]>(`${Constants.API_URL}/${orgId}/server`);
  }

  addServer(orgId: string, server: Server) {
    return this.http.post(`${Constants.API_URL}/${orgId}/server`, server);
  }

  getAllOrganisations() {
    return this.http.get<Organisation[]>(`${Constants.API_URL}`);
  }

  updateServer(orgId: string, serverId:string, server: Server) {
    return this.http.post(`${Constants.API_URL}/${orgId}/server/${serverId}`, server);
  }

  deleteServForOrg(orgId: string){
    return this.http.delete(`${Constants.API_URL}/${orgId}/server`);
  }

  deleteServer(orgId: string, servId: string) {
    return this.http.delete(`${Constants.API_URL}/${orgId}/server/${servId}`);
  }
} 
