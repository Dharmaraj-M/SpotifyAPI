import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-createplaylist',
  templateUrl: './createplaylist.component.html',
  styleUrls: ['./createplaylist.component.css']
})
export class CreateplaylistComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  uname: string = 'oudsioqt7rkqdkco3lny5fosm';
  pname: string = '';
  pdes: string = '';
  visible: boolean = true;
  items: any;

  createPlaylist() {
    let data = {
      'name' : this.pname,
      'description' : this.pdes,
      'public' : this.visible
    }
    this.apiService.createPlaylist(this.uname, data).subscribe(arg => {
      this.items = arg;
      alert('Playlist created...!');
    });
  }
}