import { Component, OnInit, ViewChild } from '@angular/core';
import { Firestore, addDoc, collection, getDocs } from '@angular/fire/firestore';
import { FormGroup, Validators } from '@angular/forms';

import { Observable, from, map } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{


  formulario: FormGroup | undefined;

  selectedServicios: any[] = [];

  servicios$: Observable<any[]> | undefined; // Cambiado a Observable
  formBuilder: any;
  dateControl: any;

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    const serviciosCollection = collection(this.firestore, 'servicios');

    this.servicios$ = from(getDocs(serviciosCollection)).pipe(
      map((querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      })
    );

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
    });


    this.enviarDatos();
  }

  public enviarDatos(): void
  {
    const turnosCollection = collection(this.firestore, 'turnos');

    let datos = {
      nombre: this.formulario?.get('nombreIngresado'),
      servicio: this.selectedServicios,
      telefono: this.formulario?.get('telefonoIngresado')
    }

    addDoc(turnosCollection, datos).then((docRef) => {
      console.log('Documento agregado con ID:', docRef.id);
    }).catch((error) => {
      console.error('Error al agregar documento a Firestore:', error);
    });
  }

  public onServiciosSelectionChange(event: any): void {
    this.selectedServicios = event.value;}

}
