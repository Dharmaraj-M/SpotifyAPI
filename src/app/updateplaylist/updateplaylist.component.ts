import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateplaylist',
  templateUrl: './updateplaylist.component.html',
  styleUrls: ['./updateplaylist.component.css']
})
export class UpdateplaylistComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  pid: string = '';
  pname: string = '';
  pdes: string = '';
  visible: boolean = true;

  updatePlaylist() {
    let data = {
      'name' : this.pname,
      'description' : this.pdes,
      'public' : this.visible
    }
    this.apiService.updatePlaylist(this.pid, data).subscribe(() => {
      alert('Playlist Updated...!');
      location.reload();
    }, () => {
      alert('Something went wrong...!');
      location.reload();
    });
  }
}