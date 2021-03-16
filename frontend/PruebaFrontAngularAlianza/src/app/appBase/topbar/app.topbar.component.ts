import {Component, OnInit} from '@angular/core';
import {AppprincComponent} from '../princ/appprinc.component';
import {
    derAIzAnimation,
    IzADerAnimation
} from '../../animations/listanim.animations';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html', styleUrls: ['./app.topbar.scss'],
    animations: [derAIzAnimation, IzADerAnimation]
})
export class AppTopBarComponent implements OnInit {

    constructor(public app: AppprincComponent) {
    }

    ngOnInit(): void{
    }
}
