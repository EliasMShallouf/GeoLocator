import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AddressService } from '../services/address.service'; 
import { SharedAddressService } from '../services/shared-address.service';
import { Address } from '../address';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
  providers: [MessageService]
})
export class ResultsComponent implements OnInit {
  constructor(
    public addressService: AddressService,
    public sharedAddressService: SharedAddressService,
    private router: Router,
    private messageService: MessageService
  ) {}

  address!: Address
  email!: string

  ngOnInit(): void {
    this.address = this.sharedAddressService.address;
    this.email = this.sharedAddressService.email;
  }

  isEmailValid(): boolean {
    return this.email != undefined && this.email.length > 0
  }

  sendResultsViaEmail() {
    let showToast = (msg: string, type: string) => this.showToast(msg, type)

    showToast("Sending email", "info");

    this.addressService
      .sendResultsViaEmail(this.email, this.address)
      .subscribe({
        next(value) {
          showToast("Email sent successfuly", "success")
        },
        error(err) {
          showToast("Email sent failed!", "error")
        },
      })
  }

  goBack(): void {
    this.router.navigate(["/"])
  }

  showToast(msg: string = "msg", type: string = "error") {
    this.messageService.add({ key: 'toast', severity: type, summary: 'Notification', detail: msg });
  }
}
