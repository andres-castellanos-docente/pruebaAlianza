import {Component, AfterViewInit} from '@angular/core';
import {AppprincComponent} from '../princ/appprinc.component';
import {derAIzAnimation, subirAnimation} from '../../animations/listanim.animations';


@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html', styleUrls: ['./app.sidebar.scss'],
    animations: [subirAnimation, derAIzAnimation]
})
export class AppSidebarComponent implements  AfterViewInit {

    constructor(public app: AppprincComponent) {
    }

    ngAfterViewInit(): void {
        const self = this;
        setTimeout(() => {
            // no prestar atencion al warning argumento que falta
            if (window.innerWidth >= 1280) {
               // self.app.sidebarActive = true;
            }
        }, 1000);
    }


}

