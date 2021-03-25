import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  uname: string;
  userData: string[] = [];
  
  getUserInfo() {
    this.apiService.getUserInfo(this.uname).subscribe(
      (res) => {
        this.userData[0] = res.display_name;
        this.userData[1] = res.external_urls.spotify;
        this.userData[2] = res.followers.total;
        this.userData[3] = res.images[0].url;
      });
    }

}
