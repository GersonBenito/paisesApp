import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.scss']
})
export class TableCountryComponent {

  @Input() public countries: Array<Country> = [];

  constructor(){}
}
