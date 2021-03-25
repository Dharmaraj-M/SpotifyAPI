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
  
  uname: string = "0amm0p1avu1z01ycxa44driwg";
  items: any[] = [];

  getPlaylist() {
    this.apiService.getPlaylist(this.uname).subscribe(arg => {
      this.items = arg.items;
      // console.log(arg);
      // console.log(arg.items[0].id);
      // console.log(arg.items[0].name);
      // console.log(arg.items[0].description);
      // console.log(arg.items[0].owner.display_name);
      // console.log(arg.items[0].images[0].url);
    });
  }
}
