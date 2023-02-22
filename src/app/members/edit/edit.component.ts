import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Members } from '../members';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  fruitForm: Members = {
    id: 0,
    UID:'',
    name: '',
    email: '',
    phone: 0,
    joinAghni: true
  };

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private memberService: MembersService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.memberService.getById(id).subscribe((data) => {
      this.fruitForm = data;
    });
  }


  update() {
    this.memberService.update(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/members/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
