import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from '../search/search.component';
import { location } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports:[CommonModule,FormsModule,IonicModule,SearchComponent],
})
export class HeaderPage {

  constructor() { 
    addIcons({
     location
    });

  }

  

}
