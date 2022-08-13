import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() userSelected: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  loadUser(user: User) {
    this.userSelected.emit(user);
  }

}
