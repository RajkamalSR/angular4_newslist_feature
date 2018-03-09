import { SearchService } from './../../../service/shared/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText: string;
  public searchTextValue: string;
  constructor(public searchService : SearchService) { }

  ngOnInit() {
  }

  onKeyup() {
    this.searchTextValue = this.searchText;
    //console.log(this.searchTextValue);
    this.searchService.setValue(this.searchTextValue);
   // this.searchService.getValue();
  }

}
