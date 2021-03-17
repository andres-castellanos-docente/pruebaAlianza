import {Component,  Injectable, OnInit} from '@angular/core';
import {messagesAnimation, subirAnimation} from '../../animations/listanim.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppCargandoService} from '../../appBase/cargando/app.cargando.service';
import {LoginService} from '../../services/login.service';
import {LoginResponse} from '../../responses/listResponses';
import {LoginModel} from '../../models/login.model';
import {Router} from '@angular/router';


@Component({templateUrl: './login.component.html', animations: [subirAnimation, messagesAnimation]})

@Injectable()
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginSubmited: boolean;
  tituloerr: string;
  messageerr: string;
  viewMessages = false;

  constructor(private router: Router, private builder: FormBuilder, private loginService: LoginService,
              private cargServ: AppCargandoService) {

  }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: ['prueba', [Validators.required, Validators.maxLength(255)]],
      password: ['12345678', [Validators.required, Validators.maxLength(255)]]
    });
  }

  cerrarMensaje(): void {
    this.viewMessages = false;
    this.tituloerr = '';
    this.messageerr = '';
  }

  onSubmitIniciar(): void {
    this.loginSubmited = true;
    if (this.loginForm.invalid) {
      return;
    }
    const loginModelEnv = new LoginModel(this.loginForm.value);
    this.loginService.iniciarSesion(loginModelEnv).subscribe((res: Response) => {
      const response: LoginResponse = res as any;
      this.cargServ.detenCargando();
      if (response.accessToken.trim().length > 0) {
        sessionStorage.setItem('token', response.accessToken);
        this.router.navigate(['/paises']);
      } else {
        alert('Ocurrio un Error al Setear el Token');
      }
    }, (err) => {
      if (err.status === 401) {
        this.viewMessages = false;
        const self = this;
        setTimeout(() => {
          self.viewMessages = true;
          self.tituloerr = 'Upps Ocurrio un Error ' + '😅';
          self.messageerr = 'Credenciales Incorrectas';
          self.loginForm.controls.password.setValue(null);
        }, 250);
      }
    });
  }


}

