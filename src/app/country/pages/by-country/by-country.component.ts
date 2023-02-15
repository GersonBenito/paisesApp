import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent {

  public termino = '';
  public error: boolean = false;
  public countries: Country[] = [];

  constructor( private _countryService: CountryService ){

  }

  buscar(): void{

    this.error = false;
    
    this._countryService.buscarPais( this.termino ).subscribe({
      next: (countries) =>{
        this.countries = countries;
        console.log(this.countries);
      },
      error: (error) =>{
        console.log(error);
        this.error = true;
      }
    });
    
  }


}
