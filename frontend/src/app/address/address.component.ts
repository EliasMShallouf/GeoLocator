import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AddressService } from '../services/address.service'; 
import { SharedAddressService } from '../services/shared-address.service';
import { Address } from '../address';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  constructor(
    public addressService: AddressService,
    public sharedAddressService: SharedAddressService,
    private router: Router
  ) {}

  addressForm!: FormGroup;

  ngOnInit(): void {
    //retrive old data before navigate to the results component
    let address = this.sharedAddressService.address.ip || '';
    let email = this.sharedAddressService.email || '';

    this.addressForm = new FormGroup({
      userEmail: new FormControl(
        email,
        [Validators.email]
      ),
      addressIP: new FormControl(
        address,
        [
          Validators.required,
          Validators.pattern('[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}')
        ]
      )
    })
  }

  get userEmail() {
    return this.addressForm.controls['userEmail'];
  }

  get addressIP() {
    return this.addressForm.controls['addressIP'];
  }

  findAddress() {
    this.findAddressData(this.addressIP.value, this.userEmail.value);
  }

  findAddressData(ip: string = '', email: string = '') {
    let navigate = (address: Address) => this.navigateWithExtras(address, email);

    this.addressService
      .findIpGeoLocationData(ip)
      .subscribe({
        next(address) {
          navigate(address);
        },
        error(err) {
            console.error(err)
        },
      });
  }

  navigateWithExtras(address: Address, email: string) {
    this.sharedAddressService.address = address;
    this.sharedAddressService.email = email;
    this.router.navigate(["/results"]);
  }
}

