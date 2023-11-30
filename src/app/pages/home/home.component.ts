import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  service = new UntypedFormControl('')
  lista_servicios= ['Capping', 'Soft Gel', 'Belleza de Pies', 'Podocosmiatría'];

  constructor() { }

  ngOnInit(): void {
  }

}
