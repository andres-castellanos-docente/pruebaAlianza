export class PaisesModel {
  idClie: number;
  name: string;
  phone: number;
  constructor(json: any = null) {
    if (json !== null) {
      this.idClie = json.idPai;
      this.name = json.nombre;
      this.phone = json.phone;
    } else {
      this.idClie = null;
      this.name = null;
      this.phone = null;
    }
  }
}
