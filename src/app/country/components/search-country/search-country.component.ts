import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss']
})
export class SearchCountryComponent implements OnInit{
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  public $debounce: BehaviorSubject<string> = new BehaviorSubject('');

  public termino: string = '';

  ngOnInit(): void {
      this.$debounce.pipe(debounceTime(300)).subscribe({
        next: value => this.onDebounce.emit( value )
      });
  }

  buscar(): void {
    this.onEnter.emit( this.termino );
  }

  keyPress(){
    this.$debounce.next( this.termino );
  }

}
