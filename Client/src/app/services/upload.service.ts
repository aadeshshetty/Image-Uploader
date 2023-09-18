import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  public uploadImage(files:any){
    const formData = new FormData();
    for(let i=0;i<files.length;i++){
        formData.append('images',files[i]);
    }
    return this.http.post('http://localhost:4000/upload',formData,{
      reportProgress: true,
      observe: 'events'
    }
    );
  }
}
