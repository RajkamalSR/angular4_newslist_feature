import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { MainService } from '../../service/main.service'
import { NewsListApiConstant } from '../../constants/constant'

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {

  public response: any;
  public responseData: any;
  public olympicData : any;
  public length:number;
  public pageindex:number;
  public arrayindex:any;

  constructor(public route: ActivatedRoute, public mainService: MainService) { }
  id: number;
  private sub: any;

  public episodes  = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
    { title: 'A Golden Crown', director: 'Daniel Minahan' },
    { title: 'You Win or You Die', director: 'Daniel Minahan' },
    { title: 'The Pointy End', director: 'Daniel Minahan' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' }
  ];
  public list = [
    { 
        title: 'Selangor', 
        content: 'Selangor is a state ....' 
    },
    { 
        title: 'Kuala Lumpur', 
        content: 'Kuala Lumpur is the capital of Malaysia...' 
    },
    {
        title: 'Perak',
        content: 'Perak is a state in the northwest of Peninsular Malaysia...'
    }
]




  ngOnInit() {

    this.mainService.getData(NewsListApiConstant.NewsListApiDocUrl).subscribe((res) => {
      this.responseData = res;
      this.responseData = this.responseData.articles;
      // console.log(this.responseData);
    });

    // this.mainService.getData(NewsListApiConstant.OlympicData).subscribe((res) => {
    //   this.olympicData = res;
    //   let length = this.olympicData.length;
    //   console.log(this.olympicData.length);
    // });


    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

 

    this.length = this.episodes.length;
    this.pageindex =Math.round(this.length / 4);

    // this.arrayindex = Array(5).fill().map((x,i)=>i); // [0,1,2,3,4]
    console.log(this.pageindex);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
