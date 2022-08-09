import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http: HttpClient;
  URL1: string = 'https://retoolapi.dev/7or2Yr/profiles';
  appointments: Appointment[] = [];
  appointment: Appointment = {
    id: 0,
    patientName: "",
    phone: "+91-",
    doctorName: "",
    gender: "Male",
    date: "",
    appType: "Consult",
    age: "",
    time: "",


  };


  constructor(http: HttpClient) {
    this.http = http;
  }

  postSlots(appointment: Appointment) {
    this.http.post(this.URL1, appointment).subscribe(
      response => {
        var appointment: any = response;
        this.appointments.push(appointment);
      }
    )
  }
  getAppointments(): any {
    this.http.get(this.URL1).subscribe(resonse => {
      this.appointments = [];
      var appointment: any = resonse;
      this.appointments = appointment;

    })
  }
  deleteAppointment(id: number) {
    this.http.delete(this.URL1 + '/' + id).subscribe(response => {
      this.getAppointments();
      var appointment: any = response;
    })
  }
  getAppointment(id: number) {
    this.http.get(this.URL1 + '/' + id).subscribe(response => {
      var pro: any = response;
      this.appointment = pro;
    })
  }
  updateAppointment(id: number, appointment: Appointment) {
    this.http.put(this.URL1 + '/' + id, appointment).subscribe(response => {
      this.getAppointments();
    });
  }
}
