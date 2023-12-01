import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  servicios$: Observable<any[]> | undefined; // Cambiado a Observable

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    const serviciosCollection = collection(this.firestore, 'servicios');

    this.servicios$ = from(getDocs(serviciosCollection)).pipe(
      map((querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      })
    );
  }

}
