import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import {  Province } from '../models/province-enum';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  model: Address;
  provinces: Province[];

  constructor() {
    this.provinces = [null, ...Object.values(Province)] as Province[];
    this.model = {
      streetName: '69 Bontanic Avenue',
      suburb: 'Musgrave',
      zipcode: 1234,
      province: 'Kwazulu Natal',
      city: 'Durban'
    } ;
   }

  ngOnInit(): void {

  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
