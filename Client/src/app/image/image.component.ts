import { Component, OnInit } from '@angular/core';
import { ImageDataService } from '../services/image-data.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private imageData: ImageDataService) { }
  image : any = {};
  ngOnInit(): void {
    console.log(this.imageData.getImageData())
    this.image=this.imageData.getImageData();
  }
  
}
