import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {AppCargandoService} from '../../appBase/cargando/app.cargando.service';
import {
  subirAnimation
} from '../../animations/listanim.animations';
import {MatTableDataSource} from '@angular/material/table';
import {ClientsService} from '../../services/clients.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {DialogcreatpaisesComponent} from './diagcreatclient.component';
import {PaisesModel} from '../../models/paises.model';
import {DialogMessagesComponent} from './diagmessages.component';
import {DialogConfElimComponent} from './diagconfelim.component';

@Component({
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [subirAnimation]
})

@Injectable()
export class ClientsComponent implements OnInit {

  constructor(private paisesService: ClientsService, private cargServ: AppCargandoService, public dialog: MatDialog) {
  }

  dataClients: PaisesModel[];
  dataSource: MatTableDataSource<PaisesModel>;
  displayedColumns: string[] = ['editar', 'idClie', 'name', 'phone'];
  // displayedColumns: string[] = ['eliminar'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  indexElEd: number;

  ngOnInit(): void {

    this.cargarTodosPaises();
  }

  createDialog(): void {
    const dialogRef = this.dialog.open(DialogcreatpaisesComponent, {
      minWidth: '320px',
      maxWidth: '632px',
      data: {dataed: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      // Se verifica si es diferente de nil para evitar error que ocurre al oprimir Esc
      if (result) {
        if (result.result) {
          if ((result.result === true) && (result.dataAdEd)) {
            this.dialog.open(DialogMessagesComponent, {
              minWidth: '320px',
              maxWidth: '632px',
              data: {message: 'Cliente Creado 😃'}
            });
            this.dataClients.push(result.dataAdEd);
            this.dataSource = new MatTableDataSource<PaisesModel>(this.dataClients);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });
  }

  eliminar(paisEd: PaisesModel, indexEl: number): void {
    const dialogRef = this.dialog.open(DialogConfElimComponent, {
      minWidth: '320px',
      maxWidth: '632px',
      data: {message: '🤔 ¿Desea Borrar el Cliente ' + paisEd.name + '?', idPaisElim: paisEd.idClie}
    });
    dialogRef.afterClosed().subscribe(result => {
      // Se verifica si es diferente de nil para evitar error que ocurre al oprimir Esc
      if (result) {
        if (result.result) {
          if ((result.result === true)) {

            this.dialog.open(DialogMessagesComponent, {
              minWidth: '320px',
              maxWidth: '632px',
              data: {message: 'Cliente Eliminado 😌'}
            });
            this.dataClients.splice(indexEl, 1);
            this.dataSource = new MatTableDataSource<PaisesModel>(this.dataClients);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });


  }

  editar(paisEd: PaisesModel, indexEd: number): void {
    this.indexElEd = indexEd;
    const dialogRef = this.dialog.open(DialogcreatpaisesComponent, {
      minWidth: '320px',
      maxWidth: '632px',
      data: {dataed: paisEd}
    });
    dialogRef.afterClosed().subscribe(result => {
      // Se verifica si es diferente de nil para evitar error que ocurre al oprimir Esc
      if (result) {
        if (result.result) {
          if ((result.result === true) && (result.dataAdEd)) {

            this.dialog.open(DialogMessagesComponent, {
              minWidth: '320px',
              maxWidth: '632px',
              data: {message: 'Cliente Editado 😃'}
            });
            this.dataClients[this.indexElEd] = result.dataAdEd;
            this.dataSource = new MatTableDataSource<PaisesModel>(this.dataClients);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });
  }

  cargarTodosPaises(): void {
    this.cargServ.iniciarCargando();

    this.paisesService.listarClients().subscribe((res: Response) => {
      const data = res as any;
      this.dataClients = data.clients;
      this.dataSource = new MatTableDataSource<PaisesModel>(this.dataClients);
      this.dataSource.paginator = this.paginator;
      this.cargServ.detenCargando();
    });

  }


}
