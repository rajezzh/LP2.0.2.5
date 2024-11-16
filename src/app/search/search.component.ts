import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { personCircle, search } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';
import { CloseIconDirective } from '../close-icon.directive';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports:[CommonModule,FormsModule,IonicModule,CloseIconDirective],
})
export class SearchComponent  implements OnInit {

  isSearchbarFocused = false;
  search = ["Name", "Lead Id", "Mobile Number"];
  currentPlaceholder: string = this.search[0];
  private index = 0;
  private intervalId: any;
  closeIconStyles = { 'position': 'fixed',
    'top': '104px',
    'left': '77%',
    'font-size': '2em',
    'color': 'red'};
  constructor(public renderer: Renderer2, private el: ElementRef) {
    console.log(`test component....`)
    addIcons({ personCircle,search});
  }

  ngOnInit() {
    this.slider();
  }

  slider() {
    this.currentPlaceholder = this.search[this.index];
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.search.length;
      this.currentPlaceholder = this.search[this.index];
    }, 2500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onSearchbarFocus() {
    if (!this.isSearchbarFocused) {
      this.isSearchbarFocused = true;
    }
    else{
      this.isSearchbarFocused = false;
    }
  }
  
  onInpuChange(event:any){
    console.log(event.detail.value)    
    if(event.target.value.length<1){
      this.isSearchbarFocused = false;
    }else{
      this.isSearchbarFocused = true;
    }
  }


}
