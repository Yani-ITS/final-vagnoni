import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PagesComponent } from './pages/pages.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { HomeComponent } from './pages/home/home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    PagesComponent,
    ProductosComponent,
    ServiciosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"app-vagnoni","appId":"1:1035759304860:web:e8fbcbc5027fff741d6d59","storageBucket":"app-vagnoni.appspot.com","apiKey":"AIzaSyCU7aCNCKN1oP-i7-9fFlfAX8S_QMK9-wU","authDomain":"app-vagnoni.firebaseapp.com","messagingSenderId":"1035759304860","measurementId":"G-7Z7K52R9RR"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
