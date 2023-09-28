import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ImageDataService } from './image-data.service';

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
    const response = this.http.post('http://localhost:4000/upload',formData,{
      reportProgress: true,
      observe: 'events'
    }
    ).pipe(catchError(this.errorMgmt));
    return response;
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  };
}
