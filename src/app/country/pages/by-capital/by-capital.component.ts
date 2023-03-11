import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent {

  public error: boolean = false;
  public termino: string = '';
  public countries: Country[] = [];

  constructor( private _countryService: CountryService ){}

  buscar(termino: string){

    this.error = false;
    this.termino = termino;

    this._countryService.buscarCapital(termino).subscribe({

      next: countries => this.countries = countries,
      error: error =>{
        this.error = true;
        this.countries = [];
      }

    })
  }
  
}
