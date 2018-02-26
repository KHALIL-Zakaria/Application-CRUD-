export class Patient {
  resourceType : string = "Patient";
  id : string;
  public name: [{ text: string, family: string, given:[string]}];
  public telecom: [{ system: string, value: string, use: string }];
  public birthDate: string;
  public phone: string;
  public gender: string;
constructor(){

}


}
