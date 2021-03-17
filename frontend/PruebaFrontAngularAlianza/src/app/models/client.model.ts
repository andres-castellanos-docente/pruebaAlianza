export class ClientModel {
  id: number;
  name: string;
  phone: string;
  email: string;
  sharedkey: string;
  startdate: Date;
  enddate: Date;
  constructor(json: any = null) {
    if (json !== null) {
      this.id = json.id;
      this.name = json.name;
      this.phone = json.phone;
      this.email = json.email;
      this.sharedkey = json.sharedkey;
      this.startdate = json.startdate;
      this.enddate = json.enddate;
    } else {
      this.id = null;
      this.name = null;
      this.phone = null;
      this.email = null;
      this.sharedkey = null;
      this.startdate = null;
      this.enddate = null;
    }
  }
}
