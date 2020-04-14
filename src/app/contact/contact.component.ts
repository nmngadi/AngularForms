import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { localPhoneNumber } from '../validations/phone-number-validation';

import { Contact } from '../models/contact';
import { Title } from '../models/title-enum';
import { Gender } from '../models/gender-enum';
import { textvalidation } from '../validations/text-only-validation';

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
      firstName: ['', [Validators.required, Validators.minLength(2), textvalidation()]],
      lastName: ['', [Validators.required, Validators.maxLength(50), textvalidation()]],
      email: ['', Validators.email],
      gender: ['', Validators.required],
      id: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(13)]],
      title: [''],
      phoneNumber: ['', [Validators.required, localPhoneNumber()]],
    });
  }

  get controls() {
    return this.contactForm.controls;
  }
  get title(): AbstractControl { return this.contactForm.get('title'); }
  get firstName(): AbstractControl { return this.contactForm.get('firstName'); }
  get lastName(): AbstractControl { return this.contactForm.get('lastName'); }
  get id(): AbstractControl { return this.contactForm.get('id'); }
  get gender(): AbstractControl { return this.contactForm.get('gender'); }
  get phoneNumber(): AbstractControl { return this.contactForm.get('phoneNumber'); }
  get email(): AbstractControl { return this.contactForm.get('email'); }


  Save() {
    alert(JSON.stringify(this.contactForm.value));
  }
}
