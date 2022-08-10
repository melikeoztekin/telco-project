import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  serviceForm!: FormGroup;
  service!: Service;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _servicesService: ServicesService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getServiceById(params['id']);
      else this.createServiceForm();
    });
  }

  getServiceById(id: number) {
    this._servicesService.getById(id).subscribe((data) => {
      this.service = data;
      this.createServiceForm();
    });
  }

  createServiceForm(): void {
    this.serviceForm = this._formBuilder.group({
      name: [this.service?.name || '', Validators.required],
    });
  }

  save() {
    if (this.service !== undefined) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    if (this.serviceForm.invalid) {
      this._toastrService.warning('Fill in the blank fields.', 'Warning');
      return;
    }

    const service: Service = {
      ...this.serviceForm.value,
    };

    this._servicesService.add(service).subscribe((response) => {
      this._toastrService.success('Registration successful.', 'Successful');
      setTimeout(() => {
        this.serviceForm.reset();
      }, 2000);
    });
  }

  update() {
    if (this.serviceForm.invalid) {
      this._toastrService.warning('Fill in the blank fields.', 'Warning');
      return;
    }

    const service: Service = {
      id: this.service.id,
      ...this.serviceForm.value,
    };
    this._servicesService.update(service).subscribe(() => {
      this._toastrService.success(
        'Customer information successfully updated.',
        'Successful'
      );
      setTimeout(() => {
        this._router.navigate(['homepage']);
      }, 2000);
    });
  }
}
