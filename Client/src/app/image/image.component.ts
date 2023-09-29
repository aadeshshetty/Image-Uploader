import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageDataService } from '../services/image-data.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private imageData: ImageDataService) { }
  image : any = [];
  currentImagePath : string = '';
  currentIndex=0;

  @ViewChild('carouselRef')
  carouselRef!: ElementRef;
  ngOnInit(): void {
    const imgArr : any = this.imageData.getImageData(); 
    for(let i=0; i<imgArr.length;i++){
      this.image.push({ path: imgArr[i].secure_url});
    }
  }
  
  onSlideChange(e:any){
    console.log(this.carouselRef);
    console.log(e);

    // this.currentImagePath=this.carouselRef.nativeElement.innerText;  
  }  
}
