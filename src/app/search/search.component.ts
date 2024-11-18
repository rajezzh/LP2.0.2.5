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
  imports: [CommonModule, FormsModule, IonicModule, CloseIconDirective],
})
export class SearchComponent implements OnInit {

  isSearchbarFocused = false;
  search = ["Name", "Lead Id", "Mobile Number"];
  currentPlaceholder: string = this.search[0];
  private index = 0;
  isInterchanged: boolean = false;
  lastEntries: string[] = [];
  private intervalId: any;
  searchTerm: string = "";

  closeIconStyles = {
    position: 'fixed',
    top: '104px',
    left: '77%',
    'font-size': '2em',
    color: 'red'
  };

  iconStyles = {
    position: 'absolute',
    top: '50px',
    right: '27px',
    'font-size': '2em',
    color: '#b3a9a9'
  };

  constructor(public renderer: Renderer2, private el: ElementRef) {
    console.log(`test component....`)
    addIcons({ personCircle, search });
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
    this.isInterchanged = !this.isInterchanged;
    if (!this.isSearchbarFocused) {
      this.isSearchbarFocused = true;
    }
    else {
      this.isSearchbarFocused = false;
    }
  }

  onInpuChange(event: any) {
    const inputValue = event.target.value;
    this.searchTerm = event.target.value;
    console.log(inputValue);
    if (inputValue.length < 1) {
      this.isSearchbarFocused = false;
    } else {
      this.isSearchbarFocused = true;
    }
  }

  onBlur() {
    this.isInterchanged = false;
  }

  onSearch() {
    console.log(this.searchTerm)
    if (this.lastEntries.length >= 5) {
      this.lastEntries.pop()
    }
    this.lastEntries.unshift(this.searchTerm);
  }

  autoPopulate(index: any) {
    this.searchTerm = this.lastEntries[index];
    const input = document.querySelector('input');
    if (input) {
      input.value = this.lastEntries[index];
      console.log(input.value);
    }
  }

}
