import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
})
export class ServiceListComponent implements OnInit {
  serviceList!: Service[];
  tempServices!: Service[];
  allDataArray: number[] = [];

  constructor(
    private _servicesService: ServicesService,
    private _toastrService: ToastrService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this._servicesService.getList().subscribe((response) => {
      this.tempServices = response;
      // this.serviceList = response;
      let allDataCount = Math.ceil(response.length / 5);
      for (let index = 1; index <= allDataCount; index++) {
        this.allDataArray.push(index);
      }
      this.fillData(1);
    });
  }

  deleteService(service: Service) {
    if (confirm('Are you sure to delete?')) {
      this._servicesService.delete(service).subscribe((response) => {
        this._toastrService.error('Product information deleted.');
        setTimeout(() => {
          this.getServices();
        }, 2000);
      });
    }
  }

  fillData(index: number) {
    this.serviceList = this.tempServices.slice((index - 1) * 5, 5 * index);
  }
}
