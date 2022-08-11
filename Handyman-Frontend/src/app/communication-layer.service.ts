import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommunicationLayerService {
  /////////////////////////////////////////////////////////////////////////////////////////
  // imp Communication using ->>>>>>> E v e n t   E m i t t e r
  /////////////////////////////////////////////////////////////////////////////////////////

  SSNStatus = new EventEmitter<any>();

  //logStatusChange(Status: string) {}

  //UpdateSSN() {}
  constructor() {}

  /////////////////////////////////////////////////////////////////////////////////////////
  // imp Communication using ->>>>>>> O b s e r v a b l e s
  /////////////////////////////////////////////////////////////////////////////////////////
  //private value: BehaviorSubject<any>;
  data: any;
  currentValue = new BehaviorSubject<number>(null);
  RequestIDValue = new BehaviorSubject<number>(null);

  value = this.currentValue.asObservable();
  RequestID = this.RequestIDValue.asObservable();

  currentCraftIDValue: Subject<Number> = new BehaviorSubject<Number>(null);
  CraftIDValue = this.currentCraftIDValue.asObservable();

  currentClientValue: Subject<Number> = new BehaviorSubject<Number>(null);
  ClientValue = this.currentClientValue.asObservable();

  // ! this is a setter should be replaced
  //private data = new Subject<number>();
  setSSN(ssn: number) {
    // debugger;
    // this.data = ssn;
    //this.currentValue.subscribe();
    this.currentValue.next(ssn);
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  // ! this is a getter should be replaced
  getSSN() {
    // debugger;
    //return this.currentValue.asObservable();
    return this.value;
  }

  // getValue() {
  //   //debugger;
  //   return this.value;
  // }

  getRequestID() {
    return this.RequestID;
  }

  SetRequestID(RID: number) {
    this.RequestIDValue.next(RID);
  }

  setCraftId(id) {
    this.currentCraftIDValue.next(id);
  }

  getCraftId() {
    return this.CraftIDValue;
  }

  setClient(client) {
    this.currentClientValue.next(client);
  }

  getClient() {
    return this.ClientValue;
  }
}
