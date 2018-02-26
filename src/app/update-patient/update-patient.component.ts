import { Component, OnInit } from '@angular/core';
import {Patient} from '../../patientModel/Patient';
import {PatientService} from '../../PatientServices/PatientService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patient : Patient ;
  idPatient : string;
  mode:number=1;
  constructor(public patientService : PatientService,public activatedRoute:ActivatedRoute ,public router : Router) {
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

  updatePatient(){
    this.patientService.editPatient(this.patient)
      .subscribe(data=>{
        alert("mise à jours effectuée");
        this.router.navigate(['Patient',this.idPatient]);
        console.log(data);

      },error2 => {
        alert("erreur de mise à jours");
      })

  }
}
