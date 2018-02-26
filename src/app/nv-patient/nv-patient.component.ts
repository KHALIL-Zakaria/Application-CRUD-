import { Component, OnInit } from '@angular/core';
import {Patient} from '../../patientModel/Patient';
import {PatientService} from '../../PatientServices/PatientService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nv-patient',
  templateUrl: './nv-patient.component.html',
  styleUrls: ['./nv-patient.component.css']
})
export class NvPatientComponent implements OnInit {
  patient :Patient;
  idPatient:string;
  constructor(public patientService : PatientService, activatedRoute:ActivatedRoute) {
    console.log(activatedRoute.snapshot.params['id']);
    this.idPatient=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.patientService.getPatient(this.idPatient)
      .subscribe(data=>{
        this.patient=data;

      },error2 => {
        console.log(error2);
      })

  }
  savePatient(){
    console.log(this.patient);
    this.patientService.savePatient(this.patient)
      .subscribe(data=>{
        this.patient.name=data.name.family;
        data.telecom=this.patient.telecom;
        console.log(data);
      },error2 =>{
        console.log(error2);
      });
    console.log(this.patient);
  }

}
