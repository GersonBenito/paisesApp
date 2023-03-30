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
  public countriesSuggested: Country[] = [];
  public mostrarSugerencia: boolean = false;

  constructor( private _countryService: CountryService ){

  }

  buscar(termino: string): void{

    this.error = false;
    this.termino = termino;
    // this.countriesSuggested = [];
    this.mostrarSugerencia = false;
    
    this._countryService.buscarPais( this.termino ).subscribe({
      next: (countries) =>{
        this.countries = countries;
      },
      error: (error) =>{
        this.error = true;
        this.countries = [];
      }
    });
    
  }

  sugerencias(termino: string){
    this.error = false;
    this.termino = termino;
    this.countries = [];
    this.mostrarSugerencia = true;

    if(termino === ''){
      this.mostrarSugerencia = false;
      return;
    }

    this._countryService.buscarPais(termino).subscribe({
      next: paises => this.countriesSuggested = paises.slice(0, 5),
      error: error => {
        this.error = true;
        this.mostrarSugerencia = false;
      }
    });
  }

  buscarSugerido(termino: string): void{
    this.buscar(termino);
  }

}
