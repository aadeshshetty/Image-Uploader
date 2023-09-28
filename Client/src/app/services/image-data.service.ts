import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  private imageDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  
  // Observable to subscribe to changes in the image Data
  imageData$: Observable<any> = this.imageDataSubject.asObservable();

  constructor() {}

  // Method to set the image Data
  setImageData(image: any): void {
    this.imageDataSubject.next(image);    
  }

  // Method to get the current image Data
  getImageData(): string {
    return this.imageDataSubject.value;
  }
}
