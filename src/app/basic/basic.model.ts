import { SafeUrl } from '@angular/platform-browser';

export interface Basic {
  name: string;
  image: SafeUrl | string;
  title: string;
  about: string;
  email: string;
  phone: string;
  address: string;
  languages: string;
}
