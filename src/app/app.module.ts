import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { HomeComponent } from './pages/home/home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PagesComponent } from './pages/pages.component';
import { MatListModule, MatSelectionList} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirestoreModule } from '@angular/fire/firestore';
import { MatInputModule } from '@angular/material/input';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker'


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
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
    BrowserAnimationsModule,
    FirestoreModule,
    NgxMatDatetimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
