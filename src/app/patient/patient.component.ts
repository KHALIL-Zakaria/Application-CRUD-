import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../PatientServices/PatientService';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import "rxjs/add/operator/map";
import {Patient} from '../../patientModel/Patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient:Patient;
  motcle:string="";
  patients:any;


  constructor(public patientService:PatientService,private http:Http , public router:Router) {

  }

  ngOnInit() {
  }
 onGetPatient(dataForm){
    this.patientService.getPatient(dataForm.motcle)
       .subscribe(data=>{
         this.patient=data;
         this.patients=data;
        console.log(data)
       },error2 => {
         console.log(error2)
       })
   }

  onEditPatient(id:string){
    this.router.navigate(['Patient',id]);
  }
  onDeletePatient(id :string){
    this.patientService.deletePatient(id)
      .subscribe(data=>{
        console.log(data);
        this.patientService.getPatient("")
          .subscribe(data=>{
            this.patients=data;
            console.log(data)
          },error2 => {
            console.log(error2)
          });
      },error2 => {
        console.log(error2);
      });

  }
}
