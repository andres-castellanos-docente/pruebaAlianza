import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientsService} from '../../services/clients.service';
import {ClientModel} from '../../models/client.model';
import {AppCargandoService} from '../../appBase/cargando/app.cargando.service';
import {CreatePaisResponse} from '../../responses/listResponses';
import {DialogMessagesComponent} from './diagmessages.component';


@Component({
  selector: 'app-diagcreatdependencsp-component',
  templateUrl: 'diagcreatclient.component.html'
})
export class DialogcreatclientesComponent implements OnInit {
  paisForm: FormGroup;
  dataAdEd: Array<ClientModel>;
  selectedclie: ClientModel;
  paisSubmited: boolean;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogcreatclientesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private builder: FormBuilder,
    private paisService: ClientsService, private cargServ: AppCargandoService) {
    if (data.dataed === null) {
      this.selectedclie = new ClientModel(null);
    } else {
      this.selectedclie = new ClientModel(data.dataed);
    }

  }

  public Close(resultad: boolean): void {
    let resultado: any;

    if (resultad === true) {
      resultado = {result: resultad, dataAdEd: this.dataAdEd};
    } else {
      resultado = {result: resultad, dataAdEd: null};
    }
    this.dialogRef.close(resultado);
  }

  onSubmitCrear(): void {
    this.paisSubmited = true;
    if (this.paisForm.invalid) {
      return;
    }
    const ClienteModelEnv = new ClientModel(this.paisForm.value);
    this.cargServ.iniciarCargando();
    if (this.data.dataed === null) {
      this.paisService.crearCliente(ClienteModelEnv).subscribe((res: Response) => {
        const response: CreatePaisResponse = res as any;
        this.cargServ.detenCargando();

        if (response.responseCode === 1) {
          this.dataAdEd = response.client;
          this.Close(true);
        } else {
          this.dialog.open(DialogMessagesComponent, {
            minWidth: '320px',
            maxWidth: '632px',
            data: {message: response.responseDescription + ' 😅'}
          });
          this.Close(false);
        }
      });
    } else {
      this.paisService.editarCliente(ClienteModelEnv).subscribe((res: Response) => {
        const response: CreatePaisResponse = res as any;
        this.cargServ.detenCargando();
        if (response.responseCode === 1) {
          this.dataAdEd = response.client;
          this.Close(true);
        } else {
          this.dialog.open(DialogMessagesComponent, {
            minWidth: '320px',
            maxWidth: '632px',
            data: {message: response.responseDescription + ' 😅'}
          });
          this.Close(false);
        }
      });
    }

  }


  iniciarForm(): void {
    this.paisForm = this.builder.group({
      id: [this.selectedclie.id, []],
      name: [this.selectedclie.name, [Validators.required, Validators.maxLength(255)]],
      phone: [this.selectedclie.phone, [Validators.required, Validators.maxLength(10)]],
      email: [this.selectedclie.email, [Validators.required, Validators.email, Validators.maxLength(200)]],
      startdate: [this.selectedclie.startdate, [Validators.required]],
      enddate: [this.selectedclie.enddate, [Validators.required]],
      sharedkey: [this.selectedclie.email, [Validators.required, Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
    this.iniciarForm();
  }


}

