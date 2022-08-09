import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';

export enum Mode {
  Submit,
  Update
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  service: HttpService;
  mode = Mode.Submit;
  btnName = this.mode == Mode.Submit ? "Book Appointment" : "Update Appointment";
  formHeader = 'Book Slot';
  status = 'add'
  constructor(service: HttpService) {
    this.service = service;

  }
  ngOnInit(): void {
    this.service.getAppointments();
  }
  onSubmit(form: NgForm) {
    if (this.mode == Mode.Submit) {
      console.log(form);
      // this.bookAppointment(form);
    } else {
      this.mode = Mode.Submit;
      this.btnName = "Book Appointment";
      this.service.updateAppointment(this.service.appointment.id, this.service.appointment);
      form.reset();
    }
  }
  bookAppointment(form: NgForm) {
    this.mode = Mode.Submit;
    this.btnName = "Book Appointment";
    this.formHeader = "Book Slot";
    this.status = 'add';
    this.service.postSlots(form.value);
    form.reset();
  }
  updateAppointment(id: number) {
    this.mode = Mode.Update;
    this.btnName = "Update Appointment";
    this.formHeader = "Update Slot";
    this.status = 'update';
    this.service.getAppointment(id);
  }
  deleteAppointment(id: number) {
    this.status = 'delete';
    if (confirm("Do you want to delete ?")) {
      this.service.deleteAppointment(id);
    }

  }

}
