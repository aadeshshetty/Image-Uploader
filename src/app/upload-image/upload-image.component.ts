import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files : File[] = [];

  dropFiles(files ?: any) {
    var files;
    if(files.target){
      files = files.target.files;
    }
      const filesAmount = files.length;
      for (let i = 0; i < filesAmount; i++) {
        const file = files[i];
        this.files.push(file);
      }
      console.log(this.files);
      
  }

  constructor() { }

  ngOnInit(): void {
  }

}
