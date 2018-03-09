import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';

import { MainService } from '../../service/main.service'
import { SearchService } from '../../service/shared/search.service';

import { NewsListApiConstant } from '../../constants/constant'

@Pipe({ name: 'ObjNgFor', pure: false })
export class ObjNgFor implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    // return Object.keys(this.responseData)//.map(key => value[key]);
  }
}

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent implements OnInit {
  public response: any;
  public responseData: any;
  public searchTextValue: string;
  constructor(public mainService: MainService, public searchService: SearchService) { }


  ngOnInit() {

    this.mainService.getData(NewsListApiConstant.NewsListApiDocUrl).subscribe((res) => {
      this.responseData = res;
      this.responseData = this.responseData.articles;
      console.log(this.responseData);
    });

    this.searchService.searchTextValue.subscribe(message => { this.searchTextValue = message.text; });
  }


}
