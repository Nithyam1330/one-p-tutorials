import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

//user derfined
import { LoaderComponent } from './loader.component';

@Injectable()
export class LoaderService {

  private ref: NgbModalRef;
  options: NgbModalOptions = {
    centered: true,
    windowClass: 'dark-modal',
    //backdrop: "static",
    backdrop:true
  };
  constructor(private modalService: NgbModal) {

  }
showLoading() {
  this.ref = this.modalService.open(LoaderComponent, this.options);
}

hideLoading() {
  this.ref.dismiss('clicked here');
}
}
