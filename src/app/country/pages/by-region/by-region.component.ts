import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent {

  public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionActiva: string = '';
  public countries: Country[] = [];

  constructor( private _countryServices: CountryService ){}

  obtenerPaisesPorRegion(region: string): void {

    if(region === this.regionActiva ) return ;
    
    this.regionActiva = region;

    this._countryServices.buscarRegion(region).subscribe({
      next: countries =>{
        this.countries = countries;
      },
      error: error =>{
        console.log(error);
      }
    })
  }

}
