import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  Controller = '/Client';
  constructor(private requestService: RequestService) {}
  getClients() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  getClientbyId(id) {
    return this.requestService.getById(this.Controller, id) as Observable<any>;
  }
  // ??     in get clients too
  createClients(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }

  editClient(id, formData) {
    return this.requestService.put(this.Controller, id, formData) as Observable<any>;
  }

  deleteClients(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }
}
