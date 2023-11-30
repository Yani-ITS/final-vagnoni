import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, getFirestore } from 'firebase/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  productos: Observable<any[]> | undefined;

  constructor(private database: Firestore) { }

  ngOnInit(): void {

    const productosCollection = collection(getFirestore(), 'productos');

    // Realizar la consulta a Firestore y obtener un Observable
    this.productos = new Observable((observer) => {
      getDocs(productosCollection).then((querySnapshot) => {
        const productosArray: any[] = [];
        querySnapshot.forEach((doc) => {
          productosArray.push({ id: doc.id, ...doc.data() });
        });
        observer.next(productosArray);
      }).catch((error) => {
        observer.error(error);
      });
    });

    }
  }

