import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.scss']
})
export class ViewCountryComponent implements OnInit{

  public pais!: Country;

  constructor( 
    private aRouter: ActivatedRoute,
    private _countryServices: CountryService
  ){}

  ngOnInit(): void {

    this.aRouter.params.pipe(switchMap(({ id }) => this._countryServices.buscarPorCodigoAlpha(id))).subscribe({
      next: pais =>{
        this.pais = pais;
      },
      error: error =>{
        console.log(error);
      }
    });

  }

}
