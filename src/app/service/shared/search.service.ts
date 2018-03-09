import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SearchService {
 public searchTextValue = new Subject<any>();
  constructor() { }
  
  setValue(searchTextValue){
   this.searchTextValue.next({text:searchTextValue});
  }


}
