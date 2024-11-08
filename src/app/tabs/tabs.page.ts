import { NgClass } from '@angular/common';
import { Component, ContentChildren, EnvironmentInjector, inject, ViewChildren, AfterViewInit, ViewChild } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,NgClass],
})
export class TabsPage implements AfterViewInit {
  public environmentInjector = inject(EnvironmentInjector);
  @ViewChildren(IonTabButton)tabButtons!:IonTabButton[];
  selectedTab = ''
  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  ngAfterViewInit(){
    console.log(this.tabButtons)
    this.tabButtons.forEach((e)=>{
      console.log(e)
    })
  }

  tabChanged(){
    
    this.selectedTab =   this.tabButtons.find(e=>e.selected==true)?.tab as string
  }
  
  setTransform(){
    console.log('ngclass',this.selectedTab)
    if(this.selectedTab === 'tab2'){
      return 'selected-tab2'
    }else if(this.selectedTab === 'tab3'){
        return 'selected-tab3'
    }else if(this.selectedTab === 'tab1'){
      return 'selected-tab1'

    }
    
    return ''
  }
  
}
