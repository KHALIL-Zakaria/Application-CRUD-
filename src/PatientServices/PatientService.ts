import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Patient} from '../patientModel/Patient';




@Injectable()
export class PatientService {

  constructor(private http: Http) {

  }

  getPatient(mc:string) {
return this.http.get("https://sqlonfhir-stu3.azurewebsites.net/fhir/Patient/"+mc)
      .map(resp => resp.json());
  }

  savePatient(patient:Patient){
    return this.http.post("https://sqlonfhir-stu3.azurewebsites.net/fhir/Patient/",patient)
      .map(resp=>resp.json());
  }
  editPatient(patient:Patient){
    return this.http.put("https://sqlonfhir-stu3.azurewebsites.net/fhir/Patient/"+patient.id,patient)
      .map(resp=>resp.json());
  }

  deletePatient(id : string){
    return this.http.delete("https://sqlonfhir-stu3.azurewebsites.net/fhir/Patient/"+id)
      .map(resp=>resp.json());
  }
}

