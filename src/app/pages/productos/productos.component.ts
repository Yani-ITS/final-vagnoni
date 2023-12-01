import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  productos$: Observable<any[]> | undefined; // Cambiado a Observable

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    const productosCollection = collection(this.firestore, 'productos');

    this.productos$ = from(getDocs(productosCollection)).pipe(
      map((querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      })
    );
  }


  }

