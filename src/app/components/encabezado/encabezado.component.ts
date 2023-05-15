import { Component, OnInit } from '@angular/core';
/*import { PortafolioService } from 'src/app/services/portafolio.service';*/

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent {

}
/*export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio:PortafolioService){}

    ngOnInit(): void{
      this.datosPorfolio.obtenerDatosAcercaDe().subscribe(data => {
        console.log(data);
        this.miPorfolio=data;
      });
    }
  }
*/