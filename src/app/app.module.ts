import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateplaylistComponent } from './createplaylist/createplaylist.component';
import { UpdateplaylistComponent } from './updateplaylist/updateplaylist.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DeletetracksComponent } from './deletetracks/deletetracks.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    PlaylistComponent,
    CreateplaylistComponent,
    UpdateplaylistComponent,
    DeletetracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatRadioModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
