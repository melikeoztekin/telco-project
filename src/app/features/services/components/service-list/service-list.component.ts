import { ServicesService } from '../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
})
export class ServiceListComponent implements OnInit {
  serviceList!: Service[];

  constructor(private _servicesService: ServicesService) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this._servicesService.getList().subscribe((response) => {
      this.serviceList = response;
    });
  }

  deleteService(service: Service) {
    if (confirm('Are you sure to delete?')) {
      this._servicesService.delete(service).subscribe();
    }
  }
}
