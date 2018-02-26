import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {PatientService} from '../PatientServices/PatientService';
import {Http, HttpModule} from '@angular/http';
import { NvPatientComponent } from './nv-patient/nv-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const appRoutes:Routes=[
  {path:'Patient',component:PatientComponent},
  {path:'nvPatient/:id',component:NvPatientComponent},
  {path:'Patient/:id',component:UpdatePatientComponent},
  {path:'',redirectTo:'/Patient',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    NvPatientComponent,
    UpdatePatientComponent,
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
