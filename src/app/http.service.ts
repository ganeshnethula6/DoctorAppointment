import { Injectable } from '@angular/core';
import { Appointment } from './model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  appointmentDetails: Appointment = {
    id: 0,
    patientName: "",
    phone: "",
    doctorName: "",
    gender: "",
    date: "",
    appType: "",
    age: "",
    time: ""
  };

  constructor() { }
}
