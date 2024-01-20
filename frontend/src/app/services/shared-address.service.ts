import { Injectable } from '@angular/core';
import { Address } from '../address';

@Injectable({
  providedIn: 'root'
})
export class SharedAddressService {
  address: Address = new Address;
  email: string = "";
}