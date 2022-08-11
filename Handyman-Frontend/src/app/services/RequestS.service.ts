import { Injectable } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  Controller = '/Request';
  constructor(private requestService: RequestService) {}
  formgroup: FormGroup = new FormGroup({
    rate: new FormControl(null),

    review: new FormControl('')

  });
  getRequest() {
    return this.requestService.get(this.Controller) as Observable<any>;
  }
  createRequest(formData) {
    return this.requestService.post(this.Controller + '/', formData) as Observable<any>;
  }
  getRequestById(id: number) {
    return this.requestService.getById(this.Controller, id) as Observable<any>;
  }

  editRequest(id: number, formData) {
    return this.requestService.put(this.Controller + '/', id, formData) as Observable<any>;
  }

  deleteRequest(id) {
    return this.requestService.delete(this.Controller + '/', id) as Observable<any>;
  }
  cancelRequest(id : number){
    return this.requestService.getById(this.Controller + '/cancel', id) as Observable<any>
  }

  acceptRequest(id : number){
    return this.requestService.getById(this.Controller + '/accept', id) as Observable<any>
  }

  getRequestsByClientIDorHandySSN(id, role: string) {
    return this.requestService.getById(this.Controller + '/' + role, id) as Observable<any>;
  }
  editReview(id:number,formData)
  {
    return this.requestService.put(this.Controller + `/review` , id, formData)
  }

  getPendingRequestsByHandymanSsn(ssn:number)
  {
    return this.requestService.getById(this.Controller + '/handyman/pending', ssn) as Observable<any>
  }
  // getRequestByID(id: Number) {
  //   return this.requestService.getById(this.Controller, id) as Observable<any>;
  // }
}
