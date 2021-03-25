import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  query: string;
  type: string;
  items: any[] = [];
  items1: any[] = [];

  search() {
    if (this.type == "track") {
      this.apiService.search(this.query, this.type).subscribe((res) => {
        this.items = res.tracks.items;
      });
    }
    if(this.type == "artist") {
      this.apiService.search(this.query, this.type).subscribe((res) => {
        this.items1 = res.artists.items;
      });
    }
  }
}
