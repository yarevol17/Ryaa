import { Component, OnInit } from '@angular/core';
import { YearService } from './../services/year.service';
import { MajorService } from './../services/major.service';
import { LabService } from './../services/lab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  schools = [
    'Cơ khí',
    'Cơ khí động lực',
    'Công nghệ Sinh học và Công nghệ Thực phẩm',
    'Công nghệ Thông tin và Truyền thông',
    'Dệt may - Da giầy và Thời trang',
    'Khoa học và Công nghệ Môi trường',
    'Khoa học và Công nghệ Nhiệt lạnh',
    'Khoa học và Kỹ thuật Vật liệu',
    'Kinh tế và Quản lý',
    'Kỹ thuật Hóa học',
    'Ngoại ngữ',
    'Sư phạm Kỹ thuật',
    'Toán ứng dụng và Tin học',
    'Vật lý Kỹ thuật',
    'Điện',
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
  skills: any = [];
  labs: any = [];
  professors: any = [];
  year: string = '';
  major: string = '';

  profileForm: FormGroup = new FormGroup({});

  constructor(
    private readonly yearService: YearService,
    private readonly majorService: MajorService,
    private readonly labService: LabService,
    ) {}

  ngOnInit() {
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
      skills: new FormGroup({
        altium: new FormControl(),
        cpp: new FormControl(),
        matlab: new FormControl(),
        hfss: new FormControl(),
      }),
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
        this.skills = res,
        console.log(res)
      });
    }
}
