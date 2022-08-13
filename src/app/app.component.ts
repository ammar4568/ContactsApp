import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';

const API_URL = 'https://5c661d4719df280014b62782.mockapi.io/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users: User[] = [];
  public loadedUserProfile: User = new User();

  isDataLoading = false;
  isUserLoading = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isDataLoading = true;

    this.http.get<User[]>(API_URL).subscribe((users: User[]) => {
      this.users = users;
      this.isDataLoading = false;

      if (users.length) {
        this.loadUser(users[0]);
      }
    })
  }

  loadUser(user: User) {
    this.isUserLoading = true;
    this.http.get<User>(`${API_URL}/${user.id}`).subscribe((user: User) => {
      this.isUserLoading = false;

      this.loadedUserProfile = user;
    })
  }
}
