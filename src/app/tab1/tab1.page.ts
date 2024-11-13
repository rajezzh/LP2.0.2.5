import { Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
    standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {

  @ViewChild('grid')gridContainer !: ElementRef<HTMLDivElement>
  @ViewChild('detailTemplate')detailTemplate !: TemplateRef<any>;
  product = {
    img:'../../assets/img/1.png',
    title:'Marble Dream',
    subtitle:'Constantin Frecker',
    price:'$129',
    description:'Hashtag cred air plant drinking vinegar. Leggings yuccie chambray pop-up tousled hell of. Portland wolf mumblecore, synth cold-pressed polaroid poke cardigan gochujang farm-to-table photo booth.'
  }
  detail = {
    img:'',
    title:'',
    subtitle:'',
    price:'',
    description:''
  }
  constructor(  private vcf:ViewContainerRef    ) {

  }

  ngAfterViewInit(){
    console.log(    this.gridContainer.nativeElement.parentNode
      )
      this.detail = {...this.product}
    this.vcf.createEmbeddedView(this.detailTemplate)
  }
}
