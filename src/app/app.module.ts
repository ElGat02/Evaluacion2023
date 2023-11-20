import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ViewContactoComponent } from './view-contacto/view-contacto.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    MenuComponent,
    ListaContactosComponent,
    ViewContactoComponent
  ],
  imports: [

   
    BrowserModule,
    provideFirebaseApp(() => initializeApp({"projectId":"evaluacion-salazar-jairo","appId":"1:283498053568:web:7d4b07bf6c197558989225","storageBucket":"evaluacion-salazar-jairo.appspot.com","apiKey":"AIzaSyDEcrIaDXxkPE-sc7pOdQ1r3kNekVMnMAY","authDomain":"evaluacion-salazar-jairo.firebaseapp.com","messagingSenderId":"283498053568"})),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







