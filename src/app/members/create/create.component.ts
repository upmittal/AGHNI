import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Members } from '../members';
import { MembersService } from '../members.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  myVar2 = false;
  fruitForm: Members = {
    id: 0,
    UID:uuid(),
    name: '',
    email: '',
    phone: 0,
    joinAghni: true
  };
  constructor(private memberService: MembersService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.memberService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/members/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
