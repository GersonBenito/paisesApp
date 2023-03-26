import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.scss']
})
export class TableCountryComponent {

  @Input() public countries: Array<Country> = [];

  constructor( private router: Router ){}

  showCountry( alpha2Code: string ): void{
    this.router.navigate([ 'pais', alpha2Code ]);
  }

}
