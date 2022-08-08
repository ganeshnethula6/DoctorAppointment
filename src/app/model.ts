export interface Appointment {
    id: number;
    patientName: string,
    phone: string,
    doctorName: string,
    gender: string,
    date: string,
    appType: string,
    age: string,
    time: string


}
export class AppointmentData implements Appointment {
    id!: number;
    patientName!: string;
    phone!: string;
    doctorName!: string;
    gender!: string;
    date!: string;
    appType!: string;
    age!: string;
    time!: string;
    constructor() {

    }
}