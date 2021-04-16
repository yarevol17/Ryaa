import { RateService } from './../services/rate.service';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-profile-visit',
  templateUrl: './profile-visit.component.html',
  styleUrls: ['./profile-visit.component.scss'],
})
export class ProfileVisitComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly rateService: RateService
  ) {}

  id: string = '';
  ability: number = 5;
  rateForm: FormGroup = new FormGroup({});
  rateDetail: any;
  rateRange: {
    id: string;
    rate: string;
    minimum: number;
    maximum: number;
  }[] = [
    { id: '0', rate: 'Tất cả', minimum: 0, maximum: 10 },
    { id: '1', rate: '0-1.9', minimum: 0, maximum: 1.9 },
    { id: '2', rate: '2-3.9', minimum: 2, maximum: 3.9 },
    { id: '3', rate: '4-5.9', minimum: 4, maximum: 5.9 },
    { id: '4', rate: '6-7.9', minimum: 6, maximum: 7.9 },
    { id: '5', rate: '8-10', minimum: 8, maximum: 10 },

  ];

  rates: any = [];

  @ViewChild('rateList') rateList?: ElementRef;

  ngOnInit() {
    this.activatedRoute.params.subscribe((id) => {
      this.id = id['id'];
      // put user service get user by id here
    });
    this.rateForm = new FormGroup({
      ability: new FormControl(0),
      responsibility: new FormControl(0),
      discipline: new FormControl(0),
      dynamic: new FormControl(0),
      keen: new FormControl(0),
      comment: new FormControl(''),
      user: new FormControl('user_id'),
    });
  }
  save() {}

  rating_submit() {
    console.log(this.rateForm.value);
    this.rateService
      .rate(this.rateForm.value, 'author_id')
      .subscribe((res) => console.log(res));
  }

  getRateDetail() {
    this.rateService.get_rate_by_user_id('user_id').subscribe((res) => {
      this.rateDetail = res;
      this.rates = this.rateDetail;
    });
  }

  showRate(id: string) {
    this.rateList?.nativeElement.click()
    const min = this.rateRange[+id].minimum;
    const max = this.rateRange[+id].maximum;

    this.rates = this.rateDetail.filter(
      (data: any) => data.total >= min && data.total <= max
    );
  }

  //   $(function(){
  //   $(".increment").click(function(){
  //     var count = parseInt($("~ .count", this).text());

  //     if($(this).hasClass("up")) {
  //       var count = count + 1;

  //        $("~ .count", this).text(count);
  //     } else {
  //       var count = count - 1;
  //        $("~ .count", this).text(count);
  //     }
  //   });
  // });

  up(): void {
    this.ability == this.ability + 1;
  }
  // down(): void {
  //   this.ability = this.ability - 1;
  // }
}
