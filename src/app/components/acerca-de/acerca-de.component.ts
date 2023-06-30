import { Component, OnInit } from '@angular/core';
import { persona } from '../../../app/model/persona.model'
import { PersonaService } from '../../../app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: '../acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit{

  persona: persona = null;

  constructor(public personaService: PersonaService, 
    private tokenService: TokenService){  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona=data})
  }
}
