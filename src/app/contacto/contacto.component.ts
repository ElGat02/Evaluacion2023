import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  //id: string = "12345"
  //name: string = "Jairo"

  persona: Persona = new Persona();

  constructor(private router: Router, 
    private contactoServices: ContactosService,
    private contactoFirebaseService: ContactosFirebaseService){ 

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.persona = params['contacto']

      }
  }

  savePersona(){
    this.contactoServices.addContacto(this.persona)
    
    console.log('contacots', this.contactoServices.getContactos())
  
    this.contactoFirebaseService.save(this.persona)
    this.persona = new Persona();
  }

  goAcerca(){
    console.log("llamando acerca de ", this.persona)
    this.router.navigate(['paginas/acerca'])
  }

  goListado(){
    this.router.navigate(['paginas/listado-contactos'])
  }
}
