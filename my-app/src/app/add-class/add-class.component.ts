import { YearService } from './../services/year.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  years: any;

  constructor(
    private readonly yearService: YearService
  ) { }

  ngOnInit() {
    this.yearService.getYears().subscribe(res => {
      console.log(res);
      this.years = res;
    }
    )
  }

}
