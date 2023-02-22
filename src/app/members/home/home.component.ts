import { Component, OnInit } from '@angular/core';
import { Members
 } from '../members';
import { MembersService } from '../members.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deleteModal: any;
  idTodelete: number = 0;
  
  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';

allMembers: Members[] = [];

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();

  }

  get() {
    this.memberService.get().subscribe((data) => {
      this.allMembers = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.memberService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allMembers = this.allMembers.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
