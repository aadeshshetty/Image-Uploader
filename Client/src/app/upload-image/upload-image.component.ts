import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files : File[] = [];
  progress: number =0;

  constructor(private uploadService : UploadService){}

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
      this.uploadService.uploadImage(this.files).subscribe((event)=>{
       if(event.type === HttpEventType.UploadProgress && event.total){
          this.progress = Math.round((100*event.loaded)/event.total);
       }else if(event.type === HttpEventType.Response){
          this.files=[];
       }
      });
  }

  ngOnInit(): void {
  }

}
