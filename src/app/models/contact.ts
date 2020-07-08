import { Gender } from './gender-enum';
import { Title } from './title-enum';
export class Contact {
  firstName: string;
  lastName: string;
  gender: Gender;
  IdNumber: string;
  birthDate: Date;
  title: Title;
  phoneNumber: string;
  email: string;
}
