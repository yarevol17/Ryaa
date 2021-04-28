import { AuthService } from './../services/auth.service';
import { RateService } from './../services/rate.service';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { YearService } from './../services/year.service';
import { MajorService } from './../services/major.service';
import { LabService } from './../services/lab.service';

@Component({
  selector: 'app-profile-visit',
  templateUrl: './profile-visit.component.html',
  styleUrls: ['./profile-visit.component.scss'],
})
export class ProfileVisitComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly rateService: RateService,
    private readonly yearService: YearService,
    private readonly majorService: MajorService,
    private readonly labService: LabService,
    public authService: AuthService
  ) {
    this.authService.resolveUser()
  }

  id: string = '';
  // ability: number = 5;
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
    { id: '2', rate: '2.0-3.9', minimum: 2, maximum: 3.9 },
    { id: '3', rate: '4.0-5.9', minimum: 4, maximum: 5.9 },
    { id: '4', rate: '6.0-7.9', minimum: 6, maximum: 7.9 },
    { id: '5', rate: '8.0-10', minimum: 8, maximum: 10 },

  ];

  rates: any = [];

  schools = [
    // 'Cơ khí',
    // 'Cơ khí động lực',
    // 'Công nghệ Sinh học và Công nghệ Thực phẩm',
    // 'Công nghệ Thông tin và Truyền thông',
    // 'Dệt may - Da giầy và Thời trang',
    // 'Khoa học và Công nghệ Môi trường',
    // 'Khoa học và Công nghệ Nhiệt lạnh',
    // 'Khoa học và Kỹ thuật Vật liệu',
    // 'Kinh tế và Quản lý',
    // 'Kỹ thuật Hóa học',
    // 'Ngoại ngữ',
    // 'Sư phạm Kỹ thuật',
    // 'Toán ứng dụng và Tin học',
    // 'Vật lý Kỹ thuật',
    // 'Điện',
    'Điện tử - Viễn thông',
  ];
  degrees = [
    'Cử nhân',
    'Kĩ sư',
    'Thạc sĩ',
  ];
  years: any = [];
  classes: any = [];
  majors: any = [];
  subjects: any = [];
  skills: any;
  labs: any = [];
  professors: any = [];
  year: string = '';
  major: string = '';
  profileForm: FormGroup = new FormGroup({});

  @ViewChild('rateList') rateList?: ElementRef;

  ngOnInit() {
    this.activatedRoute.params.subscribe((id) => {
      this.id = id['id'];
      // put user service get user by id here
      console.log(this.id);

    });
    this.rateForm = new FormGroup({
      ability: new FormControl(5),
      responsibility: new FormControl(5),
      discipline: new FormControl(5),
      dynamic: new FormControl(5),
      keen: new FormControl(5),
      comment: new FormControl(''),
      user: new FormControl('user_id'),
    });

    this.yearService.getYears().subscribe((res) => {
      console.log(res);
      this.years = res;
      this.years.sort((a: { name: string }, b: { name: string }) => {
        var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // name trùng nhau
        return 0;
      });
    });

    this.majorService.getMajors().subscribe((res) => {
      console.log(res);
      this.majors = res;
      // this.majors.sort((a: { name: string }, b: { name: string }) => {
      //   var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
      //   var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
      //   if (nameA < nameB) {
      //     return 1;
      //   }
      //   if (nameA > nameB) {
      //     return -1;
      //   }

      //   // name trùng nhau
      //   return 0;
      // });
    });

    this.labService.getLabs().subscribe((res) => {
      this.labs = res;
      this.labs.sort((a: { name: string }, b: { name: string }) => {
        var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    });

    this.profileForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      quotes: new FormControl(),
      school: new FormControl(),
      year: new FormControl(),
      class: new FormControl(),
      degree: new FormControl(),
      major: new FormControl(),
      project: new FormControl(),
      strength: new FormGroup({
        content: new FormControl(),
        isVisible: new FormControl(),
      }),
      weakness: new FormGroup({
        content: new FormControl(),
        isVisible: new FormControl(),
      }),
      hobbies: new FormGroup({
        content: new FormControl(),
        isVisible: new FormControl(),
      }),
      lab: new FormControl(),
      professor: new FormControl(),
      languages: new FormGroup({
        toeic: new FormControl(),
        ietls: new FormControl(),
        aptis: new FormControl(),
        others: new FormControl(),
      }),
      skills: new FormGroup(
        {
          altium: new FormControl(),
          Cpp: new FormControl(),
          matlab: new FormControl(),
          hfss: new FormControl(),
        }
      ),
      softSkills: new FormGroup({
        teamwork: new FormControl(),
        selfwork: new FormControl(),
        organize: new FormControl(),
        present: new FormControl(),
        handle: new FormControl(),
      }),
      scores: new FormControl(),
      address: new FormGroup({
        content: new FormControl(),
        isVisible: new FormControl(),
      }),
      height: new FormGroup({
        content: new FormControl(),
        isVisible: new FormControl(),
      }),
      weight: new FormGroup({
        content: new FormControl(),
        isVisible: new FormControl(),
      }),
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

  // up(): void {
  //   this.ability == this.ability + 1;
  // }
  // down(): void {
  //   this.ability = this.ability - 1;
  // }

  getClasses(event: Event, yearId: any) {
    console.log(yearId);
    this.yearService
      .getClassByYear(yearId)
      .subscribe((res) => (this.classes = res));
  }

  getSubjects(event: Event, majorId: any) {
    console.log(majorId);
    this.majorService
      .getSubjectsByMajor(majorId)
      .subscribe((res) => {
        this.subjects = res,
        console.log(res)
      });
    }

  getSkills(event: Event, majorId: any) {
    console.log(majorId);
    this.majorService
      .getSkillsByMajor(majorId)
      .subscribe((res) => {
        this.skills = res;
        for (let i = 0; i < this.skills.length; i++) {
          // this.profileForm.get('skills').addControl(this.skills[i].name, new FormControl())

        }
        console.log(res)
      });
    }

    edit_submit() {
      console.log(this.profileForm.value);

    }
}
