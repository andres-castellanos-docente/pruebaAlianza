import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ClientsService} from '../../services/clients.service';
import {AppCargandoService} from '../../appBase/cargando/app.cargando.service';
import {CreatePaisResponse} from '../../responses/listResponses';
import {DialogMessagesComponent} from './diagmessages.component';


@Component({
  selector: 'app-diagconfelim-component',
  templateUrl: 'diagconfelim.html'
})
export class DialogConfElimComponent {
  message: string;
  idPaisElim: number;

  constructor(public dialog: MatDialog, private paisesService: ClientsService, private cargServ: AppCargandoService,
              public dialogRef: MatDialogRef<DialogConfElimComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message;
    this.idPaisElim = data.idPaisElim;
  }

  public Cerrar(resultad: boolean): void {
    let resultado: any;
    if (resultad === true) {
      resultado = {result: resultad};
    } else {
      resultado = {result: resultad};
    }
    this.dialogRef.close(resultado);
  }

  public Aceptar(): void {
    this.cargServ.iniciarCargando();
    this.paisesService.eliminarCliente(this.idPaisElim).subscribe((res: Response) => {
      const response: CreatePaisResponse = res as any;
      this.cargServ.detenCargando();

      if (response.responseCode === 1) {
        this.Cerrar(true);
      } else {
        this.dialog.open(DialogMessagesComponent, {
          minWidth: '320px',
          maxWidth: '632px',
          data: {message: response.responseDescription + ' 😅'}
        });
        this.Cerrar(false);
      }
    });
  }

}

