import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Members } from '../members';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class confirmationComponent implements OnInit {

  MemberForm: Members = {
    id: 0,
    UID:'',
    name: '',
    email: '',
    phone: 0,
    joinAghni: true
  };

  qrCodeValue = 'https://angular.io/';
  errorCorrectionLevel = 'Q';
  margin = 1;
  color = '#333333';
  backgroundColor = '#ffffff';

  constructor( private route: ActivatedRoute,
    private router:Router,
    private memberService: MembersService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.memberService.getById(id).subscribe((data) => {
      this.MemberForm = data;
    });
  }

}
