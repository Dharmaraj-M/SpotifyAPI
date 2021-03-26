import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-deletetracks',
  templateUrl: './deletetracks.component.html',
  styleUrls: ['./deletetracks.component.css']
})
export class DeletetracksComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  pid: string = '';
  items: any[] = [];

  getTracks() {
    this.apiService.getTracks(this.pid).subscribe(arg => {
      this.items = arg.items;
    })
  }
  deleteTracks(uri: string) {
    let data = {
      "tracks": [
        {
          "uri": uri
        }
      ]
    }
    this.apiService.deleteTracks(this.pid, data).subscribe(() => {
      alert('Deleted successfully...!');
      location.reload();
    },
      () => alert('Error'));
  }
}
