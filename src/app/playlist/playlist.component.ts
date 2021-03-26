import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  
  uname: string = 'oudsioqt7rkqdkco3lny5fosm';
  items: any[] = [];
  
  getPlaylist() {
    this.apiService.getPlaylist(this.uname).subscribe(arg => {
      this.items = arg.items;
    });
  }
}
