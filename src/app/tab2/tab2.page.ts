import { Component } from '@angular/core';
import { PhotoService } from "../services/photo.service"

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }
  mostrarInspiracion = false;
  toggleInspiracion() {
    this.mostrarInspiracion = !this.mostrarInspiracion;
  }

  openPortfolio() {
    window.open('https://dilanbedoya.github.io/', '_blank');
  }
}

