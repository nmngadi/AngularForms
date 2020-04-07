import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localPhoneNumber } from '../validations/phone-number-validation';

import { Contact } from '../models/contact';
import { Title } from '../models/title-enum';
import { Gender } from '../models/gender-enum';

@Component({
  selector: 'app-customer',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contact: Contact;
  titles: Title[];
  genders: Gender[];

  constructor(private fb: FormBuilder) {
    this.genders = [null, ...Object.values(Gender)] as Gender[];
    this.titles = [null, ...Object.values(Title)] as Title[];
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', Validators.email],
      id: ['', [Validators.required, Validators.maxLength(13)]],
      title: [''],
      phoneNumber: ['', [Validators.required, localPhoneNumber()]],
    });
  }

  get controls() {
    return this.contactForm.controls;
  }

  Save() {
    alert(JSON.stringify(this.contactForm.value));
  }
}
