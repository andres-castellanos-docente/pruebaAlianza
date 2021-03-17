import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {AppCargandoService} from '../../appBase/cargando/app.cargando.service';
import {
  subirAnimation
} from '../../animations/listanim.animations';
import {MatTableDataSource} from '@angular/material/table';
import {ClientsService} from '../../services/clients.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {ClientModel} from '../../models/client.model';
import {DialogMessagesComponent} from './diagmessages.component';
import {DialogConfElimComponent} from './diagconfelim.component';
import {DialogcreatclientesComponent} from './diagcreatclient.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [subirAnimation]
})

@Injectable()
export class ClientsComponent implements OnInit {

  constructor(private clientesService: ClientsService,
              private builder: FormBuilder, private cargServ: AppCargandoService, public dialog: MatDialog) {
  }

  clieForm: FormGroup;
  dataClients: ClientModel[];
  dataSource: MatTableDataSource<ClientModel>;
  displayedColumns: string[] = ['editar', 'id', 'name', 'phone', 'email', 'sharedkey', 'savedate'];
  // displayedColumns: string[] = ['eliminar'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  indexElEd: number;

  ngOnInit(): void {

    this.cargarTodosclientes();
    this.clieForm = this.builder.group({
      sharedKey: ['', []]
    });
  }

  consultar(): void {
    this.cargServ.iniciarCargando();

    this.clientesService.listarClientsPorSharedKey(this.clieForm.controls.sharedKey.value).subscribe((res: Response) => {
      const data = res as any;
      this.dataClients = data.clients;
      this.dataSource = new MatTableDataSource<ClientModel>(this.dataClients);
      this.dataSource.paginator = this.paginator;
      this.cargServ.detenCargando();
    });
  }

  createDialog(): void {
    const dialogRef = this.dialog.open(DialogcreatclientesComponent, {
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
            this.dataSource = new MatTableDataSource<ClientModel>(this.dataClients);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });
  }

  eliminar(clieEd: ClientModel, indexEl: number): void {
    const dialogRef = this.dialog.open(DialogConfElimComponent, {
      minWidth: '320px',
      maxWidth: '632px',
      data: {message: '🤔 ¿Desea Borrar el Cliente ' + clieEd.name + '?', idElim: clieEd.id}
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
            this.dataSource = new MatTableDataSource<ClientModel>(this.dataClients);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });


  }

  editar(clieEd: ClientModel, indexEd: number): void {
    this.indexElEd = indexEd;
    const dialogRef = this.dialog.open(DialogcreatclientesComponent, {
      minWidth: '320px',
      maxWidth: '632px',
      data: {dataed: clieEd}
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
            this.dataSource = new MatTableDataSource<ClientModel>(this.dataClients);
            this.dataSource.paginator = this.paginator;
          }
        }
      }
    });
  }

  cargarTodosclientes(): void {
    this.cargServ.iniciarCargando();

    this.clientesService.listarClients().subscribe((res: Response) => {
      const data = res as any;
      this.dataClients = data.clients;
      this.dataSource = new MatTableDataSource<ClientModel>(this.dataClients);
      this.dataSource.paginator = this.paginator;
      this.cargServ.detenCargando();
    });

  }


}
