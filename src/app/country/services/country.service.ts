import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private API_URL: string = environment.apiUrl;

  // angular v15
  private http = inject( HttpClient );

  // angular v13
  // constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.API_URL}/name/${termino}`);
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.API_URL}/capital/${termino}`);
  }

  buscarPorCodigoAlpha( termino: string ): Observable<Country>{
    return this.http.get<Country>(`${this.API_URL}/alpha/${termino}`);
  }

  buscarRegion( termino: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.API_URL}/region/${termino}`);
  }
  
}
