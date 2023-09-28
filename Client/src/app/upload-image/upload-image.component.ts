import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ImageDataService } from '../services/image-data.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files : File[] = [];
  progress: number = 0;

  constructor(private uploadService : UploadService, private router:Router, private imageData : ImageDataService){}

  dropFiles(files ?: any) {
    if(files.length===0 || (files.target!==undefined && (files.target.files===0 || files.target.files.length===0 )) ) return;
    var selectedFiles;
    if(files.target){
      selectedFiles = files.target.files;
      files=selectedFiles;
    }
      const filesAmount = files.length;
      for (let i = 0; i < filesAmount; i++) {
        const file = files[i];
        this.files.push(file);
      }
      console.log(this.files);
        this.uploadService.uploadImage(this.files).pipe(tap((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request has been made!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header has been received!');
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round(event.loaded / (event.total || 1) * 100);
              break;
            case HttpEventType.Response:
              this.files=[];
              setTimeout(() => {
                this.progress = 0;
              }, 1500);
          }
        }),
        catchError((e)=>{
          this.progress = 0;
          this.files=[];
          throw new Error("Internal Server Error");
        })
        ).subscribe((res:any)=>{
          if(res && res.body){
            this.imageData.setImageData(res.body.data);
            this.router.navigate(['/image']);
          }
        });
  }

  ngOnInit(): void {
  }

}
